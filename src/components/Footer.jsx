export default function Footer() {
    return (
        <footer className="bg-black text-white py-8">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold text-[#4ECDC4]">Joseph Akharume</h2>
                        <p className="mt-2">Full Stack Developer</p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://github.com/Ajoe62" target="_blank" rel="noopener noreferrer" className="text-[#4ECDC4] hover:text-[#98D8C8] transition-colors">
                            GitHub
                        </a>
                        <a href="https://linkedin.com/in/akharumejoseph" target="_blank" rel="noopener noreferrer" className="text-[#4ECDC4] hover:text-[#98D8C8] transition-colors">
                            LinkedIn
                        </a>
                        <a href="https://twitter.com/web-with-joe" target="_blank" rel="noopener noreferrer" className="text-[#4ECDC4] hover:text-[#98D8C8] transition-colors">
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