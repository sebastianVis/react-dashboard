"use client";

/**
 * Displays a grid of summary statistic cards on the dashboard.
 *
 * @component
 * @param {Object} props
 * @param {Array} props.tickets - Array of ticket objects.
 *
 * KPIs displayed:
 * - Total Open Tickets (from `tickets.length`)
 * - Assigned Today (currently hardcoded as 3)
 * - Average Response Time (currently hardcoded as 2)
 * - Active Technicians (currently hardcoded as 1)
 */
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Activity, CheckCircle, Clock, Users } from "lucide-react";

interface StatsCardsProps {
  tickets: number;
}

export default function StatsCards({
  tickets,
}: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Total Open Tickets */}
      <Card>
        <CardHeader>
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <CardDescription className="font-medium text-sm text-muted-foreground mr-auto">
                Tickets Abiertos
              </CardDescription>
              <Activity className="w-4 h-4" />
            </div>
          <CardTitle className="text-3xl font-semibold tabular-nums">
            {tickets}
          </CardTitle>
        </CardHeader>
      </Card>

      {/* Tickets assigned today (currently hardcoded) */}
      <Card>
        <CardHeader>
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <CardDescription className="font-medium text-sm text-muted-foreground mr-auto">
                Tickets Asignados Hoy
              </CardDescription>
              <CheckCircle className="w-4 h-4" />
            </div>
          <CardTitle className="text-3xl font-semibold tabular-nums">3</CardTitle>
        </CardHeader>
      </Card>

      {/* Average response time (currently hardcoded) */}
      <Card>
        <CardHeader>
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <CardDescription className="font-medium text-sm text-muted-foreground mr-auto">
                Tiempo Promedio de Respuesta
              </CardDescription>
              <Clock className="w-4 h-4" />
            </div>
          <CardTitle className="text-3xl font-semibold tabular-nums">2</CardTitle>
        </CardHeader>
      </Card>

      {/* Number of active technicians (currently hardcoded) */}
      <Card>
        <CardHeader>
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <CardDescription className="font-medium text-sm text-muted-foreground mr-auto">
                Tecnicos Activos
              </CardDescription>
              <Users className="w-4 h-4" />
            </div>
          <CardTitle className="text-3xl font-semibold tabular-nums">1</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
