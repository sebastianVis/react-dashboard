"use client";

import { Calendar } from "lucide-react";

export default function DashboardDate() {
  const today = new Date();

  const formattedDate = new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(today);

  return (
    <div className="flex items-center gap-2 text-sm text-gray-600">
        <Calendar className="h-5 w-5" />
      <span className="text-xl">{formattedDate}</span>
    </div>
  );
}
