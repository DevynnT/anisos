import type { Metadata } from "next";
import { Rubik, Bree_Serif } from "next/font/google";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });
const bree = Bree_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bree",
});

export const metadata: Metadata = {
  title: "aniSOS",
  description: "Help animals!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rubik.variable} ${bree.variable}`}>{children}</body>
    </html>
  );
}
