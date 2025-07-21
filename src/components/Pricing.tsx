import React from 'react';
import { useState } from 'react';
import { Check, Star, Gift, BookOpen, Users, Trophy } from 'lucide-react';
import RegistrationForm from './RegistrationForm';

const Pricing: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const benefits = [
    { icon: <Star className="h-5 w-5" />, text: "Sertifikat Zeroday Operations Pvt (verifiable)" },
    { icon: <BookOpen className="h-5 w-5" />, text: "Portofolio report bug valid (untuk melamar kerja)" },
    { icon: <Gift className="h-5 w-5" />, text: "Penguasaan membuat exploitation tools mempelajari teknik programming (python, perl, dan lainnya)" },
    { icon: <Users className="h-5 w-5" />, text: "Akses ke komunitas tertutup alumni" },
    { icon: <Trophy className="h-5 w-5" />, text: "Pembimbingan lanjutan setelah lulus" },
    { icon: <Users className="h-5 w-5" />, text: "Kolaborasi pada private program di semua platform (Bugcrowd, HackerOne, dll) dengan bantuan mentor untuk setiap laporan kerentanan" },
    { icon: <Star className="h-5 w-5" />, text: "Akses diskusi langsung ke opzero.ru (tidak untuk publik, dengan rintangan dan prosedur ketat yang harus dipatuhi)" }
  ];

  const included = [
    "10 bulan pelatihan intensif (5 hari/minggu)",
    "Akses ke lab internal dan target aplikasi real",
    "Mentoring personal dari praktisi internasional",
    "Tools premium (Burp Suite Pro, dll)",
    "IDA Pro Powerful Disassembler Decompiler & Debugger",
    "Materi pembelajaran terbaru (diupdate annually)",
    "Live simulation dengan platform HackerOne/Bugcrowd",
    "Workshop exploit development dan payload crafting",
    "Pentest simulation dan report writing",
    "CVE writing dan vulnerability documentation",
    "Komunitas alumni dan networking"
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Investasi untuk <span className="text-red-400">Masa Depan</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Program komprehensif dengan nilai yang sebanding dengan bootcamp cybersecurity internasional
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-red-500/50 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-red-500 text-white font-bold py-2 px-6 rounded-bl-lg">
              Early Bird
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Zeroday101 Bootcamp</h3>
              <p className="text-gray-400 mb-6">Comprehensive Cybersecurity Training Program</p>
              
              <div className="mb-6">
                <div className="text-4xl font-bold text-red-400 mb-2">
                  Rp 60.000.000
                </div>
                <div className="text-2xl font-semibold text-gray-300 mb-2">
                  $3,600 USD
                </div>
                <p className="text-gray-400">10 bulan pelatihan intensif</p>
                <p className="text-sm text-yellow-400 mt-2">💰 Discount khusus untuk early bird registration</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-white mb-4">✅ Yang Termasuk dalam Program:</h4>
                <ul className="space-y-3">
                  {included.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-4">🎓 Output Setelah Lulus:</h4>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="text-red-400 mt-0.5">
                        {benefit.icon}
                      </div>
                      <span className="text-gray-300 text-sm">{benefit.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <div className="text-center">
                <button
                  onClick={() => setIsFormOpen(true)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 inline-block"
                >
                  Hubungi Kami untuk Informasi Harga
                </button>
                <p className="text-gray-400 text-sm mt-4">
                  📞 Konsultasi gratis untuk membahas program dan investasi
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 text-center">
            <h3 className="text-yellow-400 font-bold text-lg mb-2">⚡ Promo Terbatas</h3>
            <p className="text-gray-300">
              Daftar sekarang dan dapatkan akses ke tools premium serta bonus mentoring session!
            </p>
          </div>
        </div>
      </div>
      
      <RegistrationForm 
        isOpen={isFormOpen} 
        onClose={() => setIsFormOpen(false)} 
      />
    </section>
  );
};

export default Pricing;