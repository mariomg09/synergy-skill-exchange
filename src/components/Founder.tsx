import { Card, CardContent } from "@/components/ui/card";
import { Users, Search, MessageSquare, Calendar } from "lucide-react";

const founders = [
    {
        id: 1,
        name: "Christopher Satya Fredella Balakosa",
        npm: "2206059755",
        role: "giFounder",
        image: "/founders/1.jpg" // Pastikan file ada di public/founders/
    },
    {
        id: 2,
        name: "Farhan Nuzul Noufendri",
        npm: "2206024044",
        role: "Co-Founder",
        image: "/founders/2.jpg"
    },
    {
        id: 3,
        name: "Mario Matthews Gunawan",
        npm: "2206810452",
        role: "Co-Founder",
        image: "/founders/3.jpg"
    }
];

const Founder = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Meet Our <span className="bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent">Founders</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        The brilliant minds behind Skillswap UI
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {founders.map((founder) => (
                        <div key={founder.id} className="flex justify-center">
                            <Card className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 w-full max-w-xs">
                                <CardContent className="p-6">
                                    <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-yellow-500">
                                        {/* Menggunakan img biasa untuk Vite */}
                                        <img
                                            src={founder.image}
                                            alt={founder.name}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-xl font-semibold text-gray-800 mb-1">{founder.name}</h3>
                                        <p className="text-sm text-gray-500 mb-2">NPM: {founder.npm}</p>
                                        <p className="text-yellow-600 font-medium">{founder.role}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Founder;