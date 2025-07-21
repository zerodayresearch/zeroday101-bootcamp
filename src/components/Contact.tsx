import React from 'react';
import { useState } from 'react';
import { Globe, Instagram, Mail, MessageCircle, ExternalLink } from 'lucide-react';
import RegistrationForm from './RegistrationForm';

const Contact: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const contactMethods = [
    {
      icon: <Globe className="h-6 w-6 text-blue-400" />,
      label: "Website",
      value: "www.opzero.id",
      href: "https://www.opzero.id",
      note: "",
      color: "border-blue-500/20 hover:border-blue-500/50"
    },
    {
      icon: <Instagram className="h-6 w-6 text-pink-400" />,
      label: "Instagram",
      value: "@opzeroid",
      href: "https://instagram.com/opzeroid",
      note: "",
      color: "border-pink-500/20 hover:border-pink-500/50"
    },
    {
      icon: <Mail className="h-6 w-6 text-green-400" />,
      label: "Email",
      value: "pendaftaran@opzero.id",
      href: "mailto:pendaftaran@opzero.id",
      note: "",
      color: "border-green-500/20 hover:border-green-500/50"
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-orange-400" />,
      label: "WhatsApp/Telegram",
      value: "Kirim DM untuk info",
      href: "#",
      note: "(via Instagram DM)",
      color: "border-orange-500/20 hover:border-orange-500/50"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Cara <span className="text-red-400">Daftar</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Hubungi kami melalui salah satu channel berikut untuk informasi pendaftaran dan konsultasi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`bg-gray-800 border ${method.color} rounded-lg p-6 transition-all duration-200 group`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="group-hover:scale-110 transition-transform duration-200">
                  {method.icon}
                </div>
                <h3 className="text-white font-semibold">{method.label}</h3>
              </div>
              
              <div className="mb-4">
                <p className="text-gray-300 font-medium">{method.value}</p>
                {method.note && (
                  <p className="text-gray-500 text-sm">{method.note}</p>
                )}
              </div>
              
              {method.href !== "#" && (
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors duration-200 text-sm"
                >
                  <span>Hubungi</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-8 text-center">
          <h3 className="text-xl font-bold text-red-400 mb-4">🚀 Siap Memulai Perjalanan Anda?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Jangan sia-siakan kesempatan untuk menjadi cybersecurity professional. 
            Konsultasi dengan tim kami dan mulai transformasi karir Anda hari ini!
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button
              onClick={() => setIsFormOpen(true)}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 inline-block"
            >
              Konsultasi Sekarang
            </button>
            <a
              href="https://instagram.com/opzeroid"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-red-500 text-red-400 hover:bg-red-500/10 font-bold py-3 px-6 rounded-lg transition-all duration-200 inline-block"
            >
              Follow Instagram
            </a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <span className="text-2xl">🧠</span>
            <span className="font-bold">Zeroday Operations</span>
          </div>
          <div className="mt-2 space-y-1">
            <p className="text-red-400 font-bold">🔥 Train Hard, Hack Real.</p>
            <div className="flex flex-wrap justify-center gap-2 text-xs text-gray-500">
              <span>#RealWorldPentest</span>
              <span>#BugBounty</span>
              <span>#CyberSecurityTraining</span>
              <span>#ZerodayOperations</span>
              <span>#WebHacking</span>
            </div>
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

export default Contact;