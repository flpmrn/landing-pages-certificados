import React from "react";
import { Zap, ShieldCheck, Video, LayoutDashboard, MonitorSmartphone, Lock } from "lucide-react";

interface FeatureGridProps {
    title: string;
    features: {
        title: string;
        description: string;
    }[];
}

export default function FeatureGrid({ title, features }: FeatureGridProps) {
    // Array of icons to cycle through for the features
    const icons = [
        <Zap className="w-10 h-10 text-navy-blue mb-4" strokeWidth={1.5} />,
        <Video className="w-10 h-10 text-navy-blue mb-4" strokeWidth={1.5} />,
        <ShieldCheck className="w-10 h-10 text-navy-blue mb-4" strokeWidth={1.5} />,
        <LayoutDashboard className="w-10 h-10 text-navy-blue mb-4" strokeWidth={1.5} />,
        <MonitorSmartphone className="w-10 h-10 text-navy-blue mb-4" strokeWidth={1.5} />,
        <Lock className="w-10 h-10 text-navy-blue mb-4" strokeWidth={1.5} />
    ];

    return (
        <section className="bg-white py-16 md:py-24 border-t border-gray-100">
            <div className="w-full max-w-7xl mx-auto px-4">

                <div className="text-center mb-16">
                    <h2 className="font-montserrat text-3xl font-bold text-navy-blue max-w-4xl mx-auto leading-relaxed">
                        {title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl border border-transparent hover:border-gray-200 hover:shadow-xl hover:-translate-y-1 bg-white transition-all">
                            <div className="bg-blue-50/50 p-4 rounded-2xl mb-5">
                                {icons[index % icons.length]}
                            </div>
                            <h3 className="font-montserrat font-bold text-lg text-navy-blue mb-3">
                                {feature.title}
                            </h3>
                            <p className="font-inter text-gray-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
