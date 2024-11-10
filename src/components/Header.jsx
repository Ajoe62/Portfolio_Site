'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    const [isDesktop, setIsDesktop] = useState(false)
    const navItems = [
        { name: 'Home', path: '#home' },
        { name: 'About', path: '#about' },
        { name: 'My Works', path: '#my-works' },
        { name: 'Contact', path: '#contact' },
    ]

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768) // 768px is typically md breakpoint
        }

        handleResize() // Call once to set initial state
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <header className="fixed top-0 left-0 right-0 bg-black p-4 z-10">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Image src="/Jlogo.png" alt="Logo" width={50} height={50} className="mr-2 sm:mr-4 w-8 h-8 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px]" />
                    <div className="bg-[#4ECDC4] text-black px-2 py-1 sm:px-4 sm:py-2 md:px-6 md:py-2 rounded-full items-center">
                        <h1 className="text-xl font-bold">Joseph Akharume</h1>
                    </div>
                </div>
                {/* BOLD COMMENT: Show desktop navigation for larger screens */}
                {isDesktop && (
                    <nav className="hidden md:block">
                        <ul className="flex space-x-4">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.path}
                                        className={`px-3 py-2 rounded transition-colors ${pathname === item.path
                                                ? 'bg-[#80EBFF] text-black'
                                                : 'text-[#80EBFF] hover:bg-[#00A3CC] hover:text-white'
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
                {/* BOLD COMMENT: Show menu button only on mobile */}
                {!isDesktop && (
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-[#80EBFF] hover:text-[#00D8FF] transition-colors p-2 rounded-full"
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                )}
            </div>
            {/* BOLD COMMENT: Mobile navigation menu */}
            {!isDesktop && isMenuOpen && (
                <nav className="mt-4">
                    <ul className="space-y-2">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.path}
                                    className={`block px-4 py-2 rounded transition-colors ${pathname === item.path
                                            ? 'bg-[#80EBFF] text-black'
                                            : 'text-[#80EBFF] hover:bg-[#00A3CC] hover:text-white'
                                        }`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )} 
        </header>
    )
}