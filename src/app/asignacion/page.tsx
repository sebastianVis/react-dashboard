// app/dashboard/technicians/tickets/page.tsx

import { columns, Ticket } from "@/components/ui/table/columns";
import { DataTable } from "@/components/ui/table/datatable";
import { fetchAssignedTickets } from "@/features/tickets/api";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

/**
 * Displays a page listing all tickets assigned to technicians.
 * 
 * - Uses a card layout to visually separate tickets per technician.
 * - Fetches structured data from the backend: { "Technician Name": Ticket[] }
 * - Reuses the shared `DataTable` and `columns` config for rendering each ticket group.
 */
export default async function TechnicianTicketsPage() {
  // Fetch the assigned tickets grouped by technician
  const res = await fetchAssignedTickets();

  // Ensure we safely extract the technician-to-tickets map (some APIs return array-wrapped objects)
  const technicianMap: Record<string, Ticket[]> = Array.isArray(res) ? res[0] : res;

  return (
    <section className="px-6 py-10">
      {/* Page Heading */}
      <h1 className="text-2xl font-bold mb-8">Tickets Asignados por Técnico</h1>

      {/* Iterate through each technician and their associated tickets */}
      <div className="grid grid-cols-1 gap-8">
        {Object.entries(technicianMap).map(([technicianName, tickets]) => (
          <Card key={technicianName} className="shadow-md">
            {/* Technician name as card header */}
            <CardHeader>
              <CardTitle className="text-lg">{technicianName}</CardTitle>
            </CardHeader>

            {/* Render their tickets using the shared DataTable component */}
            <CardContent>
              <DataTable columns={columns} data={tickets} />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
