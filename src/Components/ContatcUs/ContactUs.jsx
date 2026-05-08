import React from 'react'
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
    return (
        <section id='Contact' className='w-full bg-gradient-to-b from-amber-200 to-gray-200 py-16 px-4 sm:px-8 lg:px-14'>

            <div
                className='
                    mx-auto max-w-7xl
                    overflow-hidden rounded-[32px]
                    bg-white shadow-2xl
                '
            >

                <div className='grid lg:grid-cols-2'>

                    {/* Left Side */}
                    <div
                        className='
                            relative overflow-hidden
                            bg-gradient-to-br
                            from-amber-950 to-amber-500
                            px-6 py-12
                            sm:px-10
                            text-white
                        '
                    >

                        {/* Blur */}
                        <div className='absolute top-0 right-0 h-60 w-60 rounded-full bg-white/10 blur-3xl'></div>

                        <div className='relative z-10'>

                            <p className='text-sm uppercase tracking-[4px] text-amber-200'>
                                Contact Us
                            </p>

                            <h2 className='mt-4 text-3xl sm:text-4xl font-bold leading-tight'>
                                Let’s Connect With Sharma’s Store
                            </h2>

                            <p className='mt-5 max-w-lg text-sm sm:text-base leading-7 text-amber-100'>
                                Have questions about pooja samagri, festival
                                products or daily kirana items? We’re always
                                ready to help you with the right products and
                                guidance.
                            </p>

                            {/* Contact Details */}
                            <div className='mt-10 space-y-5'>

                                {/* Phone */}
                                <div className='flex items-start gap-4'>

                                    <div className='rounded-xl bg-white/10 p-3'>
                                        <FiPhoneCall className='text-xl' />
                                    </div>

                                    <div>
                                        <p className='text-sm text-amber-200'>
                                            Phone Number
                                        </p>

                                        <h3 className='mt-1 text-base sm:text-lg font-semibold'>
                                            +91 98765 43210
                                        </h3>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className='flex items-start gap-4'>

                                    <div className='rounded-xl bg-white/10 p-3'>
                                        <FiMail className='text-xl' />
                                    </div>

                                    <div>
                                        <p className='text-sm text-amber-200'>
                                            Email Address
                                        </p>

                                        <h3 className='mt-1 text-base sm:text-lg font-semibold'>
                                            sharmastore@gmail.com
                                        </h3>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className='flex items-start gap-4'>

                                    <div className='rounded-xl bg-white/10 p-3'>
                                        <FiMapPin className='text-xl' />
                                    </div>

                                    <div>
                                        <p className='text-sm text-amber-200'>
                                            Store Address
                                        </p>

                                        <h3 className='mt-1 text-base sm:text-lg font-semibold leading-7'>
                                            Sharma’s Store, Main Market,
                                            Madhya Pradesh, India
                                        </h3>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className='bg-white px-6 py-12 sm:px-10'>

                        <p className='text-sm uppercase tracking-[4px] text-amber-700'>
                            Send Message
                        </p>

                        <h2 className='mt-3 text-3xl font-bold text-gray-900'>
                            Get In Touch
                        </h2>

                        {/* Form */}
                        <form className='mt-8 space-y-5'>

                            {/* Name */}
                            <div>
                                <label className='mb-2 block text-sm font-medium text-gray-700'>
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder='Enter your name'
                                    className='
                                        w-full rounded-2xl
                                        border border-gray-200
                                        bg-gray-50
                                        px-5 py-3
                                        text-sm
                                        outline-none
                                        transition-all duration-300
                                        focus:border-amber-600
                                        focus:bg-white
                                    '
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className='mb-2 block text-sm font-medium text-gray-700'>
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder='Enter your email'
                                    className='
                                        w-full rounded-2xl
                                        border border-gray-200
                                        bg-gray-50
                                        px-5 py-3
                                        text-sm
                                        outline-none
                                        transition-all duration-300
                                        focus:border-amber-600
                                        focus:bg-white
                                    '
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className='mb-2 block text-sm font-medium text-gray-700'>
                                    Message
                                </label>

                                <textarea
                                    rows="5"
                                    placeholder='Write your message...'
                                    className='
                                        w-full rounded-2xl
                                        border border-gray-200
                                        bg-gray-50
                                        px-5 py-3
                                        text-sm
                                        outline-none
                                        transition-all duration-300
                                        focus:border-amber-600
                                        focus:bg-white
                                        resize-none
                                    '
                                ></textarea>
                            </div>

                            {/* Buttons */}
                            <div className='flex flex-col sm:flex-row gap-4 pt-2'>

                                <button
                                    className='
                                        flex-1 rounded-2xl
                                        bg-gradient-to-r
                                        from-amber-600 to-orange-600
                                        px-5 py-3
                                        text-sm font-semibold text-white
                                        shadow-lg
                                        transition-all duration-300
                                        hover:-translate-y-1
                                        hover:shadow-xl
                                    '
                                >
                                    Send Message
                                </button>

                                <button
                                    className='
                                        flex items-center justify-center gap-2
                                        rounded-2xl
                                        border border-green-500
                                        bg-green-50
                                        px-5 py-3
                                        text-sm font-semibold text-green-700
                                        transition-all duration-300
                                        hover:bg-green-100
                                    '
                                >
                                    <FaWhatsapp className='text-lg' />
                                    WhatsApp
                                </button>

                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ContactUs