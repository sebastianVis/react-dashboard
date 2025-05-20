// app/dashboard/technicians/tickets/page.tsx

import { columns, Ticket } from "@/components/ui/table/columns";
import { DataTable } from "@/components/ui/table/datatable";
import { fetchAssignedTickets, fetchTechniciansResp } from "@/features/tickets/api";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import TechnicianResponsibilities from "@/components/ui/techniciansresponsability/techniciansresponsabilities";
import { getTechnicianDisplayName } from "@/lib/labels";

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
  const roles = await fetchTechniciansResp();

  // Ensure we safely extract the technician-to-tickets map (some APIs return array-wrapped objects)
  const technicianMap: Record<string, Ticket[]> = Array.isArray(res) ? res[0] : res;

  return (
    <section className="px-6 py-10">
      {/* Page Heading */}
      

      {/* Responsibilities of each technician */}
      <div className="grid grid-cols-1 mb-8">
        <TechnicianResponsibilities data={roles} />
      </div>
      {/* Iterate through each technician and their associated tickets */}
      <div className="w-full rounded-xl border border-gray-200 shadow-md bg-white p-6 mt-3">
        <CardHeader>
          <h1 className="text-2xl font-bold">Tickets Priorizados por Técnico</h1>
          <p className="text-sm text-gray-500 mb-8">Informacion sobre los tickets asignados a cada tecnico.</p>
        </CardHeader>
        <div className="grid grid-cols-1 gap-8">
          {Object.entries(technicianMap).map(([technicianName, tickets]) => (
            <Card key={technicianName} className="shadow-md">
              {/* Technician name as card header */}
              <CardHeader>
                <CardTitle className="text-lg">{getTechnicianDisplayName(technicianName)}</CardTitle>
              </CardHeader>

              {/* Render their tickets using the shared DataTable component */}
              <CardContent>
                <DataTable columns={columns} data={tickets} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
