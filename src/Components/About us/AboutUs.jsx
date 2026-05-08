import React from "react";

const AboutUs = () => {
    return (
        <section id="About" className="w-full bg-gradient-to-b from-amber-200 to-gray-300 py-14 px-4 sm:px-8 lg:px-14">

            {/* Main Container */}
            <div className="mx-auto max-w-7xl">

                {/* Heading */}
                <div className="mb-12 text-center">

                    <p className="mb-2 text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-amber-700">
                        Welcome To Sharma's Store
                    </p>

                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                        Our Story
                    </h2>

                    <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-amber-600"></div>

                    <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-gray-700">
                        A trusted neighbourhood store serving families with quality pooja
                        essentials and daily kirana needs for generations.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid gap-6 md:grid-cols-2 items-stretch">

                    {/* Card */}
                    <div className="flex flex-col rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                        <h3 className="mb-3 text-xl font-semibold text-amber-800">
                            Origin
                        </h3>

                        <p className="text-sm leading-7 text-gray-700">
                            Sharma's Store started as a small local shop with a simple goal —
                            to provide pure pooja essentials and quality daily-use products to
                            every household. Over time, it became a trusted part of the
                            community.
                        </p>
                    </div>

                    {/* Card */}
                    <div className="flex flex-col rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                        <h3 className="mb-3 text-xl font-semibold text-amber-800">
                            What We Do
                        </h3>

                        <p className="text-sm leading-7 text-gray-700">
                            From pooja samagri, agarbatti, diyas and ghee to everyday kirana
                            items, we carefully stock products that families need regularly
                            for both festivals and daily life.
                        </p>
                    </div>

                    {/* Card */}
                    <div className="flex flex-col rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                        <h3 className="mb-3 text-xl font-semibold text-amber-800">
                            Our Values
                        </h3>

                        <p className="text-sm leading-7 text-gray-700">
                            We believe trust is built through consistency. Every product is
                            selected carefully, pricing remains fair, and customers always
                            receive genuine guidance for their pooja and household needs.
                        </p>
                    </div>

                    {/* Card */}
                    <div className="flex flex-col rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

                        <h3 className="mb-3 text-xl font-semibold text-amber-800">
                            Community
                        </h3>

                        <p className="text-sm leading-7 text-gray-700">
                            Over the years, Sharma's Store has become more than just a shop.
                            It is a familiar and dependable place where families return with
                            confidence for quality products and trusted service.
                        </p>
                    </div>
                </div>

                {/* Bottom Quote */}
                <div className="mt-12 rounded-2xl bg-gradient-to-r from-amber-300 to-amber-900 px-4 py-6 text-center shadow-lg">

                    <p className="mx-auto max-w-4xl text-base sm:text-lg md:text-lg font-medium leading-relaxed text-amber-50">
                        “Serving every home with trust, purity, and care — from daily
                        essentials to every special celebration.”
                    </p>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;