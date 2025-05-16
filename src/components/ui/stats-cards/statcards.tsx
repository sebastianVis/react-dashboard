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
import { Ticket } from "../table/columns";

interface StatsCardsProps {
  tickets: Ticket[]; // Consider typing this better in future (e.g. Ticket[])
}

export default function StatsCards({
  tickets,
}: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Total Open Tickets */}
      <Card>
        <CardHeader>
          <CardDescription className="font-medium text-sm text-muted-foreground">
            Total Open Tickets
          </CardDescription>
          <CardTitle className="text-3xl font-semibold tabular-nums">
            {tickets.length}
          </CardTitle>
        </CardHeader>
      </Card>

      {/* Tickets assigned today (currently hardcoded) */}
      <Card>
        <CardHeader>
          <CardDescription className="font-medium text-sm text-muted-foreground">
            Assigned Today
          </CardDescription>
          <CardTitle className="text-3xl font-semibold tabular-nums">3</CardTitle>
        </CardHeader>
      </Card>

      {/* Average response time (currently hardcoded) */}
      <Card>
        <CardHeader>
          <CardDescription className="font-medium text-sm text-muted-foreground">
            Average Response Time
          </CardDescription>
          <CardTitle className="text-3xl font-semibold tabular-nums">2</CardTitle>
        </CardHeader>
      </Card>

      {/* Number of active technicians (currently hardcoded) */}
      <Card>
        <CardHeader>
          <CardDescription className="font-medium text-sm text-muted-foreground">
            Active Technicians
          </CardDescription>
          <CardTitle className="text-3xl font-semibold tabular-nums">1</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
