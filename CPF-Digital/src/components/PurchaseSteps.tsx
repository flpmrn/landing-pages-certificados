"use client";

import React from "react";

interface PurchaseStepsProps {
    ctaText: string;
    whatsappMessage: string;
}

export default function PurchaseSteps({ ctaText, whatsappMessage }: PurchaseStepsProps) {
    const handleCTA = () => {
        const wppNumber = "5516988443346";
        window.location.href = `https://wa.me/${wppNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    };

    return (
        <section className="bg-light-gray py-20 pb-32">
            <div className="w-full max-w-5xl mx-auto px-4 text-center">

                <div className="flex justify-center items-center gap-2 mb-12">
                    <span className="bg-navy-blue text-white text-sm font-inter font-semibold px-4 py-2 rounded-full uppercase tracking-wider flex items-center gap-2 shadow-sm">
                        <ShieldIcon /> Emissão autorizada pelos padrões ICP-Brasil e Governo Federal.
                    </span>
                </div>

                <h2 className="font-montserrat text-3xl font-bold text-navy-blue mb-12">
                    Três passos para a sua liberdade digital:
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16 relative">

                    <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 z-10 relative">
                        <div className="w-16 h-16 bg-blue-50 text-navy-blue rounded-full flex items-center justify-center font-montserrat font-black text-2xl mb-6 shadow-inner">
                            1
                        </div>
                        <h3 className="font-montserrat font-bold text-lg text-navy-blue mb-3">Cadastro</h3>
                        <p className="font-inter text-gray-600 text-sm leading-relaxed">
                            preencha seus dados e garanta a essa oferta exclusiva.
                        </p>
                    </div>

                    <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 z-10 relative">
                        <div className="w-16 h-16 bg-blue-50 text-navy-blue rounded-full flex items-center justify-center font-montserrat font-black text-2xl mb-6 shadow-inner">
                            2
                        </div>
                        <h3 className="font-montserrat font-bold text-lg text-navy-blue mb-3">Atendimento</h3>
                        <p className="font-inter text-gray-600 text-sm leading-relaxed">
                            um especialista entrará em contato pelo WhatsApp com as instruções.
                        </p>
                    </div>

                    <div className="flex flex-col items-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 z-10 relative">
                        <div className="w-16 h-16 bg-blue-50 text-navy-blue rounded-full flex items-center justify-center font-montserrat font-black text-2xl mb-6 shadow-inner">
                            3
                        </div>
                        <h3 className="font-montserrat font-bold text-lg text-navy-blue mb-3">Videoconferência</h3>
                        <p className="font-inter text-gray-600 text-sm leading-relaxed">
                            valide sua identidade pelo celular ou computador e receba o certificado por e-mail em instantes.
                        </p>
                    </div>

                </div>

                <button
                    onClick={handleCTA}
                    className="bg-bright-orange hover:bg-orange-600 text-white font-montserrat font-black text-xl md:text-2xl py-6 px-10 rounded-xl shadow-lg transition-transform hover:-translate-y-1 w-full md:w-auto"
                >
                    {ctaText}
                </button>
            </div>
        </section>
    );
}

function ShieldIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
        </svg>
    );
}
