import "./globals.css";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MainWrapper from "@/components/MainWrapper";
import { ClerkProvider } from '@clerk/nextjs'
import Translator from "@/components/Translator";

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
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <MainWrapper>
          <Header />
          <Translator/>
          {children}
        </MainWrapper>
      </body>
    </html>
    </ClerkProvider>

  );
}
