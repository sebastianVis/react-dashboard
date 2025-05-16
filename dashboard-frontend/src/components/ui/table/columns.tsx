"use client";

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
    header: "ID",
  },
  {
    accessorKey: "cliente",
    header: "Cliente",
  },
  {
    accessorKey: "asunto",
    header: "Asunto",
  },
  {
    accessorKey: "categoria",
    header: "Categoría",
  },
  {
    accessorKey: "nombre_tecnico",
    header: "Técnico",
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
