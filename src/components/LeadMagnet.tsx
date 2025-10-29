import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, CheckCircle, Users, Star, Gift, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { CONTACT_CONFIG } from "@/config/contact";

const LeadMagnet = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  // Show only the most popular lead magnet
  const mainMagnet = {
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
  };

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

  const handleDownload = () => {
    if (!email || !name) {
      toast.error("Mohon isi nama dan email untuk download");
      return;
    }

    const message = `Halo! Nama saya ${name}. Email: ${email}. Saya ingin download "${mainMagnet.title}". Terima kasih!`;
    const whatsappUrl = CONTACT_CONFIG.whatsapp.createUrl(message);
    
    toast.success("Link download akan dikirim ke WhatsApp Anda!");
    window.open(whatsappUrl, '_blank');
    
    setEmail("");
    setName("");
    setIsFormOpen(false);
  };

  const handleMoreResources = () => {
    const whatsappUrl = CONTACT_CONFIG.whatsapp.createUrl(CONTACT_CONFIG.messages.resourceInquiry);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-blue-500/5">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-500/10 text-green-700 border-green-500/20">
            🎁 FREE DOWNLOAD
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Resource <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Gratis</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Download panduan untuk mengembangkan bisnis online Anda
          </p>
        </div>

        {/* Main Featured Magnet */}
        <Card className="glass shadow-elegant hover:shadow-glow transition-all duration-300 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-8 flex flex-col justify-center">
              <div className="space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-primary to-blue-600 text-white">
                    <FileText className="h-6 w-6" />
                  </div>
                  <Badge className="bg-green-500/10 text-green-700 border-green-500/20">
                    {mainMagnet.type} • {mainMagnet.pages}
                  </Badge>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground">
                  {mainMagnet.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {mainMagnet.description}
                </p>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-medium">{mainMagnet.rating}/5</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Download className="h-4 w-4 text-green-600" />
                    <span className="text-green-600 font-medium">{mainMagnet.downloads} downloads</span>
                  </div>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg">
                  <p className="text-sm text-primary font-medium">
                    {mainMagnet.preview}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 p-8 flex flex-col justify-center">
              <h4 className="font-semibold text-foreground mb-4">Yang akan Anda dapatkan:</h4>
              <ul className="space-y-3 mb-6">
                {mainMagnet.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {!isFormOpen ? (
                <Button 
                  onClick={() => setIsFormOpen(true)}
                  size="lg"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Gratis Sekarang
                </Button>
              ) : (
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Masukkan nama lengkap"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@contoh.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <Button 
                    onClick={handleDownload}
                    size="lg"
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                    disabled={!email || !name}
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Sekarang
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Link akan dikirim via WhatsApp
                  </p>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* More Resources Link */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            Butuh resource atau panduan lainnya?
          </p>
          <Button 
            onClick={handleMoreResources}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Lihat Resource Lainnya
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;