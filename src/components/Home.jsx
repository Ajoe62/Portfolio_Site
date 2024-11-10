'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Moon, Sun, Menu, X } from 'lucide-react'

const skills = ['React', 'JavaScript', 'Node.js', 'CSS', 'HTML', 'Git', 'Python', 'SQL']
const skillColors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F06292', '#AED581', '#7986CB']

// BOLD UPDATE: Added navigation items with hash links for smooth scrolling
const navItems = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'My Works', path: '#my-works' },
    { name: 'Contact', path: '#contact' },
]

export default function Home() {
    const [darkMode, setDarkMode] = useState(false)
    const [rotation, setRotation] = useState(0)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    // BOLD UPDATE: Added isDesktop state for responsive design
    const [isDesktop, setIsDesktop] = useState(true)

    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true'
        setDarkMode(isDarkMode)

        const animationInterval = setInterval(() => {
            setRotation(prev => (prev + 1) % 360)
        }, 50)

        // BOLD UPDATE: Added window resize handler to update isDesktop state
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768)
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => {
            clearInterval(animationInterval)
            // BOLD UPDATE: Removed resize event listener on cleanup
            window.removeEventListener('resize', handleResize)
        }
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
            <header className="fixed top-0 left-0 right-0 bg-black p-4 z-10">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <Image src="/Jlogo.png" alt="Logo" width={50} height={50} className="mr-2 sm:mr-4 w-8 h-8 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px]" />
                        <div className="bg-[#4ECDC4] text-black px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded-full items-center">
                            <h1 className="text-sm sm:text-lg md:text-xl font-bold">Joseph Akharume</h1>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 md:space-x-4">
                        <button
                            onClick={toggleDarkMode}
                            className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        {!isDesktop && (
                            <button
                                onClick={toggleMenu}
                                className="text-[#80EBFF] hover:text-[#00D8FF] transition-colors p-2 rounded-full"
                                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        )}
                    </div>
                </div>
                {/* BOLD UPDATE: Added desktop navigation */}
                {isDesktop && (
                    <nav className="mt-4">
                        <ul className="flex justify-center space-x-6">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.path}
                                        className="text-[#80EBFF] hover:text-[#00D8FF] transition-colors"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
                {/* BOLD UPDATE: Updated mobile navigation with hash links */}
                {!isDesktop && isMenuOpen && (
                    <nav className="mt-4">
                        <ul className="space-y-2">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.path}
                                        className="block px-4 py-2 text-[#80EBFF] hover:bg-[#00A3CC] hover:text-white rounded transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
            </header>

            <section className="pt-8 sm:pt-20 md:pt-38 min-h-screen flex flex-col items-center justify-center p-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-7 text-center text-[#FFD181]">
                    Meet your Favourite Fullstack Developer
                </h1>
                <div className="relative w-full max-w-[300px] h-[300px] md:max-w-[500px] md:h-[500px] mx-auto">
                    <div className="absolute inset-0 w-[180px] h-[180px] md:w-[180px] md:h-[180px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-[#4ECDC4] z-20"></div>
                    <Image
                        src="/joe.png"
                        alt="Joseph Akharume"
                        width={200}
                        height={200}
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full object-cover z-10 w-[120px] h-[120px] md:w-[200px] md:h-[200px]"
                    />
                    {skills.map((skill, index) => (
                        <div
                            key={skill}
                            className="absolute text-black text-xs md:text-sm lg:text-base font-semibold"
                            style={{
                                top: '50%',
                                left: '50%',
                                transform: `
                                    rotate(${rotation + index * (360 / skills.length)}deg)
                                    translateY(-138px)
                                    rotate(-${rotation + index * (360 / skills.length)}deg)
                                `,
                                '@media (minWidth: 768px)': {
                                    transform: `
                                        rotate(${rotation + index * (360 / skills.length)}deg)
                                        translateY(-230px)
                                        rotate(-${rotation + index * (360 / skills.length)}deg)
                                    `
                                },
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
                <h2 className={`mt-4 md:mt-8 text-xl md:text-2xl lg:text-3xl font-bold ${darkMode ? 'text-blue-400' : 'text-[#AED581]'}`}>Full Stack Developer</h2>
            </section>
        </div>
    )
}