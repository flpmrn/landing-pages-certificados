import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "e-CNPJ A1 | Fácil Certificadora Digital",
  description: "Emissão e renovação urgente de e-CNPJ A1. Não interrompa as vendas da sua empresa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${montserrat.variable} font-sans bg-light-gray text-navy-blue antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
