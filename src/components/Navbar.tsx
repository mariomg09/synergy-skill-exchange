
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-yellow-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-2 rounded-xl shadow-md">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent">
                Skillswap
              </span>
              <span className="text-xs text-gray-500 font-medium">Universitas Indonesia</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
              Fitur
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
              Cara Kerja
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-yellow-600 transition-colors font-medium">
              Tentang
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="text-yellow-600 hover:text-yellow-700 hover:bg-yellow-50 font-medium">
                Masuk
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-semibold shadow-md">
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
