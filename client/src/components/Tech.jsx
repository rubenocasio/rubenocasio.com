import React from 'react'

function SkillsSection() {
    return (
        <div className="p-6 bg-gray-100">
            <h2 className="text-4xl font-bold text-center mb-8 text-[#fca311]" id='tech'>Technical Skills</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Category title="Programming Languages" skills={['Python', 'JavaScript', 'Java 8', 'C#', 'PHP']} />
                <Category title="Databases" skills={['MySQL', 'MongoDB', 'SQL Server']} />
                <Category title="Frameworks" skills={['Flask', 'Django', 'Express', 'SpringMVC', 'ThymeLeaf']} />
                <Category title="Libraries" skills={['jQuery', 'JPA Hibernate', 'JUnit', 'Socket.IO']} />
                <Category title="Tools" skills={['Ajax', 'APIs', 'Node.js', 'NPM', 'JSP', 'Tomcat', 'JVM', 'Git/GitHub']} />
                <Category title="Platforms" skills={['Windows', 'Linux', 'Nginx','Apple', 'Wordpress']} />
            </div>
        </div>
    );
}

function Category({ title, skills }) {
    return (
        <div className="transform hover:scale-105 transition duration-500 ease-in-out bg-white p-5 shadow-lg rounded-lg hover:shadow-2xl">
            <h3 className="text-lg font-semibold mb-3 text-[#fca311]">{title}</h3>
            <ul className="list-none list-inside text-gray-700">
                {skills.map(skill => <li key={skill} className="transition duration-300 ease-in-out hover:text-[#fca311]">{skill}</li>)}
            </ul>
        </div>
    );
}
export default SkillsSection