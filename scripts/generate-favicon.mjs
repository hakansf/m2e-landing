import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");
const input = path.join(publicDir, "m2e-icon.png");

// Generate 32x32 PNG favicon
await sharp(input)
  .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(path.join(publicDir, "favicon-32x32.png"));

// Generate 16x16 PNG favicon
await sharp(input)
  .resize(16, 16, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(path.join(publicDir, "favicon-16x16.png"));

// Generate ICO-compatible 32x32 as favicon.ico (PNG inside ICO container)
const pngBuffer = await sharp(input)
  .resize(32, 32, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

// Build minimal ICO file wrapping the PNG
const icoHeader = Buffer.alloc(6);
icoHeader.writeUInt16LE(0, 0);      // reserved
icoHeader.writeUInt16LE(1, 2);      // ICO type
icoHeader.writeUInt16LE(1, 4);      // 1 image

const icoEntry = Buffer.alloc(16);
icoEntry.writeUInt8(32, 0);         // width
icoEntry.writeUInt8(32, 1);         // height
icoEntry.writeUInt8(0, 2);          // color palette
icoEntry.writeUInt8(0, 3);          // reserved
icoEntry.writeUInt16LE(1, 4);       // color planes
icoEntry.writeUInt16LE(32, 6);      // bits per pixel
icoEntry.writeUInt32LE(pngBuffer.length, 8);  // image size
icoEntry.writeUInt32LE(22, 12);     // offset (6 + 16 = 22)

const ico = Buffer.concat([icoHeader, icoEntry, pngBuffer]);
const fs = await import("fs");
fs.writeFileSync(path.join(publicDir, "favicon.ico"), ico);

// Generate 180x180 Apple touch icon
await sharp(input)
  .resize(180, 180, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile(path.join(publicDir, "apple-touch-icon.png"));

console.log("Generated:");
console.log("  public/favicon.ico (32x32)");
console.log("  public/favicon-32x32.png");
console.log("  public/favicon-16x16.png");
console.log("  public/apple-touch-icon.png (180x180)");
