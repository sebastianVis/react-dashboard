"use client";

/**
 * TechnicianResponsibilities Component
 * ------------------------------------
 * Displays a list of technicians with their assigned ticket responsibilities.
 *
 * 🔹 This component:
 * - Accepts a map of technician names to pipe-separated responsibility strings
 * - Splits those strings into category badges
 * - Renders one card per technician, stacked vertically
 *
 * ✅ Uses:
 * - ShadCN UI (Card, Badge)
 * - Custom label/color helpers from categoryConfig
 */

import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { styleFor, labelFor } from "@/lib/categoryConfig";
import MonthYearDisplay from "../month-year-display";

type ResponsibilitiesMap = Record<string, string>;

interface TechnicianResponsibilitiesProps {
  data: ResponsibilitiesMap;
}

export default function TechnicianResponsibilities({ data }: TechnicianResponsibilitiesProps) {
  return (
    <Card>
      {/* Section header */}
      <CardHeader>
        <h2 className="text-2xl font-bold text-gray-900">Asignación</h2>
        <MonthYearDisplay />
        <p className="text-sm text-gray-500">
          Información sobre el último sorteo de asignación.
        </p>
      </CardHeader>

      {/* Technician responsibility list */}
      <CardContent>
        <div className="space-y-4">
          {Object.entries(data).map(([technician, rawRoles]) => {
            // Parse roles (e.g., "Soporte|Instalación") into individual category strings
            const roles = rawRoles.split("|").map((r) => r.trim());

            return (
              <div
                key={technician}
                className="border rounded-md p-4"
              >
                {/* Technician name */}
                <p className="text-sm font-semibold text-gray-800 mb-2">
                  {technician}
                </p>

                {/* Category badges */}
                <div className="flex flex-wrap gap-2">
                  {roles.map((role) => (
                    <Badge
                      key={role}
                      className={`text-xs font-medium px-3 py-1 rounded-full ${styleFor(role)}`}
                    >
                      {labelFor(role)}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
