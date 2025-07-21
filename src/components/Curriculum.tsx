import React from 'react';
import { ChevronRight, Code, Smartphone, Server, Cpu, Eye, Satellite } from 'lucide-react';

const Curriculum: React.FC = () => {
  const courses = [
    { icon: <Code className="h-6 w-6" />, title: "Advance Hacking Mentality & Personality", color: "text-red-400" },
    { icon: <Code className="h-6 w-6" />, title: "Advance Hacking Knowledge & Mindset", color: "text-blue-400" },
    { icon: <Code className="h-6 w-6" />, title: "Web Hacking", color: "text-purple-400" },
    { icon: <Server className="h-6 w-6" />, title: "Web API Hacking", color: "text-orange-400" },
    { icon: <Cpu className="h-6 w-6" />, title: "Windows Binary Application Hacking", color: "text-yellow-400" },
    { icon: <Cpu className="h-6 w-6" />, title: "Linux Binary Application Hacking", color: "text-yellow-400" },
    { icon: <Eye className="h-6 w-6" />, title: "Reverse Engineering", color: "text-pink-400" },
    { icon: <Server className="h-6 w-6" />, title: "IoT Hacking", color: "text-indigo-400" },
    { icon: <Smartphone className="h-6 w-6" />, title: "Android Kernel Hacking", color: "text-red-400" },
    { icon: <Smartphone className="h-6 w-6" />, title: "Android Application Hacking", color: "text-blue-400" },
    { icon: <Code className="h-6 w-6" />, title: "Software Hacking", color: "text-purple-400" },
    { icon: <Smartphone className="h-6 w-6" />, title: "IOS Hacking", color: "text-orange-400" },
    { icon: <Server className="h-6 w-6" />, title: "SS7 Hacking", color: "text-green-400" },
    { icon: <Satellite className="h-6 w-6" />, title: "Satelite Hacking", color: "text-teal-400" },
  ];

  const practicalModules = [
    {
      title: "Advance Bug Bounty & Hacking Exploitations",
      items: [
        "Membedakan antara CTF-style dan real application bughunting",
        "Teknik hacking terhadap aplikasi berbasis Web, API, dan Mobile Web",
        "IDOR (Insecure Direct Object Reference)",
        "XSS (Stored, Reflected, DOM-Based)",
        "CSRF, Open Redirect, SSRF",
        "Command Injection, RCE, SQLi",
        "Broken Access Control, JWT Abuse, Auth Bypass",
        "Race Conditions & Find Exploited Bypass",
        "Business Logic Vulnerabilities (BOLA, BFLA)",
        "Teknik chaining vulnerabilities untuk dampak maksimal"
      ]
    },
    {
      title: "Advance Zeroday Programming Exploitations",
      items: [
        "Live simulation dengan target real HackerOne IBB — The Internet Bug Bounty",
        "Rewards security research into vulnerabilities impacting Open Source Software",
        "Zero-day vulnerability discovery dan exploitation techniques",
        "Advanced payload development untuk bypass modern security controls",
        "Custom exploit development menggunakan Python, Perl, dan bahasa lainnya",
        "Reverse engineering untuk vulnerability analysis",
        "Binary exploitation dan memory corruption attacks"
      ]
    },
    {
      title: "Professional Penetration Testing & Reporting",
      items: [
        "Membuat pentest report seperti konsultan profesional",
        "Mencakup aspek teknikal, non-teknikal, dan remediation advice",
        "Executive summary dan technical findings documentation",
        "Risk assessment dan business impact analysis",
        "Remediation roadmap dan security recommendations"
      ]
    },
    {
      title: "CVE Research & Vulnerability Publication",
      items: [
        "Studi kasus kerentanan yang ditemukan tim Zeroday Operations dan mitra",
        "Teknik publish di NVD, GitHub Advisory, dan platform lainnya",
        "CVE request process dan vulnerability coordination",
        "Research methodology untuk zero-day discovery",
        "Responsible disclosure dan coordinated vulnerability disclosure"
      ]
    },
    {
      title: "Proper Vulnerability Reporting (Professional)",
      items: [
        "Menentukan CVSS dan severity scoring yang tepat",
        "Teknik menjelaskan dampak bisnis dan teknis",
        "Studi kasus report nyata dari HackerOne dan Bugcrowd",
        "HackerOne report templates",
        "Bugcrowd submission formats",
        "CVE writeup styling",
        "Coordinated disclosure emails"
      ]
    },
    {
      title: "Exploit Development & Payload Crafting",
      items: [
        "Belajar cara membuat payload khusus untuk XSS, SSRF, dll",
        "Teknik payload evasion dan bypass filter dengan metode modern",
        "Teknik menguasai dan membuat exploitation tools mempelajari teknik programming (Exclusive)",
        "Advanced shellcode development dan encoding techniques",
        "Custom tool development untuk automated vulnerability scanning"
      ]
    }
  ];

  return (
    <section id="curriculum" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Kurikulum <span className="text-red-400">Lengkap</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Program intensif yang mencakup semua aspek cybersecurity dan ethical hacking
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-red-400 mb-8 text-center">Core Hacking Modules</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-lg p-4 hover:border-red-500/50 transition-all duration-200 group"
              >
                <div className="flex items-center space-x-3">
                  <div className={`${course.color} group-hover:scale-110 transition-transform duration-200`}>
                    {course.icon}
                  </div>
                  <h4 className="font-semibold text-white text-sm">{course.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-red-400 mb-8 text-center">Practical Implementation</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {practicalModules.map((module, index) => (
              <div
                key={index}
                className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-red-500/50 transition-all duration-200"
              >
                <h4 className="text-lg font-bold text-white mb-4">{module.title}</h4>
                <ul className="space-y-2">
                  {module.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start space-x-2">
                      <ChevronRight className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 bg-red-500/10 border border-red-500/20 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-red-400 mb-4">📅 Durasi Program</h3>
          <p className="text-gray-300 text-lg">
            <span className="font-bold">10 bulan</span> | 
            <span className="font-bold"> 5 hari per minggu</span> | 
            <span className="font-bold"> Libur weekend</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;