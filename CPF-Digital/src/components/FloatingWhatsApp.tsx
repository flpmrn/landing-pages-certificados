import React from "react";
import { MessageSquare } from "lucide-react";

interface FloatingWhatsAppProps {
    whatsappMessage: string;
}

export default function FloatingWhatsApp({ whatsappMessage }: FloatingWhatsAppProps) {
    const wppNumber = "5516988443346";
    const whatsappUrl = `https://wa.me/${wppNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-4 bg-bright-orange hover:bg-orange-600 shadow-xl rounded-full transition-all hover:scale-110 animate-pulse group"
            aria-label="Falar no WhatsApp"
        >
            <MessageSquare className="w-7 h-7 text-white" />
            <span className="absolute -top-10 right-0 bg-navy-blue text-white text-xs font-inter px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-lg">
                Precisa de ajuda?
            </span>
        </a>
    );
}

