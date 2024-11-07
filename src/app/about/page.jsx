export default function About() {
    return (
        <section className="py-16 pt-24">
            {/* Changed: Increased max-width to accommodate wider card */}
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
                {/* Changed: Updated background color to #4ECDC4, adjusted text color to gray-800 for better contrast, increased max-width to 3xl */}
                <div className="bg-[#7BC5C1] text-gray-800 p-6 rounded-lg max-w-5xl mx-auto">
                    <p className="mb-4">
                        I'm a passionate full-stack developer with 4 years of experience in building scalable web applications.
                        My journey in the tech industry has been marked by a diverse range of projects, from small business
                        websites to large-scale enterprise applications.
                    </p>
                    <p className="mb-4">
                        As a full-stack developer, I bring a comprehensive skill set to the table. My expertise includes:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Front-end: React.js, Next.js, TypeScript, TailwindCSS, CSS</li>
                        <li>Back-end: Node.js, Python</li>
                        <li>Databases: SQL, MongoDB</li>
                        <li>Version Control: Git</li>
                        <li>API Development and Integration</li>
                        <li>Responsive Web Design</li>
                        <li>Performance Optimization</li>
                    </ul>
                    <p className="mb-4">
                        I'm always eager to learn new technologies and improve my skills. Currently, I'm enthusiastic about
                        exploring cutting-edge fields such as Artificial Intelligence, Machine Learning, and Blockchain technology.
                    </p>
                    <p className="mb-4">
                        Beyond my professional work, I'm committed to giving back to the tech community. I've volunteered my
                        skills and time with organizations like:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>YPN Connect</li>
                        <li>RemotelyDev</li>
                        <li>ALX</li>
                    </ul>
                    <p>
                        These experiences have not only broadened my technical skills but also enhanced my ability to collaborate
                        effectively in diverse team environments.
                    </p>
                </div>
            </div>
        </section>
    )
}