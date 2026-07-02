"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
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
            <Toaster richColors position="bottom-right" />
            {children}
          </ThemeProvider>
        </UserDataProvider>
      </Provider>
    </ClerkProvider>
  );
};

export default RootProviders;
