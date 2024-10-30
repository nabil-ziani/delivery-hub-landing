import "@/app/globals.css"

import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'

import { poppins } from "@/app/fonts"
import { ThemeProvider } from "@/context/theme-context"

import ClientThemeWrapper from "@/context/theme-wrapper"
import Navbar from "@/components/navbar"
import { Locale } from "@/types"

export const metadata: Metadata = {
  title: "Delivery Hub",
  description: "An all-in-one platform for restaurants to manage their deliveries and track couriers in real-time. Seamlessly connect with multiple delivery platforms and optimize your workflow.",
}

export default async function RootLayout({ children, params }: Readonly<{ children: React.ReactNode, params: { locale: string } }>) {

  const { locale } = await params

  if (!routing.locales.includes(locale as Locale)) {
    notFound()
  }

  const messages = await getMessages({ locale })

  return (
    <html lang={locale} suppressHydrationWarning className={poppins.variable}>
      <body className="font-poppins antialiased">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <ClientThemeWrapper>
              <Navbar />
              {children}
            </ClientThemeWrapper>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
