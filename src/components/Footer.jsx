export default function Footer() {
    return (
        <footer className="bg-black text-white py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold text-[#00D8FF]">Joseph Akharume</h2>
                        <p className="mt-2">Full Stack Developer</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-[#80EBFF] hover:text-[#00D8FF] transition-colors">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-[#80EBFF] hover:text-[#00D8FF] transition-colors">
                            LinkedIn
                        </a>
                        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-[#80EBFF] hover:text-[#00D8FF] transition-colors">
                            Twitter
                        </a>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p>&copy; {new Date().getFullYear()} Joseph Akharume. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}