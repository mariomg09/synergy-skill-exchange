
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    university: "",
    major: "",
    year: "",
    bio: "",
    ownedSkills: [],
    wantedSkills: []
  });

  const skillsList = [
    "Programming (JavaScript)", "Programming (Python)", "Programming (Java)",
    "Web Design", "UI/UX Design", "Graphic Design", 
    "Digital Marketing", "Content Writing", "Video Editing",
    "Photography", "Public Speaking", "Language (English)",
    "Language (Mandarin)", "Mathematics", "Statistics",
    "Project Management", "Music Production", "Animation"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Link to="/" className="inline-flex items-center text-yellow-600 hover:text-yellow-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Kembali ke Beranda
        </Link>
        
        <Card className="bg-white/80 backdrop-blur-sm border border-yellow-200 shadow-lg">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-2 rounded-xl">
                <Users className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-yellow-700 bg-clip-text text-transparent">
                Skillswap
              </span>
            </div>
            <CardTitle className="text-2xl text-gray-900">Bergabung dengan Skillswap</CardTitle>
            <CardDescription className="text-gray-600">
              {step === 1 ? "Langkah 1: Informasi Dasar" : 
               step === 2 ? "Langkah 2: Informasi Akademik" : 
               "Langkah 3: Skill & Minat"}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-gray-700">Nama Lengkap</Label>
                  <Input 
                    id="name" 
                    placeholder="Masukkan nama lengkap"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-700">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="nama@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <Label htmlFor="password" className="text-gray-700">Password</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Minimal 8 karakter"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <Label htmlFor="confirmPassword" className="text-gray-700">Konfirmasi Password</Label>
                  <Input 
                    id="confirmPassword" 
                    type="password" 
                    placeholder="Ulangi password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    className="border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500"
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <Label htmlFor="university" className="text-gray-700">Universitas</Label>
                  <Input 
                    id="university" 
                    placeholder="Nama universitas"
                    value={formData.university}
                    onChange={(e) => setFormData({...formData, university: e.target.value})}
                    className="border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <Label htmlFor="major" className="text-gray-700">Jurusan</Label>
                  <Input 
                    id="major" 
                    placeholder="Program studi"
                    value={formData.major}
                    onChange={(e) => setFormData({...formData, major: e.target.value})}
                    className="border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500"
                  />
                </div>
                <div>
                  <Label htmlFor="year" className="text-gray-700">Angkatan</Label>
                  <Select onValueChange={(value) => setFormData({...formData, year: value})}>
                    <SelectTrigger className="border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500">
                      <SelectValue placeholder="Pilih tahun angkatan" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-yellow-200">
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                      <SelectItem value="2021">2021</SelectItem>
                      <SelectItem value="2020">2020</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="bio" className="text-gray-700">Bio Singkat</Label>
                  <Textarea 
                    id="bio" 
                    placeholder="Ceritakan tentang dirimu dalam beberapa kalimat"
                    value={formData.bio}
                    onChange={(e) => setFormData({...formData, bio: e.target.value})}
                    className="border-yellow-200 focus:border-yellow-500 focus:ring-yellow-500"
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <Label className="text-base font-semibold text-gray-900">Skill yang Kamu Kuasai</Label>
                  <p className="text-sm text-gray-600 mb-3">Pilih skill yang bisa kamu ajarkan</p>
                  <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
                    {skillsList.map((skill) => (
                      <label key={skill} className="flex items-center space-x-2 p-2 hover:bg-yellow-50 rounded cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="rounded text-yellow-600 border-yellow-300 focus:ring-yellow-500"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFormData({...formData, ownedSkills: [...formData.ownedSkills, skill]});
                            } else {
                              setFormData({...formData, ownedSkills: formData.ownedSkills.filter(s => s !== skill)});
                            }
                          }}
                        />
                        <span className="text-sm text-gray-700">{skill}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <Label className="text-base font-semibold text-gray-900">Skill yang Ingin Dipelajari</Label>
                  <p className="text-sm text-gray-600 mb-3">Pilih skill yang ingin kamu pelajari</p>
                  <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
                    {skillsList.map((skill) => (
                      <label key={skill} className="flex items-center space-x-2 p-2 hover:bg-yellow-50 rounded cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="rounded text-yellow-600 border-yellow-300 focus:ring-yellow-500"
                          onChange={(e) => {
                            if (e.target.checked) {
                              setFormData({...formData, wantedSkills: [...formData.wantedSkills, skill]});
                            } else {
                              setFormData({...formData, wantedSkills: formData.wantedSkills.filter(s => s !== skill)});
                            }
                          }}
                        />
                        <span className="text-sm text-gray-700">{skill}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}
            
            <div className="flex justify-between mt-6">
              {step > 1 && (
                <Button variant="outline" onClick={() => setStep(step - 1)} className="border-yellow-200 text-yellow-600 hover:bg-yellow-50">
                  Sebelumnya
                </Button>
              )}
              
              {step < 3 ? (
                <Button 
                  onClick={() => setStep(step + 1)}
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white ml-auto"
                >
                  Selanjutnya
                </Button>
              ) : (
                <Button 
                  className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white ml-auto"
                  onClick={() => console.log("Registration data:", formData)}
                >
                  Daftar Sekarang
                </Button>
              )}
            </div>
            
            <div className="text-center mt-6">
              <p className="text-sm text-gray-600">
                Sudah punya akun?{" "}
                <Link to="/login" className="text-yellow-600 hover:text-yellow-700 font-medium">
                  Masuk di sini
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;
