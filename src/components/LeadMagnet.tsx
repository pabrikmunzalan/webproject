import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, CheckCircle, Users, Star, Gift, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const LeadMagnet = () => {
  const [selectedMagnet, setSelectedMagnet] = useState<number | null>(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const leadMagnets = [
    {
      id: 1,
      title: "Panduan Lengkap: Cara Meningkatkan Penjualan Online 300%",
      description: "E-book 25 halaman berisi strategi terbukti untuk meningkatkan conversion rate, traffic, dan penjualan online bisnis Anda.",
      type: "E-Book",
      pages: "25 halaman",
      downloads: "1,247",
      rating: "4.9",
      icon: FileText,
      benefits: [
        "7 strategi marketing digital yang terbukti efektif",
        "Template email marketing siap pakai",
        "Checklist SEO untuk pemula", 
        "Case study bisnis yang berhasil"
      ],
      preview: "📈 Dapatkan framework yang sama yang digunakan klien kami untuk meningkatkan penjualan hingga 300% dalam 3 bulan!"
    },
    {
      id: 2,
      title: "Template Website Bisnis Siap Pakai + Panduan Setup",
      description: "Kumpulan template website profesional untuk berbagai jenis bisnis, lengkap dengan panduan instalasi step-by-step.",
      type: "Template Pack",
      pages: "10 template",
      downloads: "856",
      rating: "4.8",
      icon: Gift,
      benefits: [
        "10 template website premium senilai Rp 500.000",
        "Panduan setup hosting & domain",
        "Video tutorial instalasi",
        "Source code HTML/CSS lengkap"
      ],
      preview: "🎨 Template yang sama digunakan klien premium kami, sekarang bisa Anda dapatkan GRATIS!"
    },
    {
      id: 3,
      title: "Cheat Sheet: 50 Tools Marketing Digital Gratis",
      description: "Daftar lengkap tools marketing digital gratis yang digunakan para profesional untuk mengelola bisnis online mereka.",
      type: "Cheat Sheet",
      pages: "12 halaman", 
      downloads: "2,134",
      rating: "5.0",
      icon: CheckCircle,
      benefits: [
        "50+ tools marketing digital gratis terbaik",
        "Review dan rating setiap tools",
        "Tutorial penggunaan singkat",
        "Kategori berdasarkan fungsi (SEO, Social Media, Analytics, dll)"
      ],
      preview: "🔧 Tools senilai jutaan rupiah yang bisa Anda gunakan gratis untuk mengembangkan bisnis!"
    }
  ];

  const handleDownload = (magnet: any) => {
    if (!email || !name) {
      toast.error("Mohon isi nama dan email untuk download");
      return;
    }

    // Simulate download
    const message = `Halo! Nama saya ${name}. Email: ${email}. Saya ingin download "${magnet.title}". Terima kasih!`;
    const whatsappUrl = `https://wa.me/6282241590417?text=${encodeURIComponent(message)}`;
    
    toast.success("Link download akan dikirim ke WhatsApp Anda!");
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setEmail("");
    setName("");
    setSelectedMagnet(null);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-blue-500/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-500/10 text-green-700 border-green-500/20">
            🎁 FREE DOWNLOAD
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Resource <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Gratis</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download panduan, template, dan tools yang akan membantu mengembangkan bisnis online Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {leadMagnets.map((magnet, index) => {
            const Icon = magnet.icon;
            return (
              <Card 
                key={magnet.id}
                className={`hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                  selectedMagnet === magnet.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedMagnet(selectedMagnet === magnet.id ? null : magnet.id)}
              >
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="p-3 rounded-full bg-gradient-to-br from-primary/10 to-blue-500/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2">{magnet.type}</Badge>
                      <CardTitle className="text-lg leading-tight">{magnet.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {magnet.description}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">📄 {magnet.pages}</span>
                      <div className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-medium">{magnet.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Download className="h-4 w-4 text-green-600" />
                        <span className="text-green-600 font-medium">{magnet.downloads} downloads</span>
                      </div>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        FREE
                      </Badge>
                    </div>
                  </div>

                  <div className="p-3 bg-primary/5 rounded-lg mb-4">
                    <p className="text-sm text-primary font-medium">
                      {magnet.preview}
                    </p>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                  >
                    {selectedMagnet === magnet.id ? 'Tutup Detail' : 'Lihat Detail & Download'}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Download Form */}
        {selectedMagnet && (
          <Card className="animate-scale-in border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              {(() => {
                const magnet = leadMagnets.find(m => m.id === selectedMagnet)!;
                const Icon = magnet.icon;
                return (
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        <div className="p-4 rounded-full bg-gradient-to-br from-primary to-blue-600 text-white">
                          <Icon className="h-8 w-8" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {magnet.title}
                      </h3>
                      <p className="text-muted-foreground">
                        Isi data di bawah untuk mendapatkan akses download gratis
                      </p>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-6">
                      <h4 className="font-semibold text-foreground mb-3">Yang akan Anda dapatkan:</h4>
                      <ul className="space-y-2">
                        {magnet.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name">Nama Lengkap</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Masukkan nama lengkap Anda"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="masukkan@email.anda"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <Button 
                      onClick={() => handleDownload(magnet)}
                      size="lg"
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                      disabled={!email || !name}
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Download Gratis Sekarang
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      * Download link akan dikirim via WhatsApp. Kami tidak akan spam email Anda.
                    </p>
                  </div>
                );
              })()}
            </CardContent>
          </Card>
        )}

        {/* Social Proof */}
        <div className="text-center mt-16">
          <div className="flex items-center justify-center gap-8 mb-6 flex-wrap">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                <span className="font-bold text-primary">4,237+</span> entrepreneurs sudah download
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
              <span className="text-sm text-muted-foreground">
                <span className="font-bold text-primary">4.9/5</span> rating rata-rata
              </span>
            </div>
          </div>
          <p className="text-muted-foreground">
            Join ribuan entrepreneur yang sudah merasakan manfaatnya!
          </p>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;