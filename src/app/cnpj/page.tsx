import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PassiveFooter from "@/components/PassiveFooter";
import { Metadata } from "next";
import PurchaseStepsCNPJ from "@/components/PurchaseStepsCNPJ";

export const metadata: Metadata = {
    title: "e-CNPJ A1 | Fácil Certificadora Digital",
    description: "Emissão e renovação urgente de e-CNPJ A1. Não interrompa as vendas da sua empresa.",
};

export default function CNPJPage() {
    const heroCopy = {
        headline: "Emissão e renovação urgente de e-CNPJ A1. Não interrompa as vendas da sua empresa.",
        subheadline: "Retome o controle fiscal do seu negócio. O e-CNPJ A1 é um arquivo instalado no seu computador que permite a emissão imediata de notas fiscais e o envio de dados ao eSocial. Valide por videoconferência e garanta um desconto exclusivo.",
        promoLabel: "🔥 A MAIOR REDUÇÃO DE CUSTO FIXO DO ANO",
        oldPriceLabel: "Valor presencial:",
        oldPrice: "235,00",
        newPriceLabel: "Por apenas:",
        disclaimer: "(Válido para CNPJ)",
        logoSrc: "https://facilcertificadora.com.br/images/logo-novo.png"
    };

    const formCopy = {
        title: "Resolvemos o seu problema de faturamento hoje.",
        subtitle: "Cadastre os dados do sócio-administrador para atendimento prioritário no WhatsApp.",
        inputs: {
            name: "Nome do sócio-administrador",
            email: "E-mail da empresa ou contabilidade",
            whatsapp: "WhatsApp (com DDD)"
        },
        cta: "GARANTIR MEU E-CNPJ A1 COM DESCONTO ➔",
        whatsappMessage: "Olá! Gostaria de aproveitar a oferta do e-CNPJ A1 por R$ 99,90 para emissão/renovação. Preciso liberar meu faturamento rapidamente via videoconferência. Como começamos?"
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
        <main className="min-h-screen bg-light-gray flex flex-col pt-8">
            <div className="flex-grow">
                <HeroSection copy={heroCopy} formCopy={formCopy} product="e-CNPJ A1" />
                <FeatureGrid
                    title="A superioridade estratégica do e-CNPJ A1 sobre o cartão inteligente."
                    features={featuresList}
                />
                <PurchaseStepsCNPJ ctaText="EMITIR OU RENOVAR E-CNPJ COM ECONOMIA" whatsappMessage={whatsappMessage} />
            </div>

            <FloatingWhatsApp whatsappMessage={whatsappMessage} />
            <PassiveFooter product="e-CNPJ A1" text="Soluções e identidades integradas ao ITI e à Receita Federal do Brasil. Há 15 anos protegendo o ecossistema financeiro e desburocratizando transações sigilosas no país. O valor de R$ 99,90 é promocional e pode ser alterado sem aviso prévio." />
        </main>
    );
}
