import { DataTable } from "@/components/ui/table/datatable";
import StatsCards from "@/components/ui/stats-cards/statcards";
import { fetchAmmountOpenTickets, fetchOpenTickets } from "@/features/tickets/api";
import { columns } from "@/components/ui/table/columns";

export default async function DashboardHome() {
  const tickets = await fetchOpenTickets();
  const ammountOpenTickets = await fetchAmmountOpenTickets();

  return (
    <section className="px-6 md:px-10 py-6 text-gray-900">
      {/* Headers & Basic info */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Ver y administrar asignaciones automatizadas de tickets para técnicos.
        </p>
      </header>

      {/* Stats Cards */}
      <StatsCards
        tickets={ammountOpenTickets}
      />

      {/* Table */}
      <div className="w-full rounded-xl border border-gray-200 shadow-md bg-white p-6 mt-3">
        {/* Title and subtitle */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Tiquetes Recientes</h2>
          <p className="text-sm text-gray-500">Informacion de los ultimos tiquetes</p>
        </div>

        {/* Table */}
        <DataTable columns={columns} data={tickets} />
      </div>
    </section>
  );
}
