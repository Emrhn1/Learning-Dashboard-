"use client";

import { HeaderProvider, SidebarProvider } from "@/app/providers";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

const DashboardShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <HeaderProvider>
      <SidebarProvider>
        <main className="flex h-screen bg-[#e5e5e5] dark:bg-sidebar overflow-hidden">
          <Sidebar />
          <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
            <Header />
            <div className="flex-1 overflow-y-auto bg-[#e5e5e5] dark:bg-sidebar">
              {children}
            </div>
          </div>
        </main>
      </SidebarProvider>
    </HeaderProvider>
  );
};

export default DashboardShell;
