"use client";

import { Calendar } from "lucide-react";

export default function MonthYearDisplay() {
  const today = new Date();

  const formattedMonthYear = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(today);

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Calendar className="w-5 h-5" />
      <span className="text-xl">{formattedMonthYear}</span>
    </div>
  );
}
