
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Search, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-green-600/5"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Tukar <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Skill</span>,
            <br />
            Kembangkan <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Potensi</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Platform inovatif untuk mahasiswa yang ingin bertukar keterampilan. 
            Belajar hal baru sambil mengajar keahlian yang kamu miliki. 
            Gratis, mudah, dan efektif!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/register">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-8 py-3 text-lg">
                Mulai Bertukar Skill
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                Pelajari Cara Kerja
              </Button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-100">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900">1000+</div>
              <div className="text-gray-600">Mahasiswa Aktif</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-green-100">
              <Search className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Skill Tersedia</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-100">
              <Calendar className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900">2000+</div>
              <div className="text-gray-600">Sesi Tukar Skill</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
