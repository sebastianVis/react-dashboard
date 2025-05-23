// src/components/layout/Topbar.tsx

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Topbar component displayed at the top of the dashboard layout.
 *
 * It includes:
 * - A title ("Coordinador Tickets")
 * - Navigation buttons to /dashboard and /asignacion
 * - A placeholder avatar on the right
 *
 * @component
 */
export default function Topbar() {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/asignacion", label: "Asignación" },
    { href: "/formulario", label: "Formulario" },
  ];

  return (
    <header className="w-full bg-white h-16 border-b px-6 flex items-center justify-between">
      {/* Left: Title and Nav Buttons */}
      <div className="flex items-center gap-6">
        <h1 className="text-lg font-semibold text-gray-800">Coordinador Tickets</h1>
        <nav className="flex gap-3">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium px-3 py-1.5 rounded-md transition-colors ${
                pathname === href
                  ? "bg-gray-100 text-gray-600 "
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Right: Avatar */}
      <div className="flex items-center gap-4">
        <div className="w-8 h-8 bg-gray-300 rounded-full" />
      </div>
    </header>
  );
}
