"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function LeadForm({ formCopy }: { product: string, formCopy: any }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        whatsapp: "",
    });

    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Formata a mensagem para o WhatsApp
        const message = `Olá! Acabei de preencher o formulário no site e-CNPJ Digital.\n\n*Nome:* ${formData.name}\n*Email:* ${formData.email}\n*WhatsApp:* ${formData.whatsapp}\n\nTenho interesse na emissão da minha empresa por videoconferência.`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=5511999999999&text=${encodeURIComponent(message)}`;

        // Abre o WhatsApp e redireciona para a página de obrigado
        window.open(whatsappUrl, "_blank");
        router.push("/obrigado");
    };

    if (!formCopy) return null;

    return (
        <div className="bg-white p-6 md:p-10 rounded-2xl shadow-xl border border-gray-100 flex flex-col gap-6">
            <div className="text-center">
                <h3 className="font-montserrat text-xl sm:text-2xl font-bold text-navy-blue mb-3">
                    {formCopy.title}
                </h3>
                <p className="font-inter text-sm sm:text-base text-gray-600">
                    {formCopy.subtitle}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-2">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-inter text-sm font-semibold text-navy-blue">
                        {formCopy.inputs.name}
                    </label>
                    <input
                        id="name"
                        type="text"
                        required
                        className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 font-inter text-navy-blue focus:outline-none focus:ring-2 focus:ring-bright-orange focus:bg-white transition-all w-full"
                        placeholder="João da Silva"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-inter text-sm font-semibold text-navy-blue">
                        {formCopy.inputs.email}
                    </label>
                    <input
                        id="email"
                        type="email"
                        required
                        className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 font-inter text-navy-blue focus:outline-none focus:ring-2 focus:ring-bright-orange focus:bg-white transition-all w-full"
                        placeholder="joao@empresa.com.br"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>

                <div className="flex flex-col gap-1.5">
                    <label htmlFor="whatsapp" className="font-inter text-sm font-semibold text-navy-blue">
                        {formCopy.inputs.whatsapp}
                    </label>
                    <input
                        id="whatsapp"
                        type="tel"
                        required
                        className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 font-inter text-navy-blue focus:outline-none focus:ring-2 focus:ring-bright-orange focus:bg-white transition-all w-full"
                        placeholder="(11) 99999-9999"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    />
                </div>

                <button
                    type="submit"
                    className="mt-4 w-full bg-bright-orange hover:bg-orange-600 text-white font-montserrat font-black text-sm sm:text-lg py-5 px-2 rounded-xl shadow-[0_4px_14px_0_rgba(255,87,34,0.39)] transition-all hover:shadow-[0_6px_20px_rgba(255,87,34,0.23)] hover:-translate-y-1 block text-center"
                >
                    {formCopy.cta}
                </button>
            </form>
        </div>
    );
}
