// Script utilitário (não faz parte do site) para redimensionar/comprimir fotos
// grandes em /public para tamanho de web, sem perda visível de qualidade.
// Uso: node scripts/optimize-images.mjs
import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";

const MAX_WIDTH = 2000;
const JPEG_QUALITY = 80;

const targets = [
  { file: path.join("public", "specialist.jpg") },
  ...fs
    .readdirSync(path.join("public", "gallery"))
    .filter((f) => /\.(jpe?g|png)$/i.test(f))
    .map((f) => ({ file: path.join("public", "gallery", f) })),
];

for (const { file } of targets) {
  const before = fs.statSync(file).size;
  const buffer = await sharp(file)
    .rotate() // aplica orientação EXIF antes de redimensionar
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
    .toBuffer();

  const tmpFile = `${file}.tmp`;
  fs.writeFileSync(tmpFile, buffer);
  fs.renameSync(tmpFile, file);
  const after = fs.statSync(file).size;
  console.log(
    `${file}: ${(before / 1024 / 1024).toFixed(1)}MB -> ${(after / 1024 / 1024).toFixed(2)}MB`
  );
}
