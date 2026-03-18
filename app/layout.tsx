import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { MoveEffect } from "@/components/ui/MoveEffect";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Riyan Darmawan | Full-stack Developer & Mechatronics Student",
  description:
    "Official portfolio of Riyan Darmawan, a Mechatronics and AI student at UPI and Full-stack Developer specializing in React, Next.js, and Laravel.",
  keywords: [
    "Riyan Darmawan",
    "Riyan Darmawan Portfolio",
    "Mechatronics UPI",
    "Full-stack Developer Indonesia",
    "Riyan Darmawan Purwakarta"
  ],
  authors: [{ name: "Riyan Darmawan" }],
  openGraph: {
    title: "Riyan Darmawan | Full-stack Developer",
    description: "Explore projects and experience by Riyan Darmawan.",
    url: "https://riyandarmawan.vercel.app",
    siteName: "Riyan Darmawan Portfolio",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "SlyI6hYYCEX4_Xm5Lu8uWVe6wONrdZYTUTY27oy59vE",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Riyan Darmawan",
    "url": "https://riyandarmawan.vercel.app",
    "jobTitle": "Full-stack Developer",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Purwakarta",
      "addressRegion": "West Java",
      "addressCountry": "ID"
    },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Universitas Pendidikan Indonesia"
    },
    "sameAs": [
      "https://github.com/riyandarmawan", // Replace with your actual URLs
      "https://linkedin.com/in/riyandarmawan"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MoveEffect className="min-h-dvh">
            <div className="container flex flex-col md:flex-row justify-center gap-12">
              {children}
            </div>
          </MoveEffect>
        </ThemeProvider>
      </body>
    </html>
  );
}
