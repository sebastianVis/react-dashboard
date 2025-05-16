// src/app/dashboard/layout.tsx

import { AppSidebar } from "@/components/layout/sidebar/app-sidebar";
import Topbar from "@/components/layout/Topbar";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/layout/sidebar/sidebar";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100">
      <SidebarProvider>
        <AppSidebar />

        {/* Main content */}
        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* Optional topbar */}
          <Topbar />

          <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
            {/* Optional: Sidebar toggle button */}
            <SidebarTrigger className="mb-4 cursor-pointer" />

            {children}
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
}
