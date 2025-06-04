
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-yellow-50 to-yellow-100 text-gray-900">
      {/* Background decoration with UI yellow accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-yellow-600/5"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-yellow-300/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          {/* UI-themed header */}
          <div className="mb-8 relative">
            <div className="flex justify-center items-center mb-6">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-3 rounded-full mr-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 tracking-tight">
                SKILL
              </h1>
            </div>
            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 bg-clip-text text-transparent">
                SWAP
              </h1>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
            </div>
          </div>
          
          {/* Academic tagline */}
          <div className="space-y-4 mb-8">
            <p className="text-2xl md:text-3xl text-gray-700 font-semibold">
              Platform Pertukaran Keterampilan
            </p>
            <p className="text-xl md:text-2xl text-yellow-700 font-medium">
              Mahasiswa Universitas Indonesia
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Bergabunglah dengan komunitas mahasiswa UI untuk saling berbagi pengetahuan, 
              mengembangkan keterampilan, dan membangun jaringan akademik yang kuat.
            </p>
          </div>
          
          {/* Call to action with UI style */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link to="/register">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105">
                Mulai Bertukar Skill
                <Users className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="border-2 border-yellow-500 text-yellow-700 hover:bg-yellow-50 px-8 py-4 text-lg rounded-lg font-semibold">
                Pelajari Cara Kerja
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          {/* Academic stats */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-yellow-200 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">1,000+</div>
              <div className="text-gray-600 font-medium">Mahasiswa Aktif</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-yellow-200 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">500+</div>
              <div className="text-gray-600 font-medium">Keterampilan</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-yellow-200 shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">2,000+</div>
              <div className="text-gray-600 font-medium">Pertukaran Sukses</div>
            </div>
          </div>
          
          {/* UI Excellence badge */}
          <div className="mt-12 flex justify-center">
            <div className="flex items-center bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-6 py-3 rounded-full shadow-lg">
              <Trophy className="h-5 w-5 mr-2" />
              <span className="font-semibold">Eksklusif untuk Civitas Akademika UI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
