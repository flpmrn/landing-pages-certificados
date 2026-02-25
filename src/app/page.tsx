import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fácil Certificadora Digital | Demonstração",
  description: "Portal de Demonstração das Landing Pages do e-CPF A1 e e-CNPJ A1",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-light-gray flex flex-col items-center justify-center p-6 text-center">
      <h1 className="font-montserrat text-4xl font-extrabold text-navy-blue mb-4">
        Fácil Certificadora Digital
      </h1>
      <p className="font-inter text-lg text-gray-600 mb-10 max-w-lg">
        Bem-vindo! Selecione abaixo qual ambiente de demonstração de Landing Page você deseja acessar.
      </p>

      <div className="flex flex-col sm:flex-row gap-6">
        <Link
          href="/cpf"
          className="bg-navy-blue text-white px-8 py-5 rounded-xl font-montserrat font-bold text-xl hover:bg-slate-800 transition-colors shadow-md"
        >
          Visualizar e-CPF A1
        </Link>
        <Link
          href="/cnpj"
          className="bg-navy-blue text-white px-8 py-5 rounded-xl font-montserrat font-bold text-xl hover:bg-slate-800 transition-colors shadow-md"
        >
          Visualizar e-CNPJ A1
        </Link>
      </div>
    </main>
  );
}
