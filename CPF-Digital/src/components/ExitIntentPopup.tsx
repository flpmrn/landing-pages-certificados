"use client";
import React, { useEffect, useState } from "react";

interface ExitPopupProps {
    onApplyDiscount: () => void;
}

export default function ExitIntentPopup({ onApplyDiscount }: ExitPopupProps) {
    const [isVisible, setIsVisible] = useState(false);
    const [hasTriggered, setHasTriggered] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasTriggered) {
                setIsVisible(true);
                setHasTriggered(true);
            }
        };

        document.addEventListener("mouseleave", handleMouseLeave);

        // Fallback para mobile (mostra o popup após 40s de permanência na página se não foi disparado por exit intent visual)
        const timer = setTimeout(() => {
            if (!hasTriggered) {
                setIsVisible(true);
                setHasTriggered(true);
            }
        }, 40000);

        return () => {
            document.removeEventListener("mouseleave", handleMouseLeave);
            clearTimeout(timer);
        };
    }, [hasTriggered]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-blue/80 backdrop-blur-sm px-4">
            <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative animate-fade-in-up">
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 font-bold text-xl"
                >
                    ✕
                </button>
                <div className="text-center">
                    <span className="text-5xl mb-4 block">🎁</span>
                    <h2 className="font-montserrat text-2xl font-bold text-navy-blue mb-2">Espera! Antes de sair...</h2>
                    <p className="font-inter text-gray-600 mb-6 leading-relaxed">
                        Sabemos que a sua vida precisa dessa solução o quanto antes. Liberamos um <strong>cupom exclusivo</strong> que reduz o valor do seu certificado digital de R$ 149,00 para <strong>apenas R$ 99,90</strong>.
                    </p>
                    <button
                        onClick={() => {
                            onApplyDiscount();
                            setIsVisible(false);
                        }}
                        className="w-full bg-bright-orange hover:bg-orange-600 text-white font-bold font-inter py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        EU QUERO O DESCONTO AGORA
                    </button>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="mt-4 text-sm font-inter text-gray-400 underline hover:text-gray-600 block w-full text-center"
                    >
                        Não, prefiro pagar o valor normal (R$ 149,00).
                    </button>
                </div>
            </div>
        </div>
    );
}
