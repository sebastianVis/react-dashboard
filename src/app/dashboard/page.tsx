import { DataTable } from "@/components/ui/table/datatable";
import StatsCards from "@/components/ui/stats-cards/statcards";
import { fetchTickets } from "@/features/tickets/api";
import { columns } from "@/components/ui/table/columns";

export default async function DashboardHome() {
  const tickets = await fetchTickets();

  return (
    <section className="px-6 md:px-10 py-6 text-gray-900">
      {/* Headers & Basic info */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Ticket Assignment Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          View and manage automated ticket assignments for technicians.
        </p>
      </header>

      {/* Stats Cards */}
      <StatsCards
        tickets={tickets}
      />

      {/* Table */}
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={tickets} />
      </div>
    </section>
  );
}
