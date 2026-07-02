export function rupiah(n: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n);
}

export function angka(n: number): string {
  return new Intl.NumberFormat("id-ID", { maximumFractionDigits: 0 }).format(n);
}

// Rapikan angka yang diketik pengguna dengan pemisah ribuan koma
// (mis. "1000000" menjadi "1,000,000"), sambil tetap mempertahankan titik desimal
// bila ada (mis. "3.5"). Dipakai untuk field input latihan agar mudah dibaca.
export function groupThousands(raw: string): string {
  if (!/\d/.test(raw)) return raw.trim().startsWith("-") ? "-" : "";
  const neg = raw.trim().startsWith("-") ? "-" : "";
  const cleaned = raw.replace(/[^0-9.]/g, "");
  const hasDot = cleaned.includes(".");
  const [intRaw, ...rest] = cleaned.split(".");
  const dec = rest.join("").replace(/[^0-9]/g, "");
  const intPart = intRaw.replace(/^0+(?=\d)/, "") || "0";
  const grouped = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return neg + grouped + (hasDot ? "." + dec : "");
}

// Ubah string berpemisah ribuan (mis. "1,000,000") menjadi angka murni untuk dihitung.
export function parseGrouped(raw: string): number {
  return Number(raw.replace(/[^0-9.-]/g, ""));
}
