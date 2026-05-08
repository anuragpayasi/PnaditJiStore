import React from 'react'
import { FaStar } from "react-icons/fa";
import { BsChatLeftQuoteFill } from "react-icons/bs";

const testimonials = [
    {
        id: 1,
        name: "Rahul Sharma",
        role: "Regular Customer",
        review:
            "Best place for pooja samagri and daily essentials. Product quality is always excellent and prices are reasonable.",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        id: 2,
        name: "Priya Verma",
        role: "Happy Customer",
        review:
            "I always buy festival items from Sharma's Store. Everything is available in one place and staff behavior is very helpful.",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        id: 3,
        name: "Amit Tiwari",
        role: "Local Customer",
        review:
            "Pure quality products and trusted service. Their pooja collection is amazing and delivery is also very fast.",
        image: "https://randomuser.me/api/portraits/men/51.jpg",
    },
]

const TestimonialSection = () => {
    return (
        <section id='Feedback' className='w-full bg-gradient-to-b from-gray-300 to-amber-200 py-16 px-4 sm:px-8 lg:px-14'>

            {/* Heading */}
            <div className='mb-12 text-center'>
                <p className='text-sm font-medium uppercase tracking-[4px] text-amber-700'>
                    Testimonials
                </p>

                <h2 className='mt-3 text-3xl sm:text-4xl font-bold text-gray-900'>
                    What Our Customers Say
                </h2>

                <p className='mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-7 text-gray-600'>
                    Trusted by families for quality pooja essentials, festival products and daily household needs.
                </p>
            </div>

            {/* Layout */}
            <div className='mx-auto max-w-7xl flex flex-col gap-10'>

                {/* Reviews (TOP on all devices) */}
                <div className='w-full overflow-hidden'>
                    <div className='flex gap-6 overflow-x-auto pb-2 scrollbar-hide'>

                        {testimonials.map((item) => (
                            <div
                                key={item.id}
                                className='
                                    min-w-[280px] sm:min-w-[320px]
                                    group relative overflow-hidden
                                    rounded-3xl
                                    bg-white
                                    p-6
                                    shadow-lg
                                    transition-all duration-500
                                    hover:-translate-y-2
                                    hover:shadow-2xl
                                '
                            >

                                {/* Quote */}
                                <BsChatLeftQuoteFill className='absolute right-5 top-5 text-5xl text-amber-100' />

                                {/* Stars */}
                                <div className='flex items-center gap-1 text-amber-500'>
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </div>

                                {/* Review */}
                                <p className='mt-5 text-sm leading-7 text-gray-600'>
                                    "{item.review}"
                                </p>

                                {/* User */}
                                <div className='mt-6 flex items-center gap-4'>
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className='h-12 w-12 rounded-full object-cover border-2 border-amber-200'
                                    />

                                    <div>
                                        <h3 className='text-base font-semibold text-gray-900'>
                                            {item.name}
                                        </h3>
                                        <p className='text-sm text-gray-500'>
                                            {item.role}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        ))}

                    </div>
                </div>

                {/* FORM (BOTTOM on all devices) */}
                <div className='w-full rounded-3xl bg-white p-6 sm:p-10 shadow-xl'>

                    <h2 className='text-2xl sm:text-3xl font-bold text-gray-900'>
                        Share Your Feedback
                    </h2>

                    <p className='mt-2 text-sm text-gray-600'>
                        We would love to hear your experience with Sharma’s Store.
                    </p>

                    <form className='mt-6 space-y-5'>

                        <input
                            type="text"
                            placeholder="Your Name"
                            className='w-full rounded-xl border border-transparent bg-gray-200 px-4 py-3 text-sm outline-none focus:border-amber-600 focus:bg-white '
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            className='w-full rounded-xl border border-transparent bg-gray-200 px-4 py-3 text-sm outline-none focus:border-amber-600 focus:bg-white '
                        />

                        <textarea
                            rows="5"
                            placeholder="Write your feedback..."
                            className='w-full rounded-xl border border-transparent bg-gray-200 px-4 py-3 text-sm outline-none resize-none focus:border-amber-600 focus:bg-white '
                        />

                        <button
                            className='w-full rounded-xl bg-gradient-to-r from-amber-600 to-orange-600 py-3 text-white font-semibold shadow-md hover:shadow-xl active:scale-95 transition'
                        >
                            Submit Feedback
                        </button>

                    </form>

                </div>

            </div>
        </section>
    )
}

export default TestimonialSection