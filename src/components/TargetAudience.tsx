import React from 'react';
import { GraduationCap, Briefcase, Globe, Target } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const audiences = [
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-400" />,
      title: "Siswa / Mahasiswa",
      description: "Yang ingin menjadi pentester profesional dan membangun karir di bidang cybersecurity",
      highlight: "Fresh graduates welcome"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-green-400" />,
      title: "Profesional TI",
      description: "Yang ingin alih jalur ke bidang cybersecurity dengan skill yang marketable",
      highlight: "Career transition"
    },
    {
      icon: <Globe className="h-8 w-8 text-purple-400" />,
      title: "Freelancer / Remote Worker",
      description: "Yang ingin mendapatkan penghasilan dari platform bug bounty global",
      highlight: "Global opportunities"
    },
    {
      icon: <Target className="h-8 w-8 text-red-400" />,
      title: "Aspiring Bug Hunter",
      description: "Siapa pun yang serius ingin menjadi bughunter profesional dengan income yang stabil",
      highlight: "Professional mindset"
    }
  ];

  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            📌 Untuk Siapa <span className="text-red-400">Program Ini?</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Dirancang untuk individu yang serius ingin berkarir di dunia cybersecurity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-lg p-6 hover:border-red-500/50 transition-all duration-200 text-center group"
            >
              <div className="flex justify-center mb-4">
                <div className="group-hover:scale-110 transition-transform duration-200">
                  {audience.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{audience.title}</h3>
              <p className="text-gray-300 text-sm mb-3 leading-relaxed">{audience.description}</p>
              <div className="inline-block bg-red-500/10 text-red-400 text-xs px-3 py-1 rounded-full border border-red-500/20">
                {audience.highlight}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-red-400 mb-4">❗ Persyaratan Penting</h3>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-300 text-lg mb-4">
                Program ini membutuhkan <span className="text-red-400 font-bold">komitmen tinggi</span> dan 
                <span className="text-red-400 font-bold"> dedikasi penuh</span>. Hanya untuk mereka yang:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-300">Serius ingin berkarir di cybersecurity</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-300">Siap belajar intensif 5 hari/minggu</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-300">Memiliki growth mindset yang kuat</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <span className="text-gray-300">Tidak mudah menyerah dan gigih</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;