"use client";

import { CATEGORY_LABELS, CATEGORY_STYLES } from "@/lib/categoryConfig";
/**
 * Column definitions for the Ticket table.
 *
 * This configuration is used by @tanstack/react-table to define:
 * - Column labels (headers)
 * - Field accessors (via accessorKey)
 * - Optional cell rendering logic
 *
 * ⚠️ NOTE:
 * Some columns like `fecha_soporte` and `fecha_cerrado` had custom formatting
 * (e.g., converting to `toLocaleString()`), but those render functions have been
 * temporarily commented out to avoid hydration issues in server/client mismatch.
 */

import { ColumnDef } from "@tanstack/react-table";

export type Ticket = {
  id: number;
  cliente: string;
  telefono_cliente: string;
  direccion_principal: string;
  asunto: string;
  categoria: string;
  nombre_tecnico: string | null;
  numero_tecnico: string | null;
  fecha_soporte: string;
  fecha_cerrado: string;
};

export const columns: ColumnDef<Ticket>[] = [
  {
    accessorKey: "id",
    header: "Ticket",
    cell: ({ row }) => {
      const id = row.getValue("id") as number; //This might not be the best practices.
      const asunto = row.original.asunto as string;
      return (
        <div className="items-center text-left gap-2">
          <div className="text-md font-bold text-gray-900">
            {id}
          </div>
          <div className="text-sm text-gray-500">
            {asunto}
          </div>
        </div>
      );
    }
  },
  {
    accessorKey: "cliente",
    header: "Cliente",
  },
  {
    accessorKey: "categoria",
    header: "Categoría",
    cell: ({ row }) => {
      const categoria = row.getValue("categoria") as string;
      const label = CATEGORY_LABELS[categoria] || categoria;
      const style = CATEGORY_STYLES[categoria] || "bg-gray-400 text-white";

      return (
        <div className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${style}`}>
          {label}
        </div>
      );
    },
  },
  {
    accessorKey: "nombre_tecnico",
    header: "Técnico",
    cell: ({ row }) => {
      const nombreTecnico = row.getValue("nombre_tecnico") as string;
      return (
        <div className="text-sm text-gray-500">
          {nombreTecnico || "Sin asignar"}
        </div>
      );
    },
  },
  {
    accessorKey: "fecha_soporte",
    header: "Fecha Soporte",
    //cell: ({ row }) => {
    //   const date = new Date(row.getValue("fecha_soporte"));
    //   const formated = date.toLocaleString();
    //   return <div>{formated}</div>
    // },
  },
  {
    accessorKey: "fecha_cerrado",
    header: "Fecha Cierre",
    // Temporarily comment out the formatting to avoid hydration issues
    // cell: ({ getValue }) => {
    //   const value = getValue() as string;
    //   if (value === "0000-00-00 00:00:00") return "Abierto";
    //   return new Date(value).toLocaleString();
    // },
  },
];
