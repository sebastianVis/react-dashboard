"use client";

import { Progress } from "@/components/ui/progress";

type RawTechnicianData = Record<string, Record<string, number>>;

const CAPACITIES = {
  Soporte: 10,
  Instalacion: 10,
  Retiro: 10,
  Traslado: 10,
} as const;

export default function TechnicianList({ technicians }: { technicians: RawTechnicianData }) {
  return (
    <div className="space-y-8">
      {Object.entries(technicians).map(([name, categories]) => {
        return (
          <div
            key={name}
            className="space-y-3 p-4 border rounded-md hover:bg-slate-50 transition-colors cursor-pointer"
            onClick={() =>
              (window.location.href = `/dashboard/`)
            }
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{name}</div>
                <div className="text-xs text-muted-foreground">Carga por categoría de Tickets</div>
              </div>
            </div>

            {/* Per-category progress */}
            {Object.entries(CAPACITIES).map(([category, capacity]) => {
              const assigned = categories[category] || 0;
              const percentage = (assigned / capacity) * 100;

              return (
                <div key={category} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span>{category}</span>
                    <span className="font-medium">
                      {assigned}/{capacity} ({percentage.toFixed(0)}%)
                    </span>
                  </div>
                  <Progress
                    value={percentage}
                    className={percentage >= 100 ? "bg-red-100" : ""}
                  />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
