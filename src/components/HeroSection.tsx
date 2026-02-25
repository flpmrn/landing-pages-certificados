import React from "react";
import LeadForm from "./LeadForm";

interface HeroSectionProps {
    product: string;
    copy: {
        headline: string;
        subheadline: string;
        promoLabel: string;
        oldPriceLabel?: string;
        oldPrice: string;
        newPriceLabel?: string;
        disclaimer?: string;
        logoSrc?: string;
    };
    formCopy: any;
}

export default function HeroSection({ product, copy, formCopy }: HeroSectionProps) {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-12 md:py-20 lg:py-24">
            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">

                <div className="flex flex-col gap-6 order-1 text-center lg:text-left pt-4 lg:pt-0">
                    <div className="flex justify-center lg:justify-start mb-4">
                        <img
                            src={copy.logoSrc || "https://facilcertificadora.com.br/images/logo-novo.png"}
                            alt="Fácil Certificadora"
                            className="h-12 md:h-16 object-contain"
                        />
                    </div>

                    <h1 className="font-montserrat text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-navy-blue leading-tight tracking-tight">
                        {copy.headline}
                    </h1>
                    <p className="font-inter text-lg lg:text-xl text-gray-600 leading-relaxed">
                        {copy.subheadline}
                    </p>

                    <div className="mt-4 md:mt-8 bg-white/60 border border-gray-200 p-6 rounded-2xl shadow-sm inline-block self-center lg:self-start">
                        <span className="font-inter text-red-600 tracking-wider text-xs md:text-sm font-bold block mb-2">
                            {copy.promoLabel}
                        </span>

                        <div className="flex items-center gap-2 justify-center lg:justify-start mb-2 group">
                            {copy.oldPriceLabel && (
                                <span className="font-inter text-gray-500 font-medium text-sm">
                                    {copy.oldPriceLabel}
                                </span>
                            )}
                            <span className="font-inter text-gray-500 line-through decoration-red-500/50 decoration-2 text-lg">
                                R$ {copy.oldPrice}
                            </span>
                        </div>

                        <div className="flex items-baseline justify-center lg:justify-start gap-2">
                            {copy.newPriceLabel && (
                                <span className="font-inter text-navy-blue font-bold text-sm block">
                                    {copy.newPriceLabel}
                                </span>
                            )}
                            <div className="flex items-baseline gap-1 text-bright-orange">
                                <span className="font-montserrat text-3xl font-bold">R$</span>
                                <span className="font-montserrat text-6xl md:text-7xl font-black tracking-tighter">99</span>
                                <span className="font-montserrat text-3xl md:text-4xl font-bold">,90</span>
                            </div>
                        </div>

                        <span className="font-inter text-sm text-gray-500 mt-3 block font-medium">
                            {copy.disclaimer || "Pagamento via PIX ou Cartão"}
                        </span>
                    </div>
                </div>

                <div className="w-full max-w-md mx-auto lg:max-w-xl order-2">
                    <LeadForm product={product} formCopy={formCopy} />
                </div>
            </div>
        </section>
    );
}
