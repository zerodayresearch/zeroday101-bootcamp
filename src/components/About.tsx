import React from 'react';
import { Target, Brain, Code, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-red-400">Belajar dengan Benar</span>
            <br />
            <span className="text-white">Caranya Menjadi Hacker</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            Bagi kami, hacking bukan hanya soal sertifikat, mampu demo kontrol komputer orang, atau mampu terpampang di HoF sebagai bug hunter. 
            <span className="text-red-400 font-semibold"> Hacking adalah gaya hidup</span> yang meliputi bagaimana cara kita berfikir, menganalisa dan bertindak atas suatu keadaan atau tantangan.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-red-400 mb-6">🔎 Apa yang Akan Anda Pelajari?</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Target className="h-6 w-6 text-red-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Bug Bounty Profesional</h4>
                  <p className="text-gray-400 text-sm">Memahami konsep bug bounty dan dunia bughunting profesional</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Brain className="h-6 w-6 text-red-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Real-World vs CTF</h4>
                  <p className="text-gray-400 text-sm">Membedakan antara CTF-style dan real application bughunting</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Code className="h-6 w-6 text-red-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Multi-Platform Hacking</h4>
                  <p className="text-gray-400 text-sm">Teknik hacking terhadap aplikasi berbasis Web, API, dan Mobile Web</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-red-400 mt-1" />
                <div>
                  <h4 className="font-semibold text-white">Vulnerability Discovery</h4>
                  <p className="text-gray-400 text-sm">Vulnerability Discovery in Real-World Scenarios</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-red-500/20 rounded-lg p-8">
            <h3 className="text-xl font-bold text-red-400 mb-6">Apa yang Membuat Kami Berbeda?</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-gray-300">Pelatihan 100% hands-on — bukan teori atau simulasi CTF</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-gray-300">Materi diperbarui setiap tahun mengikuti tren CVE dan bypass terbaru</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-gray-300">Pendekatan langsung dari mentor dengan track record global</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-gray-300">Didesain untuk menghasilkan pentester siap kerja</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-gray-300">Tidak butuh gelar tinggi — yang dibutuhkan kemauan dan kerja keras</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;