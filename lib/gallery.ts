import fs from "node:fs";
import path from "node:path";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
};

const GALLERY_DIR = path.join(process.cwd(), "public", "gallery");
const ALLOWED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".svg"]);
const DIACRITICS_REGEX = new RegExp("[\\u0300-\\u036f]", "g");

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(DIACRITICS_REGEX, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// O nome do arquivo (sem extensão) vira a legenda exibida no site.
// Ex: "Dubai , Emirados Arabes.JPG" -> "Dubai, Emirados Arabes"
function toCaption(filename: string) {
  const withoutExtension = filename.replace(/\.[^/.]+$/, "");
  return withoutExtension.replace(/\s*,\s*/g, ", ").trim();
}

// Lê as fotos direto de /public/gallery: para trocar o destino exibido,
// basta renomear o arquivo — não é preciso alterar nenhum código.
export function getGalleryImages(): GalleryImage[] {
  let files: string[] = [];
  try {
    files = fs.readdirSync(GALLERY_DIR);
  } catch {
    return [];
  }

  return files
    .filter((file) => ALLOWED_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, "pt-BR"))
    .map((file) => {
      const caption = toCaption(file);
      return {
        id: slugify(caption) || slugify(file),
        src: `/gallery/${encodeURI(file)}`,
        alt: `${caption} — viagem realizada com estratégias de milhas aéreas`,
        caption,
      };
    });
}
