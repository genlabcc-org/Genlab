// Generates high-resolution ID card textures matching the authentic GenLab ID card
const TEXTURE_VERSION = 10;
const cache = new Map();

const GENLAB_PINWHEEL_PATHS = [
  'M14.6512 0C14.6512 1.85035 13.8794 3.62491 12.5055 4.9333C11.1317 6.2417 9.26845 6.97674 7.32558 6.97674C5.38272 6.97674 3.51943 6.2417 2.14561 4.9333C0.7718 3.62491 2.93364e-07 1.85035 0 1.05346e-06L14.6512 0Z',
  'M1.78814e-07 14.6512C1.78814e-07 12.8008 0.771801 11.0263 2.14561 9.71786C3.51943 8.40947 5.38272 7.67442 7.32558 7.67442C9.26845 7.67442 11.1317 8.40947 12.5055 9.71786C13.8794 11.0263 14.6512 12.8008 14.6512 14.6512L1.78814e-07 14.6512Z',
  'M15.3488 1.78814e-07C17.1992 1.78814e-07 18.9737 0.771801 20.2821 2.14561C21.5905 3.51943 22.3256 5.38272 22.3256 7.32558C22.3256 9.26845 21.5905 11.1317 20.2821 12.5055C18.9737 13.8794 17.1992 14.6512 15.3488 14.6512L15.3488 1.78814e-07Z',
  'M30 14.6512C28.1497 14.6512 26.3751 13.8794 25.0667 12.5055C23.7583 11.1317 23.0233 9.26845 23.0233 7.32558C23.0233 5.38272 23.7583 3.51943 25.0667 2.14561C26.3751 0.771801 28.1497 2.93364e-07 30 0V14.6512Z',
  'M0 15.3488C1.85035 15.3488 3.62491 16.1206 4.9333 17.4945C6.2417 18.8683 6.97674 20.7316 6.97674 22.6744C6.97674 24.6173 6.2417 26.4806 4.9333 27.8544C3.62491 29.2282 1.85035 30 1.05346e-06 30L0 15.3488Z',
  'M14.6512 30C12.8008 30 11.0263 29.2282 9.71786 27.8544C8.40946 26.4806 7.67442 24.6173 7.67442 22.6744C7.67442 20.7316 8.40946 18.8683 9.71786 17.4945C11.0263 16.1206 12.8008 15.3488 14.6512 15.3488L14.6512 30Z',
  'M30 15.3488C30 17.1992 29.2282 18.9737 27.8544 20.2821C26.4806 21.5905 24.6173 22.3256 22.6744 22.3256C20.7316 22.3256 18.8683 21.5905 17.4945 20.2821C16.1206 18.9737 15.3488 17.1992 15.3488 15.3488L30 15.3488Z',
  'M15.3488 30C15.3488 28.1497 16.1206 26.3751 17.4944 25.0667C18.8683 23.7583 20.7316 23.0233 22.6744 23.0233C24.6173 23.0233 26.4806 23.7583 27.8544 25.0667C29.2282 26.3751 30 28.1497 30 30H15.3488Z'
];

let cachedPathObjects = null;

function getGenLabPaths() {
  if (cachedPathObjects) return cachedPathObjects;
  if (typeof Path2D !== 'undefined') {
    cachedPathObjects = GENLAB_PINWHEEL_PATHS.map((p) => new Path2D(p));
  }
  return cachedPathObjects;
}

/**
 * Draws the official GenLab 8-petal geometric pinwheel logo from SVG paths
 */
function drawGenLabLogo(ctx, x, y, size, color) {
  ctx.save();
  ctx.translate(x, y);
  const scale = size / 30;
  ctx.scale(scale, scale);
  ctx.fillStyle = color;

  const paths = getGenLabPaths();
  if (paths) {
    paths.forEach((p) => ctx.fill(p));
  }
  ctx.restore();
}

/**
 * Procedural QR code renderer for authentic look
 */
