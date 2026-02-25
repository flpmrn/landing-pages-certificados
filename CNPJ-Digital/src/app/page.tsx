"use client";
import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PassiveFooter from "@/components/PassiveFooter";
import PurchaseStepsCNPJ from "@/components/PurchaseStepsCNPJ";
import ExitIntentPopup from "@/components/ExitIntentPopup";

export default function CNPJPage() {
    const [hasDiscount, setHasDiscount] = useState(false);

    const heroCopy = {
        headline: "Emitir ou Renovar e-CNPJ Online: Seu Negócio Não Pode Parar.",
        subheadline: "Não interrompa as vendas da sua empresa. Retome o acesso a portal da Receita Federal. Garanta a Emissão de Notas Fiscais no seu aplicativo em Nuvem. Valide seu certificado via videoconferência pelo celular.",
        promoLabel: hasDiscount ? "🎁 CUPOM APLICADO COM SUCESSO" : "🔥 A MAIOR REDUÇÃO DE CUSTO FIXO DO ANO",
        oldPriceLabel: hasDiscount ? "De R$:" : "Valor presencial:",
        oldPrice: hasDiscount ? "149,00" : "235,00",
        newPriceLabel: hasDiscount ? "Desconto exclusivo ativado:" : "online por apenas:",
        newPriceInt: hasDiscount ? "99" : "149",
        newPriceCents: hasDiscount ? ",90" : ",00",
        disclaimer: "(Válido para CNPJ)",
        logoSrc: "https://facilcertificadora.com.br/images/logo-novo.png"
    };

    const crossSellData = {
        text: "👤 Seu contador pediu um e-CPF pessoal? Emita aqui.",
        url: "https://cpfdigital.com.br"
    };

    const formCopy = {
        title: "Resolvemos o seu problema.",
        subtitle: "A aprovação é imediata após o atendimento e você instala tudo hoje mesmo.",
        inputs: {
            name: "Qual o seu Nome?",
            email: "E-mail Comercial",
            whatsapp: "WhatsApp (DDD)"
        },
        cta: "GARANTIR MEU E-CNPJ AGORA ➔",
        whatsappMessage: "Olá! Gostaria de aproveitar a oferta do e-CNPJ A1 por R$ 99,90. Preciso liberar meu faturamento rapidamente via videoconferência. Como começamos?"
    };

    const featuresList = [
        {
            title: "Múltiplas instalações para faturamento distribuído.",
            description: "Elimine o gargalo de depender de um único pendrive. O e-CNPJ A1 pode ser instalado simultaneamente em vários computadores, permitindo que diferentes setores emitam notas fiscais com autonomia.",
        },
        {
            title: "Integração perfeita com ERPs e contabilidades.",
            description: "O formato A1 é a modalidade mais recomendada para uma integração rápida e sem falhas com emissores de notas fiscais em nuvem e sistemas de gestão tributária.",
        },
        {
            title: "Acesso total aos portais governamentais.",
            description: "Acesse rapidamente a Conectividade Social da Caixa (SEFIP/FGTS), o e-CAC (com delegação de procurações eletrônicas sem restrições), a Junta Comercial e os portais do Simples Nacional.",
        },
        {
            title: "Validação remota pelo celular.",
            description: "Na rotina ágil de um executivo, perder tempo em agências é inadmissível. Com a Fácil Certificadora, a verificação de titularidade é feita por uma rápida videochamada, agendada conforme a sua disponibilidade.",
        }
    ];

    const whatsappMessage = "Olá! Gostaria de aproveitar a oferta do e-CNPJ A1 por R$ 99,90 para emissão/renovação. Preciso liberar meu faturamento rapidamente via videoconferência. Como começamos?";

    return (
        <main className="min-h-screen bg-light-gray flex flex-col pt-0">
            <ExitIntentPopup onApplyDiscount={() => setHasDiscount(true)} />
            <div className="flex-grow">
                <HeroSection
                    copy={heroCopy}
                    crossSell={crossSellData}
                    formCopy={formCopy}
                    product="e-CNPJ A1"
                    bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2569&auto=format&fit=crop"
                />
                <FeatureGrid
                    title="A superioridade estratégica do e-CNPJ A1 sobre o cartão inteligente."
                    features={featuresList}
                />
                <PurchaseStepsCNPJ ctaText="EMITIR OU RENOVAR E-CNPJ COM ECONOMIA" whatsappMessage={whatsappMessage} />
            </div>

            <FloatingWhatsApp whatsappMessage={whatsappMessage} />
            <PassiveFooter product="e-CNPJ A1" text="Soluções e identidades integradas ao ITI e à Receita Federal do Brasil. Há 15 anos protegendo o ecossistema financeiro e desburocratizando transações sigilosas no país. O valor promocional pode ser alterado sem aviso prévio." />
        </main>
    );
}
