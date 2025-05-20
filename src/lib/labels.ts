// lib/constants.ts or lib/labels.ts
export const TECHNICIAN_NAME_MAP: Record<string, string> = {
  Others: "Técnicos No Activos",
};

export function getTechnicianDisplayName(name: string): string {
  return TECHNICIAN_NAME_MAP[name] ?? name;
}
