import DashboardShell from "@/app/dashboard-shell";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <DashboardShell>{children}</DashboardShell>;
};

export default DashboardLayout;
