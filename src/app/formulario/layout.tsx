// src/app/config/layout.tsx
import Topbar from "@/components/layout/Topbar";

export default function ConfigLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <div className="flex-1 overflow-y-auto p-4">
        {children}
      </div>
    </div>
  );
}
