export default function MyWorks() {
    return (
        <section className="py-16 bg-gray-900 pt-24">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">My Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-[#00D8FF] text-black p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-2">Project {item}</h3>
                            <p className="mb-4">A brief description of the project and the technologies used.</p>
                            <button className="bg-[#00A3CC] text-white px-4 py-2 rounded hover:bg-[#80EBFF] transition-colors">
                                View Project
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}