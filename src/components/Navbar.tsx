
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black/90 backdrop-blur-md border-b border-yellow-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-xl">
              <Users className="h-6 w-6 text-black" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Skillswap
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-gray-300 hover:text-yellow-400 transition-colors">
              Fitur
            </Link>
            <Link to="/how-it-works" className="text-gray-300 hover:text-yellow-400 transition-colors">
              Cara Kerja
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-yellow-400 transition-colors">
              Tentang
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-500/10">
                Masuk
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold">
                Daftar Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
