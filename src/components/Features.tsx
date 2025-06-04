
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Search, MessageSquare, Calendar, Star, Plus } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Profil Lengkap",
      description: "Buat profil dengan skill yang dikuasai dan yang ingin dipelajari. Tampilkan portofolio untuk menarik partner.",
      color: "text-blue-600"
    },
    {
      icon: Search,
      title: "Pencarian Cerdas",
      description: "Temukan partner tukar skill berdasarkan keahlian, lokasi, rating, dan preferensi lainnya.",
      color: "text-green-600"
    },
    {
      icon: MessageSquare,
      title: "Chat Real-time",
      description: "Komunikasi langsung dengan partner melalui sistem chat terintegrasi. Diskusi materi dan koordinasi jadwal.",
      color: "text-blue-600"
    },
    {
      icon: Calendar,
      title: "Penjadwalan Mudah",
      description: "Atur jadwal belajar bersama dengan sistem kalender yang user-friendly dan notifikasi otomatis.",
      color: "text-green-600"
    },
    {
      icon: Star,
      title: "Rating & Review",
      description: "Sistem penilaian untuk menjamin kualitas pertukaran skill dan membangun reputasi yang baik.",
      color: "text-blue-600"
    },
    {
      icon: Plus,
      title: "Skill Premium",
      description: "Opsi berbayar untuk skill khusus dengan sistem transaksi yang aman dan transparan.",
      color: "text-green-600"
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fitur Unggulan <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Skillswap</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Semua yang kamu butuhkan untuk bertukar skill dengan mahasiswa lain dalam satu platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
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
