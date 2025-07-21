import React from 'react';
import { Terminal, Zap, Users, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-12 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-6">
            <Terminal className="h-4 w-4 text-red-400" />
            <span className="text-red-400 text-sm font-medium">Part of Zeroday Operations</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Zeroday101</span>
            <br />
            <span className="text-red-500">Bootcamp</span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Bootcamp Hacking Offline selama <span className="text-red-400 font-semibold">10 bulan</span> yang dirancang khusus untuk membentuk siswa menjadi peretas mahir dan peneliti kerentanan sistem operasi serta aplikasi
          </p>

          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 max-w-4xl mx-auto mb-8">
            <h3 className="text-red-400 font-bold text-lg mb-3">⚠️ BUKAN TEMPAT UNTUK MENJADI ARTIS</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Jika niat Anda hanya ingin cari tahu seperti apa belajar hacking di Zeroday101 atau hanya sekedar iseng, 
              sebaiknya urungkan niat untuk mendaftar. Jangan buang uang Anda secara percuma dan kami tidak ingin 
              membuang waktu berharga dengan keisengan Anda.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#pricing"
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              Daftar Sekarang
            </a>
            <a
              href="#curriculum"
              className="border border-red-500 text-red-400 hover:bg-red-500/10 font-bold py-3 px-8 rounded-lg transition-all duration-200"
            >
              Lihat Kurikulum
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 border border-red-500/20 rounded-lg p-6 text-center">
            <Zap className="h-8 w-8 text-red-400 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">10 Bulan Intensif</h3>
            <p className="text-gray-400 text-sm">5 hari per minggu, libur weekend</p>
          </div>
          
          <div className="bg-gray-800/50 border border-red-500/20 rounded-lg p-6 text-center">
            <Users className="h-8 w-8 text-red-400 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">Mentor Berpengalaman</h3>
            <p className="text-gray-400 text-sm">Praktisi aktif dunia internasional</p>
          </div>
          
          <div className="bg-gray-800/50 border border-red-500/20 rounded-lg p-6 text-center">
            <Award className="h-8 w-8 text-red-400 mx-auto mb-3" />
            <h3 className="font-bold text-lg mb-2">Sertifikat Resmi</h3>
            <p className="text-gray-400 text-sm">Zeroday Operations verifiable</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;