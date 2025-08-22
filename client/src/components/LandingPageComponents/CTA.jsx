import React from 'react';

const CTA = () => {
    return (
        <section id="cta" className="relative bg-white">
            {/* Subtle background pattern */}
            <div 
                className="absolute inset-0 bg-repeat opacity-5"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            ></div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 text-center">
                {/* Section Header */}
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                    Ready to Take the First Step?
                </h2>

                {/* Subtext */}
                <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                    Get instant, confidential insights into your health. Our AI Symptom Checker is free to use and requires no sign-up.
                </p>

                {/* Call to Action Button */}
                <div className="mt-8">
                    <a
                        href="/symptom-checker"
                        className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 shadow-xl hover:shadow-2xl"
                    >
                        Check My Symptoms Now
                    </a>
                </div>

                <p className="mt-6 text-sm text-slate-500">
                    Your health journey, powered by intelligence.
                </p>
            </div>
        </section>
    );
};

export default CTA;
