
import { Card, CardContent } from "@/components/ui/card";
import { Users, Search, MessageSquare, Calendar } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "1",
      icon: Users,
      title: "Buat Profil",
      description: "Daftar dan buat profil lengkap dengan skill yang kamu kuasai dan yang ingin dipelajari"
    },
    {
      step: "2", 
      icon: Search,
      title: "Cari Partner",
      description: "Gunakan fitur pencarian untuk menemukan mahasiswa dengan skill yang saling melengkapi"
    },
    {
      step: "3",
      icon: MessageSquare,
      title: "Mulai Chat",
      description: "Hubungi partner yang tepat dan diskusikan detail pertukaran skill yang diinginkan"
    },
    {
      step: "4",
      icon: Calendar,
      title: "Jadwalkan & Belajar",
      description: "Atur jadwal belajar bersama dan mulai sesi tukar skill secara online atau offline"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cara Kerja <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Skillswap</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hanya empat langkah sederhana untuk mulai bertukar skill dengan mahasiswa lain
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-gray-800/60 backdrop-blur-sm border border-yellow-500/30 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 h-full">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center text-black text-2xl font-bold">
                    {step.step}
                  </div>
                  <step.icon className="h-8 w-8 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              
              {/* Connector arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-orange-500 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
