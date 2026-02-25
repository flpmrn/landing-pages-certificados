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
  title: "e-CPF A1 | Fácil Certificadora Digital",
  description: "O seu e-CPF A1 sem sair de casa: rápido, seguro e por videoconferência.",
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
