import React from "react";

interface PassiveFooterProps {
    product: string;
    text: string;
}

export default function PassiveFooter({ text, product }: PassiveFooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy-blue text-gray-300 py-16">
            <div className="w-full max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-10">

                <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
                    <img
                        src="https://facilcertificadora.com.br/images/logo-novo.png"
                        alt="Fácil Certificadora"
                        className="h-12 mb-6 brightness-0 invert opacity-90 object-contain"
                    />
                    <strong className="font-montserrat text-xl text-white mb-3 tracking-wide">Fácil Certificadora Digital</strong>
                    <p className="font-inter text-sm leading-relaxed text-gray-400">
                        {text}
                    </p>
                </div>

                <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left font-inter text-sm text-gray-400 space-y-3 mt-2 md:mt-0">
                    <strong className="text-white font-semibold">Contato e Endereço</strong>
                    <p>CNPJ: 32.202.436/0001-50</p>
                    <p>Rua Jandaia, 156 - Bela Vista<br />São Paulo/SP, CEP 01.316-100</p>
                    <p>E-mail: ribeiraopreto@facilcertificadora.com.br</p>
                    <p>WhatsApp: +55 16 98844-3346</p>
                </div>

                <div className="md:col-span-3 flex flex-col items-center md:items-end text-sm font-inter text-gray-500 gap-1 text-center md:text-right mt-4 md:mt-auto">
                    <p>Produto: {product}</p>
                    <p>&copy; {currentYear} Fácil Certificadora.</p>
                    <p>Todos os direitos reservados.</p>
                </div>

                <div className="md:col-span-12 mt-10 pt-6 border-t border-white/10 text-xs text-gray-400 leading-relaxed text-center font-inter">
                    <strong>Aviso de Privacidade e LGPD:</strong> Ao preencher os formulários desta página, você concorda expressamente com a coleta, uso e retenção dos seus dados para a finalidade de contato comercial e emissão de certificado digital, bem como permite nosso retorno através dos meios fornecidos (WhatsApp, E-mail ou Telefone), conforme as diretrizes da Lei Geral de Proteção de Dados (Lei nº 13.709/2018).
                </div>

            </div>
        </footer>
    );
}
