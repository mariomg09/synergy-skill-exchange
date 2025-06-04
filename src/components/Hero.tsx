
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-black text-white">
      {/* Background decoration with yellow accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-orange-500/5"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-yellow-300/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center">
          {/* Antimainstream header with scattered text */}
          <div className="mb-8 relative">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
              SKILL
            </h1>
            <div className="relative">
              <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent transform -rotate-2">
                SWAP
              </h1>
              <Sparkles className="absolute -top-4 -right-8 h-8 w-8 text-yellow-400 animate-bounce" />
            </div>
            <Zap className="absolute top-0 left-1/4 h-6 w-6 text-orange-400 animate-ping" />
          </div>
          
          {/* Antimainstream tagline */}
          <div className="space-y-4 mb-8">
            <p className="text-xl md:text-2xl text-gray-300 font-medium">
              🔥 Tuker skill kayak trading card
            </p>
            <p className="text-lg md:text-xl text-yellow-400 font-semibold">
              Gak cuma belajar, tapi juga ngajar!
            </p>
          </div>
          
          {/* Call to action with antimainstream style */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Link to="/register">
              <Button size="lg" className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105">
                Gabung Sekarang!
                <Target className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="border-2 border-yellow-500 text-yellow-400 hover:bg-yellow-500/10 px-8 py-4 text-lg rounded-full font-semibold">
                Gimana Caranya?
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
          
          {/* Stats with different layout */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-4 border border-yellow-500/30 transform rotate-1">
              <div className="text-2xl md:text-3xl font-black text-yellow-400">1K+</div>
              <div className="text-gray-300 text-sm">Mahasiswa</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500/20 to-yellow-500/20 backdrop-blur-sm rounded-2xl p-4 border border-orange-500/30 transform -rotate-1">
              <div className="text-2xl md:text-3xl font-black text-orange-400">500+</div>
              <div className="text-gray-300 text-sm">Skills</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-4 border border-yellow-500/30 transform rotate-2">
              <div className="text-2xl md:text-3xl font-black text-yellow-400">2K+</div>
              <div className="text-gray-300 text-sm">Exchanges</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
