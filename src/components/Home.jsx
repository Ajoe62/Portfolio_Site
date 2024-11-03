'use client'
import About from '../app/about/page'
import Works from '../app/myworks/page'
import Contact from '../app/contact/page'


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
                    {/* BOLD COMMENT: Added logo and name container */}
                    <div className="flex items-center">
                        <Image src="/Jlogo.png" alt="Logo" width={50} height={50} className="mr-4" />
                        <div className="bg-[#4ECDC4] text-black px-6 py-2 rounded-full">
                            <h1 className="text-xl font-bold">Joseph Akharume</h1>
                        </div>
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
                <h2 className={`mt-8 text-3xl font-bold ${darkMode ? 'text-blue-400' : 'text-[#AED581]'}`}>Full Stack Developer</h2>
            </section>

            {/* <About />

            <Works />
            <Contact /> */}

        </div>
    )
}