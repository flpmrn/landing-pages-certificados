"use client";

import React from "react";

interface PurchaseStepsProps {
    ctaText: string;
    whatsappMessage: string;
}

export default function PurchaseStepsCNPJ({ ctaText, whatsappMessage }: PurchaseStepsProps) {
    const handleCTA = () => {
        const wppNumber = "5516988443346";
        window.location.href = `https://wa.me/${wppNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    };

    return (
        <section className="bg-light-gray py-20 pb-32">
            <div className="w-full max-w-5xl mx-auto px-4 text-center">

                {/* FAQ CNPJ */}
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-left mb-16">
                    <h3 className="font-montserrat text-2xl font-bold text-navy-blue mb-4">
                        Meu e-CNPJ anterior é de outra empresa. Posso renovar com a Fácil Certificadora?
                    </h3>
                    <p className="font-inter text-gray-700 leading-relaxed text-lg">
                        <strong>Sim.</strong> Realizamos a portabilidade da sua certificadora sem burocracia, com total sigilo dos seus dados. Não perca mais tempo e aproveite essa oportunidade.
                    </p>
                </div>

                {/* Garantia Suporte */}
                <div className="flex flex-col items-center mb-16 px-4">
                    <div className="w-20 h-20 bg-blue-50 text-navy-blue rounded-full flex items-center justify-center mb-6">
                        <ShieldIcon />
                    </div>
                    <h3 className="font-montserrat text-2xl font-bold text-navy-blue mb-4">
                        Suporte técnico especializado.
                    </h3>
                    <p className="font-inter text-gray-600 max-w-2xl text-lg">
                        Há 15 anos na vanguarda da identidade virtual. Oferecemos mais do que tecnologia; contamos com uma equipe experiente focada em resolver o seu problema de ponta a ponta.
                    </p>
                </div>

                {/* CTA FINAL */}
                <button
                    onClick={handleCTA}
                    className="bg-bright-orange hover:bg-orange-600 text-white font-montserrat font-black text-xl md:text-2xl py-6 px-10 rounded-xl shadow-lg transition-transform hover:-translate-y-1 w-full md:w-auto mt-4"
                >
                    {ctaText}
                </button>
            </div>
        </section>
    );
}

function ShieldIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}
