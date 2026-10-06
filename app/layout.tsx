import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sihadjamal.dev"),
  title: "Sihad Jamal | Software Engineer & Flutter Developer",
  description:
    "Sihad Jamal is a Software Engineer and Flutter Developer specializing in modern web and mobile application development using React, Flutter, JavaScript, and modern technologies.",
  keywords: [
    "Sihad Jamal",
    "Software Engineer",
    "Flutter Developer",
    "Frontend Developer",
    "React Developer",
    "Mobile App Developer",
    "Tailwind CSS",
    "Salahaddin University",
    "Erbil",
    "Iraq",
    "Web Developer",
    "Three.js",
  ],
  authors: [{ name: "Sihad Jamal" }],
  creator: "Sihad Jamal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sihadjamal.dev",
    siteName: "Sihad Jamal Portfolio",
    title: "Sihad Jamal | Software Engineer & Flutter Developer",
    description:
      "Sihad Jamal is a Software Engineer and Flutter Developer specializing in modern web and mobile application development using React, Flutter, JavaScript, and modern technologies.",
    images: [
      {
        url: "/person.png",
        width: 800,
        height: 800,
        alt: "Sihad Jamal - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sihad Jamal | Software Engineer & Flutter Developer",
    description:
      "Software Engineer & Flutter Developer specializing in modern web and mobile applications.",
    images: ["/person.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#111827] text-[#F3F4F6] selection:bg-[#3B6EA8] selection:text-white flex flex-col">
        {children}
      </body>
    </html>
  );
}
