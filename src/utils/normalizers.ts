// utils/normalizers.ts
export const normalizeEmail = (v?: string | null) =>
  v ? v.trim().toLowerCase() : null;

export const normalizeMobile = (v?: string | null) => {
  if (!v) return null;
  const d = v.replace(/\D/g, '');
  if (!d) return null;
  if (d.length === 10) return `+1${d}`;
  if (d.startsWith('1') && d.length === 11) return `+${d}`;
  if (v.startsWith('+')) return v;
  return `+${d}`;
};
