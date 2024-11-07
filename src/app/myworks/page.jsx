import Image from 'next/image'

export default function MyWorks() {
    const projects = [
        {
            id: 1,
            title: "E-commerce Platform",
            description: "A full-stack e-commerce solution built with Reactjs, Node.js, and PostgreSql. Features include user authentication, product management, and secure payment integration.",
            image: "/techstore.png",
            url: "https://github.com/Ajoe62/tech-store",
            technologies: ["Reactjs", "Express.js", "PostgreSql", "TailwindCSS"]
        },
        {
            id: 2,
            title: "Remote Job Platform",
            description: "A platform that connects remote job seekers with employers. Built with React, Firebase, and Material-UI. Features include user profiles, job listings, and real-time chat.",
            image: "/remotelydev.png",
            url: "https://remotelydev.vercel.app/",
            technologies: ["React", "Firebase", "Material-UI"]
        },
        {
            id: 3,
            title: "StreamBeat App",
            description: "A group calling app that allows users to create virtual rooms. Built with Agora SDK, React,TailwindCSS and Django. Features include video chat, screen sharing, and real-time messaging.",
            image: "/streambeat.png",
            url: "https://github.com/Ajoe62/Streambeat",
            technologies: ["Reactjs", "AgoraSDK", "Django", "TailwindCSS"]
        }
    ]

    return (
        <section className="py-16 bg-gray-900 pt-24">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-white">My Works</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        // Changed: Updated background color to #4ECDC4 and text color to a darker shade for better contrast
                        <div key={project.id} className="bg-[#F2F2F2] text-gray-800 p-6 rounded-lg flex flex-col">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={400}
                                height={200}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="mb-4 flex-grow">{project.description}</p>
                            <div className="mb-4">
                                <h4 className="font-semibold mb-2">Technologies used:</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        // Changed: Updated technology tag colors to complement the new background
                                        <span key={index} className="bg-[#4C7972] text-white px-2 py-1 rounded text-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            {/* Changed: Updated button colors to complement the new background */}
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#FFD181] text-white px-4 py-2 rounded hover:bg-[#E1C7A5] transition-colors text-center"
                            >
                                View Project
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}