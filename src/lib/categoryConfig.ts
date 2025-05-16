/**
 * Configuration for ticket category display properties.
 *
 * This module defines label and style mappings for supported ticket categories
 * (e.g., "Retiro", "Instalacion", "Soporte"). These mappings are used to:
 * - Render user-friendly labels in the UI (CATEGORY_LABELS)
 * - Apply consistent styling to category badges (CATEGORY_STYLES)
 *
 * These configurations help centralize presentation logic and keep UI components clean.
 *
 * Usage:
 *   import { CATEGORY_LABELS, CATEGORY_STYLES } from "@/lib/categoryConfig";
 */

export const CATEGORY_STYLES: Record<string, string> = {
  Retiro: "bg-red-500 text-white",
  Soporte: "bg-blue-500 text-white",
  Instalacion: "bg-green-500 text-white",
};

export const CATEGORY_LABELS: Record<string, string> = {
  Retiro: "Retiro",
  Instalacion: "Instalación",
  Soporte: "Soporte",
};
