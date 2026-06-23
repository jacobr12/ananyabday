import type { Metadata } from "next";
import { Caveat, Fraunces, Nunito } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const caveat = Caveat({
  variable: "--font-handwriting",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "🎂 happy birthday ananya, you are amazing and great and awesome",
  description:
    "happy birthday ananya, you are amazing and great and awesome. Wander upstairs and downstairs, and read letters from the people who love her.",
  openGraph: {
    title: "🎂 happy birthday ananya, you are amazing and great and awesome",
    description: "happy birthday ananya, you are amazing and great and awesome",
    type: "website",
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
      className={`${fraunces.variable} ${nunito.variable} ${caveat.variable} h-full`}
    >
      <body className="min-h-full font-body antialiased text-[#5c4a3a]">
        {children}
      </body>
    </html>
  );
}
