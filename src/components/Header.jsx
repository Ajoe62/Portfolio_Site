'use client'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const pathname = usePathname()

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'My Works', path: '/my-works' },
        { name: 'Contact', path: '/contact' },
    ]

    return (
        <header className="fixed top-0 left-0 right-0 bg-black p-4 z-10">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <Image src="/Jlogo.png" alt="Logo" width={50} height={50} className="mr-4" />
                    <div className="bg-[#4ECDC4] text-black px-6 py-2 rounded-full item-center">
                        <h1 className="text-xl font-bold">Joseph Akharume</h1>
                    </div>
                </div>
                {/* Menu button: Moved outside of the nested divs for correct positioning */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-[#80EBFF] hover:text-[#00D8FF] transition-colors"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {isMenuOpen && (
                <nav className="fixed top-16 right-4 bg-[#00A3CC] p-4 rounded-lg shadow-lg w-48">
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.path}
                                    className={`block px-3 py-1 rounded transition-colors ${pathname === item.path
                                            ? 'bg-[#80EBFF] text-black'
                                            : 'hover:bg-[#80EBFF] hover:text-black text-white'
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