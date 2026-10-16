// Generates high-resolution ID card textures matching the authentic GenLab ID card
const TEXTURE_VERSION = 6;
const cache = new Map();

/**
 * Draws the GenLab 4-quadrant geometric pinwheel logo
 */
function drawGenLabLogo(ctx, x, y, size, color) {
  ctx.save();
  ctx.fillStyle = color;
  const gap = Math.max(2, size * 0.08);
  const blade = (size - gap) / 2;
  const radius = blade * 0.95;

  const drawBlade = (bx, by, roundCorner) => {
    ctx.beginPath();
    ctx.moveTo(bx, by);
    if (roundCorner === 'tl') {
      ctx.arcTo(bx, by, bx + blade, by, radius);
      ctx.lineTo(bx + blade, by);
      ctx.lineTo(bx + blade, by + blade);
      ctx.lineTo(bx, by + blade);
    } else if (roundCorner === 'tr') {
      ctx.lineTo(bx + blade - radius, by);
      ctx.arcTo(bx + blade, by + blade, bx + blade, by + radius, radius);
      ctx.lineTo(bx + blade, by + blade);
      ctx.lineTo(bx, by + blade);
    } else if (roundCorner === 'br') {
      ctx.lineTo(bx + blade, by);
      ctx.lineTo(bx + blade, by + blade - radius);
      ctx.arcTo(bx + blade, by + blade, bx + blade - radius, by + blade, radius);
      ctx.lineTo(bx, by + blade);
    } else if (roundCorner === 'bl') {
      ctx.lineTo(bx + blade, by);
      ctx.lineTo(bx + blade, by + blade);
      ctx.lineTo(bx + radius, by + blade);
      ctx.arcTo(bx, by + blade, bx, by + blade - radius, radius);
    }
    ctx.closePath();
    ctx.fill();
  };

  drawBlade(x, y, 'tl');
  drawBlade(x + blade + gap, y, 'tr');
  drawBlade(x + blade + gap, y + blade + gap, 'br');
  drawBlade(x, y + blade + gap, 'bl');

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

    // Top: Teammate Name (placed with generous space below clamp/slot reach)
    ctx.fillStyle = '#111827';
    ctx.font = '600 56px "Plus Jakarta Sans", -apple-system, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(member.name, 68, 275);

    // Top: Badge ID Code
    ctx.fillStyle = '#64748b';
    ctx.font = '500 28px "Plus Jakarta Sans", monospace';
    ctx.fillText(member.badgeId || 'GL/EE/26/01', 68, 320);

    // Center: Portrait Photo Box
    const photoBoxX = 68;
    const photoBoxY = 345;
    const photoBoxW = 664;
    const photoBoxH = 630;
    const photoRadius = 20;

    ctx.save();
    roundRect(ctx, photoBoxX, photoBoxY, photoBoxW, photoBoxH, photoRadius);
    ctx.clip();

    // Soft neutral grey background inside photo box
    ctx.fillStyle = '#eef1f4';
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
  // 3. STRAP CANVAS (Black strap with GenLab mark)
  // ==========================================
  const strapCanvas = document.createElement('canvas');
  strapCanvas.width = 192;
  strapCanvas.height = 384;
  const sctx = strapCanvas.getContext('2d');
  if (sctx) {
    sctx.fillStyle = '#0f1013';
    sctx.fillRect(0, 0, strapCanvas.width, strapCanvas.height);

    // White GenLab pinwheel on strap
    drawGenLabLogo(sctx, 72, 168, 48, '#ffffff');
  }

  const result = {
    frontUrl: frontCanvas.toDataURL('image/png'),
    backUrl: backCanvas.toDataURL('image/png'),
    strapUrl: strapCanvas.toDataURL('image/png')
  };

  cache.set(cacheKey, result);
  return result;
}