function drawQrCode(ctx, startX, startY, size, darkColor, lightColor) {
  ctx.save();
  const cells = 21;
  const cellSize = size / cells;

  if (lightColor) {
    ctx.fillStyle = lightColor;
    ctx.fillRect(startX, startY, size, size);
  }

  ctx.fillStyle = darkColor;

  const drawFinder = (cx, cy) => {
    ctx.fillRect(startX + cx * cellSize, startY + cy * cellSize, 7 * cellSize, 7 * cellSize);
    ctx.fillStyle = lightColor || '#ffffff';
    ctx.fillRect(startX + (cx + 1) * cellSize, startY + (cy + 1) * cellSize, 5 * cellSize, 5 * cellSize);
    ctx.fillStyle = darkColor;
    ctx.fillRect(startX + (cx + 2) * cellSize, startY + (cy + 2) * cellSize, 3 * cellSize, 3 * cellSize);
  };

  drawFinder(0, 0);
  drawFinder(14, 0);
  drawFinder(0, 14);

  for (let i = 8; i < 13; i += 2) {
    ctx.fillRect(startX + i * cellSize, startY + 6 * cellSize, cellSize, cellSize);
    ctx.fillRect(startX + 6 * cellSize, startY + i * cellSize, cellSize, cellSize);
  }

  const patternSeed = [
    [1, 0, 1, 1, 0, 1, 0],
    [0, 1, 1, 0, 1, 0, 1],
    [1, 1, 0, 1, 0, 1, 1],
    [0, 0, 1, 1, 1, 0, 0],
    [1, 0, 0, 1, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 1],
    [1, 0, 1, 0, 0, 1, 0]
  ];

  for (let r = 0; r < 7; r++) {
    for (let c = 0; c < 7; c++) {
      if (patternSeed[r][c]) {
        ctx.fillRect(startX + (7 + c) * cellSize, startY + (7 + r) * cellSize, cellSize, cellSize);
      }
      if ((r + c) % 3 === 0) {
        ctx.fillRect(startX + (14 + c) * cellSize, startY + (8 + r) * cellSize, cellSize, cellSize);
        ctx.fillRect(startX + (8 + c) * cellSize, startY + (14 + r) * cellSize, cellSize, cellSize);
      }
    }
  }

  ctx.restore();
}

/**
 * Draws rounded rectangle helper
 */
function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

