import React, { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

interface RegistrationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    email: '',
    nomorWhatsApp: '',
    background: '',
    motivasi: '',
    pengalaman: '',
    komitmen: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const backgroundOptions = [
    'Mahasiswa IT/Komputer',
    'Mahasiswa Non-IT',
    'Fresh Graduate IT',
    'Fresh Graduate Non-IT',
    'IT Professional',
    'Non-IT Professional',
    'Entrepreneur',
    'Freelancer',
    'Unemployment',
    'Lainnya'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create email content
    const emailContent = `
Pendaftaran Zeroday Bootcamp 101

=== INFORMASI PENDAFTAR ===
Nama Lengkap: ${formData.namaLengkap}
Email: ${formData.email}
Nomor WhatsApp: ${formData.nomorWhatsApp}
Background Saat Ini: ${formData.background}

=== MOTIVASI & GOALS ===
${formData.motivasi}

=== PENGALAMAN IT/SECURITY ===
${formData.pengalaman || 'Tidak ada pengalaman yang disebutkan'}

=== KOMITMEN ===
Berkomitmen mengikuti program: ${formData.komitmen ? 'YA' : 'TIDAK'}

=== LANGKAH SELANJUTNYA ===
1. Tim akan menghubungi dalam 2 jam
2. Konsultasi gratis via call/video call
3. Penjadwalan dan proses pembayaran

Tanggal Pendaftaran: ${new Date().toLocaleString('id-ID')}
    `;

    try {
      // Create mailto link
      const subject = encodeURIComponent('Pendaftaran Zeroday Bootcamp 101 - ' + formData.namaLengkap);
      const body = encodeURIComponent(emailContent);
      const mailtoLink = `mailto:pendaftaran@opszero.id?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitting(false);
        onClose();
        setIsSubmitted(false);
        setFormData({
          namaLengkap: '',
          email: '',
          nomorWhatsApp: '',
          background: '',
          motivasi: '',
          pengalaman: '',
          komitmen: false
        });
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 border border-red-500/20 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gray-900 border-b border-red-500/20 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-red-400">Daftar Zeroday Bootcamp 101</h2>
            <p className="text-gray-300 text-sm mt-1">
              Bootcamp Hacking secara offline selama 10 bulan, yang berbeda dengan kursus hacking lainnya, 
              dirancang khusus untuk membentuk pemuda menjadi peretas yang mahir, handal, profesional dan 
              peneliti kerentanan pada sistem operasi serta Internet Bug Bounty Software Intelligence Hacking.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-400 transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-6 text-center">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-400 mb-2">Pendaftaran Berhasil!</h3>
            <p className="text-gray-300">
              Email client Anda akan terbuka untuk mengirim pendaftaran. 
              Tim kami akan menghubungi Anda dalam 2 jam.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <label className="block text-white font-semibold mb-2">
                Nama Lengkap <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="namaLengkap"
                value={formData.namaLengkap}
                onChange={handleInputChange}
                placeholder="Masukan nama lengkap"
                required
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="email@example.com"
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Nomor WhatsApp <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                name="nomorWhatsApp"
                value={formData.nomorWhatsApp}
                onChange={handleInputChange}
                placeholder="+62 812 3456 7890"
                required
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Background Saat Ini <span className="text-red-400">*</span>
              </label>
              <select
                name="background"
                value={formData.background}
                onChange={handleInputChange}
                required
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-red-400 focus:outline-none"
              >
                <option value="">Pilih background Anda</option>
                {backgroundOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Motivasi & Goals <span className="text-red-400">*</span>
              </label>
              <textarea
                name="motivasi"
                value={formData.motivasi}
                onChange={handleInputChange}
                placeholder="Ceritakan motivasi kamu belajar cybersecurity expert dan goals yang ingin dicapai!"
                required
                rows={4}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-400 focus:outline-none resize-none"
              />
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">
                Pengalaman IT/Security (Opsional)
              </label>
              <textarea
                name="pengalaman"
                value={formData.pengalaman}
                onChange={handleInputChange}
                placeholder="Ceritakan pengalaman anda dibidang saat ini/sebelumnya sebagai IT/Security jika ada (programming, networking, dll)..."
                rows={3}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-400 focus:outline-none resize-none"
              />
            </div>

            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                name="komitmen"
                checked={formData.komitmen}
                onChange={handleInputChange}
                required
                className="mt-1 h-4 w-4 text-red-500 bg-gray-800 border-gray-600 rounded focus:ring-red-400"
              />
              <label className="text-gray-300 text-sm leading-relaxed">
                Saya berkomitmen untuk mengikuti seluruh program pelatihan dengan serius dan akan meluangkan 
                waktu yang cukup untuk praktik di luar jam training. Saya memahami bahwa kesuksesan dalam 
                cybersecurity membutuhkan dedikasi dan kerja keras yang konsisten.
              </label>
            </div>

            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <h4 className="text-blue-400 font-bold mb-2">📋 Langkah Selanjutnya:</h4>
              <ol className="text-gray-300 text-sm space-y-1">
                <li>1. Submit form pendaftaran ini</li>
                <li>2. Tim kami akan menghubungi Anda dalam 2 jam</li>
                <li>3. Konsultasi gratis via call/video call</li>
                <li>4. Penjadwalan dan proses pembayaran</li>
              </ol>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !formData.komitmen}
              className="w-full bg-red-500 hover:bg-red-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Mengirim...</span>
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  <span>Kirim Pendaftaran</span>
                </>
              )}
            </button>

            <div className="text-center text-xs text-gray-500">
              © Powered by Zeroday Operations Pvt Ltd
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RegistrationForm;