import React from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function ObrigadoPage() {
    return (
        <div className="min-h-screen bg-navy-blue flex items-center justify-center p-4 text-center bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2569&auto=format&fit=crop')] bg-cover bg-center">
            <div className="absolute inset-0 bg-navy-blue/90 backdrop-blur-sm"></div>

            <div className="bg-white p-10 md:p-14 rounded-3xl max-w-lg shadow-2xl relative z-10 animate-fade-in-up">
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                <h1 className="text-3xl font-montserrat font-bold text-navy-blue mb-3">
                    Solicitação Recebida!
                </h1>
                <p className="font-inter text-gray-600 mb-8 leading-relaxed">
                    A sua solicitação foi enviada para a nossa fila de atendimento prioritário. Em breve, um especialista em certificação digital entrará em contato com você via WhatsApp ou E-mail para prosseguir com a validação do seu e-CNPJ por videoconferência.
                </p>

                <Link
                    href="/"
                    className="inline-block bg-gray-100 hover:bg-gray-200 text-navy-blue font-semibold font-inter py-3 px-8 rounded-xl transition-colors"
                >
                    Voltar para o início
                </Link>

                <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="font-inter text-sm text-gray-400">Fácil Certificadora Digital</p>
                </div>
            </div>
        </div>
    );
}
