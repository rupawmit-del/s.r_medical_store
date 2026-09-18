import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

function createPNG(width, height, drawFn) {
  const bytesPerPixel = 4;
  const rowSize = width * bytesPerPixel;
  const rawData = Buffer.alloc((rowSize + 1) * height);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * (rowSize + 1);
    rawData[rowOffset] = 0; // Filter type: None
    for (let x = 0; x < width; x++) {
      const pixelOffset = rowOffset + 1 + x * bytesPerPixel;
      const [r, g, b, a] = drawFn(x, y, width, height);
      rawData[pixelOffset] = r;
      rawData[pixelOffset + 1] = g;
      rawData[pixelOffset + 2] = b;
      rawData[pixelOffset + 3] = a;
    }
  }

  const deflated = zlib.deflateSync(rawData);

  function crc32(buf) {
    let crc = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      crc ^= buf[i];
      for (let j = 0; j < 8; j++) {
        crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
      }
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function makeChunk(type, data) {
    const len = Buffer.alloc(4);
    len.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, 'ascii');
    const crcBuf = Buffer.alloc(4);
    const crc = crc32(Buffer.concat([typeBuf, data]));
    crcBuf.writeUInt32BE(crc, 0);
    return Buffer.concat([len, typeBuf, data, crcBuf]);
  }

  const header = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // 8 bit depth
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0; // compression
  ihdr[11] = 0; // filter
  ihdr[12] = 0; // interlace

  const ihdrChunk = makeChunk('IHDR', ihdr);
  const idatChunk = makeChunk('IDAT', deflated);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([header, ihdrChunk, idatChunk, iendChunk]);
}

// Draw S.R Medical Store icon (Emerald medical green #0A8F6A with medical cross and S.R)
function drawIcon(x, y, w, h, isMaskable = false) {
  const cx = w / 2;
  const cy = h / 2;
  const r = Math.min(w, h) / 2;
  const dist = Math.hypot(x - cx, y - cy);

  // Background
  if (!isMaskable && dist > r - 4) {
    return [0, 0, 0, 0]; // Transparent outside circle for standard icons
  }

  // Gradient background #0A8F6A to #055942
  const grad = y / h;
  const bgR = Math.round(10 * (1 - grad) + 5 * grad);
  const bgG = Math.round(143 * (1 - grad) + 89 * grad);
  const bgB = Math.round(106 * (1 - grad) + 66 * grad);

  // Center white cross with rounded corners
  const crossWidth = w * 0.16;
  const crossLength = w * 0.44;

  const inVert = Math.abs(x - cx) <= crossWidth / 2 && Math.abs(y - cy) <= crossLength / 2;
  const inHoriz = Math.abs(y - cy) <= crossWidth / 2 && Math.abs(x - cx) <= crossLength / 2;

  if (inVert || inHoriz) {
    return [255, 255, 255, 255]; // White medical cross
  }

  // Subtle outer ring
  if (!isMaskable && dist >= r - 12 && dist <= r - 5) {
    return [255, 255, 255, 180];
  }

  return [bgR, bgG, bgB, 255];
}

const iconsDir = path.resolve('public/icons');
if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

// Generate sizes
fs.writeFileSync(path.join(iconsDir, 'icon-192.png'), createPNG(192, 192, (x, y, w, h) => drawIcon(x, y, w, h, false)));
fs.writeFileSync(path.join(iconsDir, 'icon-512.png'), createPNG(512, 512, (x, y, w, h) => drawIcon(x, y, w, h, false)));
fs.writeFileSync(path.join(iconsDir, 'icon-maskable-192.png'), createPNG(192, 192, (x, y, w, h) => drawIcon(x, y, w, h, true)));
fs.writeFileSync(path.join(iconsDir, 'icon-maskable-512.png'), createPNG(512, 512, (x, y, w, h) => drawIcon(x, y, w, h, true)));
fs.writeFileSync(path.join(iconsDir, 'apple-touch-icon.png'), createPNG(180, 180, (x, y, w, h) => drawIcon(x, y, w, h, true)));
fs.writeFileSync(path.resolve('public/apple-touch-icon.png'), createPNG(180, 180, (x, y, w, h) => drawIcon(x, y, w, h, true)));

console.log('Icons generated successfully!');
