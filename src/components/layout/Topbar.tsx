// src/components/layout/Topbar.tsx

"use client";

/**
 * Topbar component displayed at the top of the dashboard layout.
 *
 * It includes:
 * - A title ("Dashboard")
 * - A placeholder avatar on the right side
 *
 * @component
 */
export default function Topbar() {
  return (
    <header className="w-full bg-white h-16 border-b p-6 flex items-center justify-between">
      {/* Dashboard Title */}
      <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>

      {/* Right-side section: currently contains only a placeholder avatar */}
      <div className="flex items-center gap-4">
        {/* Placeholder avatar circle */}
        <div className="w-8 h-8 bg-gray-300 rounded-full" />
      </div>
    </header>
  );
}
