
import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 border-t border-yellow-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-2 rounded-xl shadow-md">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent">Skillswap</span>
                <span className="text-sm text-gray-500 font-medium">Universitas Indonesia</span>
              </div>
            </Link>
            <p className="text-gray-600 leading-relaxed max-w-md">
              Platform pertukaran keterampilan eksklusif untuk mahasiswa Universitas Indonesia. 
              Belajar hal baru sambil mengajar keahlian yang Anda miliki kepada sesama civitas akademika UI.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-yellow-700">Platform</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/features" className="hover:text-yellow-600 transition-colors">Fitur</Link></li>
              <li><Link to="/how-it-works" className="hover:text-yellow-600 transition-colors">Cara Kerja</Link></li>
              <li><Link to="/pricing" className="hover:text-yellow-600 transition-colors">Harga</Link></li>
              <li><Link to="/faq" className="hover:text-yellow-600 transition-colors">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-yellow-700">Dukungan</h3>
            <ul className="space-y-2 text-gray-600">
              <li><Link to="/help" className="hover:text-yellow-600 transition-colors">Bantuan</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-600 transition-colors">Kontak</Link></li>
              <li><Link to="/privacy" className="hover:text-yellow-600 transition-colors">Privasi</Link></li>
              <li><Link to="/terms" className="hover:text-yellow-600 transition-colors">Syarat</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-yellow-200 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2024 Skillswap - Universitas Indonesia. Semua hak dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
