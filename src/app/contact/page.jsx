'use client'

import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission here
        console.log(formData)
    }

    return (
        <section className="py-16 pt-24">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
                <div className="bg-[#7BC5C1] text-black p-6 rounded-lg">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A3CC]"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A3CC]"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A3CC]"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-[#FFD181] text-white px-6 py-2 rounded hover:bg-[#E1C7A5] transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}