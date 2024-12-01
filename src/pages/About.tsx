import React from 'react';
import { Code, Palette, Terminal } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: <Code size={24} />, title: 'Frontend Development', items: ['React', 'TypeScript', 'Tailwind CSS'] },
    { icon: <Terminal size={24} />, title: 'Backend Development', items: ['Node.js', 'Python', 'PostgreSQL'] },
    { icon: <Palette size={24} />, title: 'Design', items: ['UI/UX Design', 'Figma', 'Adobe Creative Suite'] },
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">About Me</h1>
          <p className="text-xl text-gray-300">
            I'm a passionate developer with a keen eye for design and a love for creating
            beautiful, functional web experiences. With years of experience in both frontend
            and backend development, I bring ideas to life through code.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <div className="text-violet-400 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">{skill.title}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-gray-300">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6">Professional Journey</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-violet-400">Senior Developer</h3>
              <p className="text-gray-400">Tech Company • 2020 - Present</p>
              <p className="text-gray-300 mt-2">
                Led development of multiple high-impact web applications and mentored junior developers.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-violet-400">Frontend Developer</h3>
              <p className="text-gray-400">Digital Agency • 2018 - 2020</p>
              <p className="text-gray-300 mt-2">
                Developed responsive web applications and collaborated with design teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;