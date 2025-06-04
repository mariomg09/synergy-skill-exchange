
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, User, Star, MessageSquare, Calendar, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
  const [searchSkill, setSearchSkill] = useState("");
  
  const mockUsers = [
    {
      id: 1,
      name: "Andi Pratama",
      major: "Teknik Informatika",
      year: "2022",
      ownedSkills: ["React", "Node.js", "UI/UX Design"],
      wantedSkills: ["Machine Learning", "Python"],
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Sari Dewi",
      major: "Desain Komunikasi Visual",
      year: "2023",
      ownedSkills: ["Photoshop", "Illustrator", "Video Editing"],
      wantedSkills: ["Web Development", "JavaScript"],
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Budi Santoso",
      major: "Ekonomi",
      year: "2021",
      ownedSkills: ["Digital Marketing", "Content Writing", "SEO"],
      wantedSkills: ["Data Analysis", "Excel Advanced"],
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const filteredUsers = mockUsers.filter(user => 
    searchSkill === "" || 
    user.ownedSkills.some(skill => skill.toLowerCase().includes(searchSkill.toLowerCase())) ||
    user.wantedSkills.some(skill => skill.toLowerCase().includes(searchSkill.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Selamat datang di Skillswap! 👋
          </h1>
          <p className="text-gray-600">
            Temukan teman belajar dan tukar skill dengan sesama mahasiswa UI
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <User className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">156</p>
                  <p className="text-gray-600">Mahasiswa Aktif</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Star className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">89</p>
                  <p className="text-gray-600">Skill Tersedia</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <MessageSquare className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">234</p>
                  <p className="text-gray-600">Tukar Skill Selesai</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-yellow-600" />
                <div className="ml-4">
                  <p className="text-2xl font-bold text-gray-900">12</p>
                  <p className="text-gray-600">Sesi Minggu Ini</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Search className="h-5 w-5 mr-2 text-yellow-600" />
              Cari Skill
            </CardTitle>
            <CardDescription>
              Temukan mahasiswa dengan skill yang kamu butuhkan
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                placeholder="Cari skill... (contoh: React, Photoshop, Marketing)"
                value={searchSkill}
                onChange={(e) => setSearchSkill(e.target.value)}
                className="flex-1"
              />
              <Button className="bg-yellow-600 hover:bg-yellow-700">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <Card key={user.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{user.name}</h3>
                    <p className="text-gray-600 text-sm">{user.major} • {user.year}</p>
                    <div className="flex items-center mt-2">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{user.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <p className="text-sm font-medium text-gray-900 mb-2">Bisa Ngajarin:</p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {user.ownedSkills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-green-100 text-green-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <p className="text-sm font-medium text-gray-900 mb-2">Mau Belajar:</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {user.wantedSkills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-blue-100 text-blue-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Chat & Tukar Skill
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredUsers.length === 0 && searchSkill && (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-gray-600">Belum ada yang punya skill "{searchSkill}". Coba keyword lain!</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
