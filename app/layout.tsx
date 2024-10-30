import type { Metadata } from "next"
import "./globals.css"

import { poppins } from "@/app/fonts"
import { ThemeProvider } from "@/context/theme-context";
import ClientThemeWrapper from "@/context/theme-wrapper";

export const metadata: Metadata = {
  title: "Delivery Hub",
  description: "An all-in-one platform for restaurants to manage their deliveries and track couriers in real-time. Seamlessly connect with multiple delivery platforms and optimize your workflow.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <body className="font-poppins antialiased">
        <ThemeProvider>
          <ClientThemeWrapper>
            {children}
          </ClientThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
