import type { Metadata } from "next";
import { Plus_Jakarta_Sans} from "next/font/google"
import "./globals.css";
import {cn} from "../lib/utils"
import { ThemeProvider } from "@/components/theme-provider";

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700",]
});

export const metadata: Metadata = {
  title: "Care Line",
  description: "A heathcare managment system",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
      { url: "/favicon-128x128.png", sizes: "128x128", type: "image/png" },
    ],
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png", // Optional for Apple devices
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={ cn('min-h-screen font-sans antialiased', fontSans.variable) }
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
