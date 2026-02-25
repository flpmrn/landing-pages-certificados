"use client";
import React, { useState } from "react";
import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PassiveFooter from "@/components/PassiveFooter";
import PurchaseSteps from "@/components/PurchaseSteps";
import ExitIntentPopup from "@/components/ExitIntentPopup";

export default function CPFPage() {
    const [hasDiscount, setHasDiscount] = useState(false);

    const heroCopy = {
        headline: "Emitir Certificado Digital Online na Hora: Rápido e Sem Burocracia.",
        subheadline: "Não trave seu acesso aos sites do Governo e evite problemas com multas da Receita Federal. Renove seu e-CPF hoje mesmo por videoconferência, direto do seu celular, em menos de 10 minutos.",
        promoLabel: hasDiscount ? "🎁 CUPOM APLICADO COM SUCESSO" : "⚠️ Emissão autorizada ICP-Brasil",
        oldPriceLabel: hasDiscount ? "De R$:" : "Valor padrão:",
        oldPrice: hasDiscount ? "129,00" : "160,00",
        newPriceLabel: hasDiscount ? "Desconto exclusivo ativado:" : "Por tempo limitado: apenas",
        newPriceInt: hasDiscount ? "99" : "149",
        newPriceCents: hasDiscount ? ",90" : ",00",
        logoSrc: "https://facilcertificadora.com.br/images/logo-novo.png"
    };

    const crossSellData = {
        text: "💼 Ou precisa emitir um e-CNPJ para sua empresa? Clique aqui.",
        url: "https://cnpjdigital.com.br"
    };

    const formCopy = {
        title: "Fale com um Especialista e libere sua emissão:",
        subtitle: "A aprovação é imediata após o atendimento e você instala hoje mesmo.",
        inputs: {
            name: "Qual o seu Nome?",
            email: "Seu melhor E-mail",
            whatsapp: "WhatsApp (DDD)"
        },
        cta: "EMITIR MEU CERTIFICADO AGORA ➔",
        whatsappMessage: "Olá! Gostaria de um e-CPF A1 online na hora e sem burocracia por R$ 99,90. Como chamo o especialista de vídeo?"
    };

    const featuresList = [
        {
            title: "Armazenamento 100% no computador.",
            description: "Esqueça tokens USB e cartões. O e-CPF A1 é um arquivo digital seguro, instalado diretamente na sua máquina para facilitar o uso diário.",
        },
        {
            title: "Assinaturas com validade jurídica.",
            description: "Assine financiamentos, contratos de aluguel ou petições com total respaldo legal. Reduza custos com despachantes e evite idas aos cartórios.",
        },
        {
            title: "Acesso irrestrito ao e-CAC.",
            description: "Esqueça as senhas antigas. Envie sua Declaração de Imposto de Renda (DIRPF), acesse dados pré-preenchidos e consulte o status da sua restituição instantaneamente.",
        },
        {
            title: "Validação por videoconferência.",
            description: "Com a credibilidade da Fácil Certificadora, a verificação de identidade é feita em uma rápida chamada de vídeo. Um processo prático e homologado pelo Instituto Nacional de Tecnologia da Informação (ITI).",
        }
    ];

    const whatsappMessage = "Olá! Vi a oferta do e-CPF A1 por R$ 99,90 no site e quero fazer a emissão por videoconferência. Como devo prosseguir?";

    return (
        <main className="min-h-screen bg-light-gray flex flex-col pt-0">
            <ExitIntentPopup onApplyDiscount={() => setHasDiscount(true)} />
            <div className="flex-grow">
                <HeroSection
                    copy={heroCopy}
                    crossSell={crossSellData}
                    formCopy={formCopy}
                    product="e-CPF A1"
                    bgImage="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2669&auto=format&fit=crop"
                />
                <FeatureGrid
                    title="Por que o modelo A1 é a escolha ideal para você?"
                    features={featuresList}
                />
                <PurchaseSteps ctaText="APROVEITAR E-CPF PROMOCIONAL AGORA" whatsappMessage={whatsappMessage} />
            </div>

            <FloatingWhatsApp whatsappMessage={whatsappMessage} />
            <PassiveFooter product="e-CPF A1" text="Autoridade de Registro integrante da rede ICP-Brasil. Há mais de 15 anos protegendo transações virtuais de pessoas e empresas em todo o território nacional. Os valores dos certificados estão sujeitos a alteração sem aviso prévio." />
        </main>
    );
}
