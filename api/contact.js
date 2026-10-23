const MAX_BODY_BYTES = 10_000;
const REASONS = new Set([
  "careers",
  "business",
  "internships",
  "training_programs_courses",
  "incubation_support",
]);

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[character]);
}

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed." });
  }

  const contentLength = Number(request.headers["content-length"] || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return response.status(413).json({ error: "The form submission is too large." });
  }

  const body = request.body && typeof request.body === "object" ? request.body : {};
  const { name, email, phone, reason, project, consent, website, experience = "" } = body;
  if (typeof website === "string" && website.trim()) {
    return response.status(400).json({ error: "Please check the form and try again." });
  }

  if (
    typeof name !== "string" ||
    name.trim().length < 1 ||
    name.length > 120 ||
    !/^[A-Za-z\s]+$/.test(name.trim()) ||
    typeof email !== "string" ||
    email.length > 254 ||
    !isValidEmail(email.trim()) ||
    typeof phone !== "string" ||
    !/^[0-9+\-\s()]{7,20}$/.test(phone.trim()) ||
    typeof reason !== "string" ||
    !REASONS.has(reason) ||
    typeof project !== "string" ||
    project.length > 5000 ||
    typeof experience !== "string" ||
    experience.length > 100 ||
    consent !== true
  ) {
    return response.status(400).json({ error: "Please check the form fields and try again." });
  }

  const reasonLabels = {
    careers: "Career enquiry",
    business: "Business enquiry",
    internships: "Internship enquiry",
    training_programs_courses: "Courses enquiry",
    incubation_support: "Careers enquiry",
  };

  const apiKey = process.env.BREVO_API_KEY;
  const senderEmail = process.env.BREVO_SENDER_EMAIL;
  const companyEmail = process.env.COMPANY_EMAIL;

  // If Brevo email notification is not configured, finish successfully
  if (!apiKey || !senderEmail || !companyEmail) {
    return response.status(200).json({ ok: true, deliveryStatus: "accepted" });
  }
  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safePhone = escapeHtml(phone.trim());
  const safeExperience = escapeHtml(experience || "Not provided");
  const safeProject = escapeHtml(project.trim() || "No additional details provided.").replace(/\r?\n/g, "<br>");
  const subject = `Website contact form: ${reasonLabels[reason]}`;

  let brevoResponse;
  try {
    brevoResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: { email: senderEmail, name: "GenLab Website" },
        to: [{ email: companyEmail }],
        replyTo: { email: email.trim(), name: name.trim() },
        subject,
        htmlContent: [
          `<h2>New website contact form submission</h2>`,
          `<p><strong>Name:</strong> ${safeName}</p>`,
          `<p><strong>Email:</strong> ${safeEmail}</p>`,
          `<p><strong>Phone:</strong> ${safePhone}</p>`,
          `<p><strong>Reason:</strong> ${reasonLabels[reason]}</p>`,
          ...(reason === "careers" ? [`<p><strong>Experience:</strong> ${safeExperience}</p>`] : []),
          `<p><strong>Details:</strong><br>${safeProject}</p>`,
        ].join(""),
        textContent: [
          "New website contact form submission",
          `Name: ${name.trim()}`,
          `Email: ${email.trim()}`,
          `Phone: ${phone.trim()}`,
          `Reason: ${reasonLabels[reason]}`,
          ...(reason === "careers" ? [`Experience: ${experience || "Not provided"}`] : []),
          `Details: ${project.trim() || "No additional details provided."}`,
        ].join("\n"),
      }),
      signal: AbortSignal.timeout(10_000),
    });
  } catch (error) {
    console.error("Brevo contact email request failed.", error.name);
    return response.status(502).json({ error: "We couldn't send your message right now. Please try again." });
  }

  if (!brevoResponse.ok) {
    console.error("Brevo rejected the contact email.", brevoResponse.status);
    if (brevoResponse.status === 401) {
      return response.status(502).json({
        error: "Brevo rejected the API key. Check that BREVO_API_KEY is a valid, active Brevo API v3 key (not an SMTP key), then restart the local server.",
      });
    }
    if (brevoResponse.status === 403) {
      return response.status(502).json({
        error: "Brevo denied this email request. Check the API key permissions and sender verification in Brevo.",
      });
    }
    return response.status(502).json({ error: "We couldn't send your message right now. Please try again." });
  }

  let brevoResult;
  try {
    brevoResult = await brevoResponse.json();
  } catch (error) {
    console.error("Brevo returned an invalid success response.", error.name);
    return response.status(502).json({ error: "We couldn't confirm that your message was accepted. Please try again." });
  }

  if (typeof brevoResult?.messageId !== "string" || !brevoResult.messageId) {
    console.error("Brevo success response did not include a message ID.");
    return response.status(502).json({ error: "We couldn't confirm that your message was accepted. Please try again." });
  }

  return response.status(200).json({ ok: true, deliveryStatus: "accepted" });
}
