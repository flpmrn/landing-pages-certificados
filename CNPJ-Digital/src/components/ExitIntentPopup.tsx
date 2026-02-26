"use client";
import React, { useEffect, useState, useRef } from "react";

interface ExitPopupProps {
    onApplyDiscount: () => void;
}

export default function ExitIntentPopup({ onApplyDiscount }: ExitPopupProps) {
    const [isVisible, setIsVisible] = useState(false);
    const hasTriggered = useRef(false);

    const trigger = () => {
        if (!hasTriggered.current) {
            hasTriggered.current = true;
            setIsVisible(true);
        }
    };

    useEffect(() => {
        // Gatilho 1 (Desktop): mouse sai pelo topo da janela
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 5) trigger();
        };

        // Gatilho 2 (Universal): usuário troca de aba / minimiza janela
        const handleVisibilityChange = () => {
            if (document.hidden) trigger();
        };

        // Gatilho 3 (Mobile): usuário scrolla para baixo e depois scrola de volta
        // (comportamento comum de quem vai fechar o app/browser)
        let lastScrollY = window.scrollY;
        let maxScrollY = window.scrollY;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > maxScrollY) {
                maxScrollY = currentScrollY;
            }
            // Se scrollou para baixo pelo menos 200px e voltou 150px = intenção de sair
            const scrolledDown = maxScrollY > 200;
            const scrollingUp = currentScrollY < lastScrollY - 50;
            if (scrolledDown && scrollingUp && maxScrollY - currentScrollY > 150) {
                trigger();
            }
            lastScrollY = currentScrollY;
        };

        // Gatilho 4 (Fallback): 45 segundos de permanência na página
        const timer = setTimeout(trigger, 45000);

        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("visibilitychange", handleVisibilityChange);
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("visibilitychange", handleVisibilityChange);
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timer);
        };
    }, []);

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