export async function getBadgeTextures(member) {
  const cacheKey = `${member.id}_v${TEXTURE_VERSION}`;
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  // Load photo
  const photo = await new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = member.image;
  });

  const width = 800;
  const height = 1250;

  // ==========================================
  // 1. FRONT BADGE CANVAS (Authentic White ID)
  // ==========================================
  const frontCanvas = document.createElement('canvas');
  frontCanvas.width = width;
  frontCanvas.height = height;
  const ctx = frontCanvas.getContext('2d');

  if (ctx) {
    // Pure White Card Background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    // 1. Top-Left: Number Badge (e.g. 01, 02, 03)
    const numText = String(member.id).padStart(2, '0');
    ctx.fillStyle = '#94a3b8';
    ctx.font = '600 22px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(numText, 68, 205);

    // 2. Member Name (Bold and Crisp)
    ctx.fillStyle = '#111827';
    ctx.font = 'bold 44px "Plus Jakarta Sans", -apple-system, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(member.name, 68, 258);

    // 3. Member Role (Subtle Grey under Name)
    ctx.fillStyle = '#64748b';
    ctx.font = '500 22px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(member.role, 68, 295);

    // 4. Top-Right: Vibrant Green Diagonal Arrow ↗
    ctx.fillStyle = '#c2e600';
    ctx.font = 'bold 38px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'right';
    ctx.fillText('↗', 732, 230);

    // 5. Top-Right: Badge ID Code (e.g. GL/EZ/26/01)
    ctx.fillStyle = '#94a3b8';
    ctx.font = '500 20px monospace';
    ctx.textAlign = 'right';
    const badgeCode = member.badgeId ? member.badgeId.replace('EE', 'EZ') : `GL/EZ/26/${numText}`;
    ctx.fillText(badgeCode, 732, 268);
    ctx.textAlign = 'left';

    // Center: Portrait Photo Box (starts at Y=320)
    const photoBoxX = 68;
    const photoBoxY = 320;
    const photoBoxW = 664;
    const photoBoxH = 650;
    const photoRadius = 18;

    ctx.save();
    roundRect(ctx, photoBoxX, photoBoxY, photoBoxW, photoBoxH, photoRadius);
    ctx.clip();

    // Soft neutral grey background inside photo box
    ctx.fillStyle = '#f1f3f5';
    ctx.fillRect(photoBoxX, photoBoxY, photoBoxW, photoBoxH);

    if (photo) {
      // Scale and center photo focusing on the face/torso
      const imgAspect = photo.width / photo.height;
      const targetAspect = photoBoxW / photoBoxH;
      let drawW, drawH, drawX, drawY;

      if (imgAspect > targetAspect) {
        drawH = photoBoxH;
        drawW = photoBoxH * imgAspect;
        drawX = photoBoxX + (photoBoxW - drawW) / 2;
        drawY = photoBoxY;
      } else {
        drawW = photoBoxW;
        drawH = photoBoxW / imgAspect;
        drawX = photoBoxX;
        drawY = photoBoxY;
      }

      ctx.drawImage(photo, drawX, drawY, drawW, drawH);
    }
    ctx.restore();

    // Bottom-Left: GenLab Logo & Subtitle
    const logoSize = 60;
    const logoX = 68;
    const logoY = 1005;
    drawGenLabLogo(ctx, logoX, logoY, logoSize, '#111827');

    // GenLab text
    ctx.fillStyle = '#111827';
    ctx.font = 'bold 46px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('GenLab', logoX + logoSize + 16, logoY + 42);

    // Yellow star symbol ✦ on the top-right of 'b'
    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 30px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('✦', logoX + logoSize + 180, logoY + 22);

    // Subtitle: The Gen Z Creators' Space
    ctx.fillStyle = '#64748b';
    ctx.font = '500 23px "Plus Jakarta Sans", sans-serif';
    ctx.fillText("The Gen Z Creators' Space", logoX + logoSize + 16, logoY + 80);

    // Bottom-Right: QR Code
    drawQrCode(ctx, 592, 988, 140, '#111827', '#ffffff');
  }

  // ==========================================
  // 2. BACK BADGE CANVAS (Authentic Matte Black)
  // ==========================================
  const backCanvas = document.createElement('canvas');
  backCanvas.width = width;
  backCanvas.height = height;
  const bctx = backCanvas.getContext('2d');

  if (bctx) {
    // Matte dark charcoal background
    bctx.fillStyle = '#121316';
    bctx.fillRect(0, 0, width, height);

    // Top: White GenLab Logo (below clamp reach)
    const logoSize = 76;
    drawGenLabLogo(bctx, 68, 190, logoSize, '#ffffff');

    // GenLab brand title
    bctx.fillStyle = '#ffffff';
    bctx.font = 'bold 60px "Plus Jakarta Sans", sans-serif';
    bctx.textAlign = 'left';
    bctx.fillText('GenLab', 68, 320);

    // Gold star on 'b'
    bctx.fillStyle = '#f59e0b';
    bctx.font = 'bold 34px "Plus Jakarta Sans", sans-serif';
    bctx.fillText('✦', 296, 294);

    // Subtitle
    bctx.fillStyle = '#94a3b8';
    bctx.font = '500 26px "Plus Jakarta Sans", sans-serif';
    bctx.fillText("The Gen Z Creators' Space", 68, 364);

    // 3 Contact Columns
    const rowY = 450;

    // Col 1: Website
    bctx.fillStyle = '#64748b';
    bctx.font = '500 22px "Plus Jakarta Sans", sans-serif';
    bctx.fillText('www.', 68, rowY);
    bctx.fillStyle = '#ffffff';
    bctx.font = '600 26px "Plus Jakarta Sans", sans-serif';
    bctx.fillText('genlab.cc', 68, rowY + 36);

    // Col 2: Info email
    bctx.fillStyle = '#64748b';
    bctx.font = '500 22px "Plus Jakarta Sans", sans-serif';
    bctx.fillText('Info', 290, rowY);
    bctx.fillStyle = '#ffffff';
    bctx.font = '600 26px "Plus Jakarta Sans", sans-serif';
    bctx.fillText('@genlab.cc', 290, rowY + 36);

    // Col 3: Phone
    bctx.fillStyle = '#64748b';
    bctx.font = '500 22px "Plus Jakarta Sans", sans-serif';
    bctx.fillText('+91', 510, rowY);
    bctx.fillStyle = '#ffffff';
    bctx.font = '600 26px "Plus Jakarta Sans", sans-serif';
    bctx.fillText('99945 35120', 510, rowY + 36);

    // Dashed divider line
    bctx.save();
    bctx.setLineDash([8, 8]);
    bctx.strokeStyle = 'rgba(255, 255, 255, 0.18)';
    bctx.lineWidth = 1.5;
    bctx.beginPath();
    bctx.moveTo(68, 560);
    bctx.lineTo(732, 560);
    bctx.stroke();
    bctx.restore();

    // Emergency row
    const emY = 640;
    bctx.fillStyle = '#64748b';
    bctx.font = '500 22px "Plus Jakarta Sans", sans-serif';
    bctx.fillText('Blood', 68, emY);
    bctx.fillStyle = '#ffffff';
    bctx.font = '600 30px "Plus Jakarta Sans", sans-serif';
    bctx.fillText(member.bloodGroup || 'O+', 68, emY + 38);

    bctx.fillStyle = '#64748b';
    bctx.font = '500 22px "Plus Jakarta Sans", sans-serif';
    bctx.fillText('+91', 510, emY);
    bctx.fillStyle = '#ffffff';
    bctx.font = '600 30px "Plus Jakarta Sans", sans-serif';
    bctx.fillText('8056415314', 510, emY + 38);

    // Bottom section: QR code + Address
    drawQrCode(bctx, 68, 770, 160, '#ffffff', '#121316');

    bctx.fillStyle = '#e2e8f0';
    bctx.font = '500 24px "Plus Jakarta Sans", sans-serif';
    bctx.fillText('121/C, Chetti Kulam, Nagercoil,', 260, 815);
    bctx.fillText('Tamil Nadu 629001', 260, 852);

    bctx.fillStyle = '#64748b';
    bctx.font = '400 18px "Plus Jakarta Sans", sans-serif';
    bctx.fillText('If found, kindly return to address mentioned above.', 260, 920);
  }

  // ==========================================
  // 3. STRAP CANVAS (Shared Black strap with GenLab mark)
  // ==========================================
  frontCanvas._canvasId = `gl_front_${member.id}`;
  backCanvas._canvasId = `gl_back_${member.id}`;

  const result = {
    frontUrl: frontCanvas,
    backUrl: backCanvas,
    strapUrl: getSharedStrapCanvas()
  };

  cache.set(cacheKey, result);
  return result;
}

let sharedStrapCanvas = null;

function getSharedStrapCanvas() {
  if (sharedStrapCanvas) return sharedStrapCanvas;
  const strapCanvas = document.createElement('canvas');
  strapCanvas.width = 192;
  strapCanvas.height = 384;
  strapCanvas._canvasId = 'gl_strap_shared_v10';
  const sctx = strapCanvas.getContext('2d');
  if (sctx) {
    // Clean matte dark charcoal strap - pure fabric, zero logos or text
    sctx.fillStyle = '#0d0e12';
    sctx.fillRect(0, 0, strapCanvas.width, strapCanvas.height);

    // Subtle micro weave texture
    sctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
    for (let y = 0; y < strapCanvas.height; y += 4) {
      sctx.fillRect(0, y, strapCanvas.width, 1.5);
    }

    // Subtle edge stitch detail
    sctx.fillStyle = 'rgba(255, 255, 255, 0.06)';
    sctx.fillRect(10, 0, 2, strapCanvas.height);
    sctx.fillRect(strapCanvas.width - 12, 0, 2, strapCanvas.height);
  }
  sharedStrapCanvas = strapCanvas;
  return strapCanvas;
}
