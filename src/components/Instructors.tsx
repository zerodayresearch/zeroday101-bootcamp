import React from 'react';
import { ExternalLink, Award, TrendingUp, Zap } from 'lucide-react';

const Instructors: React.FC = () => {
  const instructors = [
    {
      name: "deb0con",
      title: "Top Ranker HackerOne",
      description: "Aktif di HackerOne dengan track record sebagai top ranker dalam komunitas bug bounty global",
      link: "https://hackerone.com/deb0con",
      icon: <Award className="h-6 w-6 text-yellow-400" />,
      expertise: ["Web Application Security", "API Testing", "Business Logic Flaws"]
    },
    {
      name: "hackeronanywhere",
      title: "Produktif Bug Hunter",
      description: "Bug hunter produktif dengan ratusan submission valid di berbagai platform bug bounty internasional",
      link: "https://hackerone.com/hackeronanywhere",
      icon: <TrendingUp className="h-6 w-6 text-blue-400" />,
      expertise: ["Mobile Security", "OWASP Top 10", "Penetration Testing"]
    },
    {
      name: "odaysec",
      title: "CVE Contributor & Zero-day Researcher",
      description: "Contributor aktif ke CVE dan peneliti eksploit zero-day dengan publikasi di komunitas security global",
      link: "https://hackerone.com/odaysec",
      icon: <Zap className="h-6 w-6 text-red-400" />,
      expertise: ["Zero-day Research", "Exploit Development", "CVE Documentation"]
    }
  ];

  return (
    <section id="instructors" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            🧑‍🏫 Diajarkan oleh <span className="text-red-400">Praktisi Aktif</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Mentor utama adalah bughunter Indonesia yang telah terbukti secara global di komunitas hacker etis
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-red-500/50 transition-all duration-200 group"
            >
              <div className="flex items-center space-x-3 mb-4">
                {instructor.icon}
                <div>
                  <h3 className="text-lg font-bold text-white">{instructor.name}</h3>
                  <p className="text-red-400 text-sm font-medium">{instructor.title}</p>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {instructor.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-white font-semibold text-sm mb-2">Expertise:</h4>
                <div className="flex flex-wrap gap-2">
                  {instructor.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-red-500/10 text-red-400 text-xs px-2 py-1 rounded border border-red-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <a
                href={instructor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors duration-200 text-sm"
              >
                <span>Lihat Profil</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-blue-400 mb-4">📖 Kisah Inspiratif</h3>
          <p className="text-gray-300 mb-4">
            Baca perjalanan para mentor kami dalam dunia cybersecurity Indonesia
          </p>
          <a
            href="https://medium.com/@number01/short-kisah-pemuda-yang-memilih-jalan-sunyi-pelopor-bug-bounty-indonesia-yang-mengukir-sejarah-d4cbb9205bcb"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
          >
            <span>Baca Kisah Lengkap</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Instructors;