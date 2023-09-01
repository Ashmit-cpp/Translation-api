import "./globals.css";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainWrapper from "@/components/MainWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LangBridge",
  description: "Language Translation App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={inter.className}>
        <MainWrapper>
          <Header />
          {children}
        </MainWrapper>
      </body>
    </html>
  );
}
