
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const QuickStart = () => {
  const [quickSearch, setQuickSearch] = useState("");
  
  const popularSkills = [
    "React", "Python", "Photoshop", "Digital Marketing", 
    "UI/UX Design", "Video Editing", "Content Writing", "Excel"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Langsung Mulai Sekarang! 🚀
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Gak perlu ribet daftar dulu. Langsung cari skill yang kamu butuhkan atau lihat dashboard!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Quick Search */}
          <Card className="border-2 border-yellow-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="h-5 w-5 mr-2 text-yellow-600" />
                Cari Skill Langsung
              </CardTitle>
              <CardDescription>
                Cari mahasiswa dengan skill yang kamu butuhkan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input
                  placeholder="Mau belajar apa? (contoh: React, Photoshop)"
                  value={quickSearch}
                  onChange={(e) => setQuickSearch(e.target.value)}
                />
                <Link to="/dashboard">
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                    <Search className="h-4 w-4 mr-2" />
                    Cari Sekarang
                  </Button>
                </Link>
              </div>
              
              <div className="mt-6">
                <p className="text-sm font-medium text-gray-700 mb-3">Skill Populer:</p>
                <div className="flex flex-wrap gap-2">
                  {popularSkills.map((skill) => (
                    <button
                      key={skill}
                      onClick={() => setQuickSearch(skill)}
                      className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm hover:bg-yellow-100 transition-colors"
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Access Dashboard */}
          <Card className="border-2 border-yellow-200">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="h-5 w-5 mr-2 text-yellow-600" />
                Langsung ke Dashboard
              </CardTitle>
              <CardDescription>
                Lihat semua mahasiswa dan skill yang tersedia
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    ✨ <strong>Demo Mode:</strong> Langsung masuk tanpa registrasi untuk coba-coba dulu!
                  </p>
                </div>
                
                <Link to="/dashboard">
                  <Button className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white">
                    <Zap className="h-4 w-4 mr-2" />
                    Masuk Dashboard
                  </Button>
                </Link>
                
                <p className="text-xs text-gray-500 text-center">
                  Nanti bisa daftar akun kalau udah cocok
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuickStart;
