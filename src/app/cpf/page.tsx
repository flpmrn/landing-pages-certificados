import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import PassiveFooter from "@/components/PassiveFooter";
import { Metadata } from "next";
import PurchaseSteps from "@/components/PurchaseSteps";

export const metadata: Metadata = {
    title: "e-CPF A1 | Fácil Certificadora Digital",
    description: "O seu e-CPF A1 sem sair de casa: rápido, seguro e por videoconferência.",
};

export default function CPFPage() {
    const heroCopy = {
        headline: "O seu e-CPF A1 sem sair de casa: rápido, seguro e por videoconferência.",
        subheadline: "Emita ou renove seu Certificado Digital em até 10 minutos. O arquivo fica armazenado no seu computador, pronto para assinar contratos, regularizar impostos e acessar os sistemas da Receita Federal. Aproveite o lote promocional.",
        promoLabel: "⚠️ PROMOÇÃO RELÂMPAGO",
        oldPriceLabel: "Valor padrão:",
        oldPrice: "159,00",
        newPriceLabel: "Com desconto: apenas",
        logoSrc: "https://facilcertificadora.com.br/images/logo-novo.png"
    };

    const formCopy = {
        title: "Garanta seu desconto exclusivo!",
        subtitle: "Preencha os campos abaixo com segurança para falar com um especialista pelo WhatsApp.",
        inputs: {
            name: "Nome completo",
            email: "E-mail",
            whatsapp: "WhatsApp (com DDD)"
        },
        cta: "EMITIR MEU E-CPF POR R$ 99,90 ➔",
        whatsappMessage: "Olá! Vi a oferta do e-CPF A1 por R$ 99,90 no site e quero fazer a emissão por videoconferência. Como devo prosseguir?"
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
        <main className="min-h-screen bg-light-gray flex flex-col pt-8">
            <div className="flex-grow">
                <HeroSection copy={heroCopy} formCopy={formCopy} product="e-CPF A1" />
                <FeatureGrid
                    title="Por que o modelo A1 é a escolha ideal para você?"
                    features={featuresList}
                />
                <PurchaseSteps ctaText="APROVEITAR E-CPF PROMOCIONAL AGORA" whatsappMessage={whatsappMessage} />
            </div>

            <FloatingWhatsApp whatsappMessage={whatsappMessage} />
            <PassiveFooter product="e-CPF A1" text="Autoridade de Registro integrante da rede ICP-Brasil. Há mais de 15 anos protegendo transações virtuais de pessoas e empresas em todo o território nacional. O valor de R$ 99,90 está sujeito a alteração sem aviso prévio." />
        </main>
    );
}
