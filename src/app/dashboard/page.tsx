import { DataTable } from "@/components/ui/table/datatable";
import StatsCards from "@/components/ui/stats-cards/statcards";
import { fetchAmmountOpenTickets, fetchAvgResponseTime, fetchOpenTickets, fetchTechniciansTickets, fetchTicketsNotAssigned } from "@/features/tickets/api";
import { columns } from "@/components/ui/table/columns";
import TechnicianList from "@/components/ui/technicianstats/TechnicianList";

export default async function DashboardHome() {
  const tickets = await fetchOpenTickets();
  const ammountOpenTickets = await fetchAmmountOpenTickets();
  const AvgResponseTimes = await fetchAvgResponseTime();
  const techniciansTickets = await fetchTechniciansTickets();
  const ticketsNotAssigned = await fetchTicketsNotAssigned();

  console.log(AvgResponseTimes)
  return (
    <section className="px-6 md:px-10 py-6 text-gray-900">
      {/* Headers & Basic info */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </header>
      {/* Stats Cards */}
      <StatsCards
        tickets={ammountOpenTickets}
        avgResponseTimes={AvgResponseTimes}
        noAssigned={ticketsNotAssigned}
      />
      
      {/* Table */}
      <div className="w-full rounded-xl border border-gray-200 shadow-md bg-white p-6 mt-3">
        {/* Title and subtitle */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Tickets Recientes</h2>
          <p className="text-sm text-gray-500">Informacion de los ultimos Tickets</p>
        </div>
        {/* Table */}
        <div className="w-full rounded-xl border border-gray-200 shadow-md bg-white p-6 mt-3">
          <DataTable columns={columns} data={tickets} />
        </div>
      </div>


        {/* Technician List */}
      <div className="w-full rounded-xl border border-gray-200 shadow-md bg-white p-6 mt-3">
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Carga de Trabajo por Técnico</h2>
          <p className="text-sm text-gray-500">Informacion sobre los tickets asignados por tecnico</p>
        </div>
        <TechnicianList technicians={techniciansTickets} />
      </div>
    </section>
  );
}
