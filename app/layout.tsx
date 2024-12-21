import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { MoveEffect } from "@/components/ui/MoveEffect";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Riyan Darmawan's Portfolio",
  description:
    "I create websites that are easy to use and work well on all devices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MoveEffect>{children}</MoveEffect>
        </ThemeProvider>
      </body>
    </html>
  );
}
