
import { Users } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-2 rounded-xl">
                <Users className="h-6 w-6 text-black" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Skillswap</span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Platform pertukaran keterampilan untuk mahasiswa Indonesia. 
              Belajar hal baru sambil mengajar keahlian yang kamu miliki.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-yellow-400">Platform</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/features" className="hover:text-yellow-400 transition-colors">Fitur</Link></li>
              <li><Link to="/how-it-works" className="hover:text-yellow-400 transition-colors">Cara Kerja</Link></li>
              <li><Link to="/pricing" className="hover:text-yellow-400 transition-colors">Harga</Link></li>
              <li><Link to="/faq" className="hover:text-yellow-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-orange-400">Dukungan</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/help" className="hover:text-orange-400 transition-colors">Bantuan</Link></li>
              <li><Link to="/contact" className="hover:text-orange-400 transition-colors">Kontak</Link></li>
              <li><Link to="/privacy" className="hover:text-orange-400 transition-colors">Privasi</Link></li>
              <li><Link to="/terms" className="hover:text-orange-400 transition-colors">Syarat</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Skillswap. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
