import type { Metadata } from "next";
import RootProviders from "@/app/root-providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learning Dashboard",
  description: "Track topics, reflections, blockers, and solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <RootProviders>{children}</RootProviders>
      </body>
    </html>
  );
}
