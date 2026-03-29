import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { MoveEffect } from "@/components/ui/MoveEffect";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Riyan Darmawan | Full-stack Developer & Mechatronics & AI Student",
  description:
    "Official portfolio of Riyan Darmawan, a Mechatronics and AI student at UPI and Full-stack Developer specializing in React, Next.js, and Laravel.",
  authors: [{ name: "Riyan Darmawan", url: "https://riyandarmawan.vercel.app" }],
  creator: "Riyan Darmawan",
  publisher: "Riyan Darmawan",
  alternates: {
    canonical: "https://riyandarmawan.vercel.app",
  },
  openGraph: {
    title: "Riyan Darmawan | Full-stack Developer",
    description: "Explore projects and experience by Riyan Darmawan, a full-stack developer and mechatronics student.",
    url: "https://riyandarmawan.vercel.app",
    siteName: "Riyan Darmawan Portfolio",
    images: [
      {
        url: "https://riyandarmawan.vercel.app/img/projects/next-gen-portfolio.png",
        width: 1200,
        height: 630,
        alt: "Riyan Darmawan - Full-stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riyan Darmawan | Full-stack Developer & Mechatronics Student",
    description: "Official portfolio of Riyan Darmawan, a Mechatronics and AI student at UPI and Full-stack Developer.",
    creator: "@RiyanDarmawan__",
    images: ["https://riyandarmawan.vercel.app/img/projects/next-gen-portfolio.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "SlyI6hYYCEX4_Xm5Lu8uWVe6wONrdZYTUTY27oy59vE",
  },
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
      "https://github.com/riyandarmawan", 
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
