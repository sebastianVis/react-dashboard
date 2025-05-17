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
import { labelFor, styleFor } from "@/lib/categoryConfig";
import { Activity, CheckCircle, Clock, Users } from "lucide-react";
import Badge from "../badge";
import { PiechartTickets } from "../piechart/Piechart";

type TicketData = Record<string, number>

export interface AvgResponseTime {
  categoria: string;
  dias_promedio: string;
}

interface StatsCardsProps {
  tickets: number;
  avgResponseTimes: AvgResponseTime[];
  noAssigned: TicketData;
}

export default function StatsCards({
  tickets,
  avgResponseTimes,
  noAssigned,
}: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
      {/* Total Open Tickets */}
      <Card className="h-full flex flex-col">
        <CardHeader>
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <CardDescription className="font-medium text-sm text-muted-foreground mr-auto">
                Tickets Abiertos
              </CardDescription>
              <Activity className="w-4 h-4" />
            </div>
          <CardTitle className="text-7xl font-semibold tabular-nums">
            {tickets}
          </CardTitle>
        </CardHeader>
      </Card>

      {/* Tickets assigned today (currently hardcoded) */}
      <Card className="h-full flex flex-col">
        <CardHeader>
            <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
              <CardDescription className="font-medium text-sm text-muted-foreground mr-auto">
                Tickets Asignados Hoy
              </CardDescription>
              <CheckCircle className="w-4 h-4" />
            </div>
          <CardTitle className="text-7xl font-semibold tabular-nums">3</CardTitle>
        </CardHeader>
      </Card>

      {/*Avg Response Time cards w Endpoint*/}
      <Card className="h-full flex flex-col">
        <CardHeader>
          {/* Header line */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <CardDescription className="font-medium mr-auto">
              Tiempo Promedio de Respuesta (Días)
            </CardDescription>
            <Clock className="w-4 h-4" />
          </div>

          {/* Grid layout: 2 columns */}
          <CardTitle className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
            {avgResponseTimes.map(({ categoria, dias_promedio }) => (
              <div
                key={categoria}
                className="flex items-center gap-4 justify-between"
              >
                {/* left: coloured badge with the category */}
                <Badge
                  className={`inline-block px-3 py-1 text-xs font-semibold rounded-full text-center ${styleFor(
                    categoria,
                  )}`}
                >
                  {labelFor(categoria)}
                </Badge>

                {/* right: plain text number, aligned with tabular figures */}
                <span className="tabular-nums font-semibold">
                  {Number(dias_promedio).toFixed(2)}
                </span>
              </div>
            ))}
          </CardTitle>
        </CardHeader>
      </Card>


      {/* Number of active technicians (currently hardcoded) */}
      <div className="h-full flex flex-col">
        <PiechartTickets data={noAssigned}/>
      </div>
      
    </div>
  );
}
