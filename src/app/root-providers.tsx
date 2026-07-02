"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import { HeaderProvider, SidebarProvider } from "@/app/providers";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import UserDataProvider from "@/components/providers/UserDataProvider";
import { ThemeProvider } from "@/components/theme-provider";
import { store } from "@/redux/store";

const RootProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <Provider store={store}>
        <UserDataProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <HeaderProvider>
              <SidebarProvider>
                <main className="flex h-screen bg-[#e5e5e5] dark:bg-sidebar overflow-hidden">
                  <Sidebar />
                  <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
                    <Header />
                    <div className="flex-1 overflow-y-auto bg-[#e5e5e5] dark:bg-sidebar">
                      <Toaster richColors position="bottom-right" />
                      {children}
                    </div>
                  </div>
                </main>
              </SidebarProvider>
            </HeaderProvider>
          </ThemeProvider>
        </UserDataProvider>
      </Provider>
    </ClerkProvider>
  );
};

export default RootProviders;
