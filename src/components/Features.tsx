
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Search, MessageSquare, Calendar, Star, Plus } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Profil Akademik",
      description: "Buat profil lengkap dengan skill yang dikuasai dan yang ingin dipelajari. Tampilkan portofolio akademik untuk menarik partner.",
      color: "text-yellow-600"
    },
    {
      icon: Search,
      title: "Pencarian Mahasiswa",
      description: "Temukan sesama mahasiswa UI berdasarkan keahlian, fakultas, angkatan, dan preferensi akademik lainnya.",
      color: "text-yellow-700"
    },
    {
      icon: MessageSquare,
      title: "Diskusi Akademik",
      description: "Komunikasi langsung dengan partner melalui sistem chat terintegrasi. Diskusi materi dan koordinasi jadwal belajar.",
      color: "text-yellow-600"
    },
    {
      icon: Calendar,
      title: "Jadwal Belajar",
      description: "Atur jadwal belajar bersama dengan sistem kalender yang user-friendly dan reminder otomatis.",
      color: "text-yellow-700"
    },
    {
      icon: Star,
      title: "Evaluasi & Review",
      description: "Sistem penilaian untuk menjamin kualitas pertukaran skill dan membangun reputasi akademik yang baik.",
      color: "text-yellow-600"
    },
    {
      icon: Plus,
      title: "Skill Premium",
      description: "Opsi berbayar untuk skill khusus dengan sistem transaksi yang aman dan transparan khusus mahasiswa UI.",
      color: "text-yellow-700"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Fitur Unggulan <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">Skillswap UI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Semua yang Anda butuhkan untuk bertukar keterampilan dengan sesama mahasiswa Universitas Indonesia
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-to-br from-yellow-50 to-white border border-yellow-200 hover:border-yellow-300 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-100 group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-800">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
