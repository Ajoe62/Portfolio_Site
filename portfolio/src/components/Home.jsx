'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Moon, Sun, Menu, X } from 'lucide-react'

const skills = ['React', 'JavaScript', 'Node.js', 'CSS', 'HTML', 'Git', 'Python', 'SQL']
const skillColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F06292', '#AED581', '#7986CB']

export default function Home() {
    const [darkMode, setDarkMode] = useState(false)
    const [rotation, setRotation] = useState(0)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true'
        setDarkMode(isDarkMode)

        const animationInterval = setInterval(() => {
            setRotation(prev => (prev + 1) % 360)
        }, 50)

        return () => clearInterval(animationInterval)
    }, [])

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode.toString())
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            {/* Header section */}
            <header className="fixed top-0 left-0 right-0 bg-black p-4 z-10">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <div className="bg-[#00D8FF] text-black px-6 py-2 rounded-full flex-grow mr-4">
                        <h1 className="text-3xl font-extrabold">Joseph Akharume</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                        >
                            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
                        </button>
                        <button
                            onClick={toggleMenu}
                            className="text-[#80EBFF] hover:text-[#00D8FF] transition-colors"
                            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <nav className="mt-4">
                        <ul className="space-y-2">
                            {['Home', 'About', 'My Works', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase().replace(' ', '-')}`}
                                        className="block px-4 py-2 text-[#80EBFF] hover:bg-[#00D8FF] hover:text-black rounded transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </header>

            {/* Home Section */}
            <section id="home" className="pt-24 min-h-screen flex flex-col items-center justify-center p-4">
                <h1 className="text-4xl font-bold mb-8 text-center text-[#AED581]">
                    Meet your Favourite Fullstack Developer
                </h1>

                <div className="relative w-[500px] h-[500px]">
                    <div className="absolute inset-0 w-[300px] h-[300px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-[#00D8FF] z-20"></div>
                    <Image
                        src="/joe.png"
                        alt="Joseph Akharume"
                        width={200}
                        height={200}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full object-cover z-10"
                    />
                    {skills.map((skill, index) => (
                        <div
                            key={skill}
                            className="absolute text-black text-base font-semibold"
                            style={{
                                top: '50%',
                                left: '50%',
                                transform: `
                                    rotate(${rotation + index * (360 / skills.length)}deg)
                                    translateY(-230px)
                                    rotate(-${rotation + index * (360 / skills.length)}deg)
                                `,
                                background: skillColors[index % skillColors.length],
                                padding: '4px 8px',
                                borderRadius: '4px',
                                transition: 'transform 0.1s linear',
                            }}
                        >
                            {skill}
                        </div>
                    ))}
                </div>
                <h2 className={`mt-8 text-3xl font-bold ${darkMode ? 'text-blue-400' : 'text-[#00D8FF]'}`}>Full Stack Developer</h2>
            </section>

            {/* About Section */}
            <section id="about" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
                    <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg shadow-lg bg-[#7986CB]`} style={{ backgroundColor: '#7986CB' }}>
                        <p className="mb-4">
                            I'm a passionate full-stack developer with a keen interest in building scalable web applications. With 5
                            years of experience in the industry, I've worked on a variety of projects ranging from small business
                            websites to large-scale enterprise applications.
                        </p>
                        <p>
                            My expertise includes front-end technologies like React and Vue.js, as well as back-end technologies like
                            Node.js and Python. I'm always eager to learn new technologies and improve my skills.
                        </p>
                    </div>
                </div>
            </section>

            {/* Works Section */}
            <section id="my-works" className="py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">My Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className={`${darkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
                                <h3 className="text-xl font-bold mb-2">Project {item}</h3>
                                <p className="mb-4">A brief description of the project and the technologies used.</p>
                                <button className={`${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-[#00D8FF] hover:bg-[#00C4E8]'} text-white px-4 py-2 rounded transition-colors`}>
                                    View Project
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
                    <div className={`${darkMode ? 'bg-gray-700' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-1">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className={`w-full px-3 py-2 border ${darkMode ? 'border-gray-600 bg-gray-800' : 'border-gray-300 bg-white'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className={`w-full px-3 py-2 border ${darkMode ? 'border-gray-600 bg-gray-800' : 'border-gray-300 bg-white'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-1">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className={`w-full px-3 py-2 border ${darkMode ? 'border-gray-600 bg-gray-800' : 'border-gray-300 bg-white'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className={`${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-[#00D8FF] hover:bg-[#00C4E8]'} text-white px-6 py-2 rounded transition-colors`}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}