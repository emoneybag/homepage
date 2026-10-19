import type { Metadata } from "next";
import { Unbounded } from "next/font/google";
import "./globals.css";

const display = Unbounded({ subsets: ["latin"], variable: "--font-display" });
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "S&R Group | Web Design & Development",
  description:
    "S&R Group designs and develops modern, fast and user-friendly websites for businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={display.variable}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}