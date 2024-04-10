import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

import Kollectif from 'next/font/local'

const kollectif = Kollectif({
  weight: '400',
  variable: '--font-kollectif',
  src: './fonts/Kollektif.ttf',
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kollectif.className}>
      <body className="scroll-smooth">
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          <div>{children}</div>
          </ThemeProvider>
      </body>
    </html>
  );
}
