import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, ArrowRight } from "lucide-react";

const PriceCalculator = () => {
  const [websiteType, setWebsiteType] = useState("");
  const [pages, setPages] = useState("");
  const [features, setFeatures] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const basePrice = {
    landing: 800000,
    company: 1200000,
    ecommerce: 2500000,
    custom: 1500000
  };

  const pagePrice = {
    "1-5": 0,
    "6-10": 300000,
    "11-20": 600000,
    "20+": 1000000
  };

  const featurePrice = {
    seo: 200000,
    ecommerce: 800000,
    booking: 400000,
    blog: 300000,
    multilang: 500000,
    analytics: 150000,
    crm: 600000,
    payment: 400000
  };

  const calculatePrice = () => {
    if (!websiteType || !pages) return;

    let price = basePrice[websiteType as keyof typeof basePrice] || 0;
    price += pagePrice[pages as keyof typeof pagePrice] || 0;
    
    features.forEach(feature => {
      price += featurePrice[feature as keyof typeof featurePrice] || 0;
    });

    setTotalPrice(price);
  };

  const handleFeatureChange = (featureId: string, checked: boolean) => {
    if (checked) {
      setFeatures([...features, featureId]);
    } else {
      setFeatures(features.filter(f => f !== featureId));
    }
  };

  const handleWhatsAppQuote = () => {
    const message = `Halo! Saya tertarik dengan website ${websiteType} dengan ${pages} halaman. Fitur yang saya inginkan: ${features.join(', ')}. Estimasi harga: Rp ${totalPrice.toLocaleString('id-ID')}. Bisa berikan penawaran detail?`;
    const whatsappUrl = `https://wa.me/6282241590417?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/5 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Kalkulator <span className="text-primary">Harga Website</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dapatkan estimasi harga website sesuai kebutuhan Anda dalam hitungan detik
          </p>
        </div>

        <Card className="glass shadow-elegant animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2 text-2xl">
              <Calculator className="h-6 w-6 text-primary" />
              Hitung Estimasi Harga
            </CardTitle>
          </CardHeader>
          
          <CardContent className="space-y-8">
            {/* Website Type */}
            <div className="space-y-3">
              <Label className="text-lg font-semibold">Tipe Website</Label>
              <Select value={websiteType} onValueChange={setWebsiteType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih tipe website" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="landing">Landing Page (Rp 800.000)</SelectItem>
                  <SelectItem value="company">Company Profile (Rp 1.200.000)</SelectItem>
                  <SelectItem value="custom">Website Custom (Rp 1.500.000)</SelectItem>
                  <SelectItem value="ecommerce">E-Commerce (Rp 2.500.000)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Number of Pages */}
            <div className="space-y-3">
              <Label className="text-lg font-semibold">Jumlah Halaman</Label>
              <Select value={pages} onValueChange={setPages}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Pilih jumlah halaman" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-5">1-5 Halaman (Gratis)</SelectItem>
                  <SelectItem value="6-10">6-10 Halaman (+Rp 300.000)</SelectItem>
                  <SelectItem value="11-20">11-20 Halaman (+Rp 600.000)</SelectItem>
                  <SelectItem value="20+">20+ Halaman (+Rp 1.000.000)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Additional Features */}
            <div className="space-y-4">
              <Label className="text-lg font-semibold">Fitur Tambahan</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { id: 'seo', label: 'SEO Optimization', price: 200000 },
                  { id: 'ecommerce', label: 'Sistem E-Commerce', price: 800000 },
                  { id: 'booking', label: 'Sistem Booking', price: 400000 },
                  { id: 'blog', label: 'Blog System', price: 300000 },
                  { id: 'multilang', label: 'Multi Language', price: 500000 },
                  { id: 'analytics', label: 'Analytics Integration', price: 150000 },
                  { id: 'crm', label: 'CRM Integration', price: 600000 },
                  { id: 'payment', label: 'Payment Gateway', price: 400000 }
                ].map((feature) => (
                  <div key={feature.id} className="flex items-center space-x-3 p-3 rounded-lg glass">
                    <Checkbox
                      id={feature.id}
                      checked={features.includes(feature.id)}
                      onCheckedChange={(checked) => handleFeatureChange(feature.id, !!checked)}
                    />
                    <Label htmlFor={feature.id} className="flex-1 text-sm">
                      {feature.label}
                      <span className="text-primary font-semibold ml-2">
                        +Rp {feature.price.toLocaleString('id-ID')}
                      </span>
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            {/* Calculate Button */}
            <Button 
              onClick={calculatePrice}
              className="w-full py-6 text-lg bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-glow transition-all duration-300 hover:scale-105"
              disabled={!websiteType || !pages}
            >
              Hitung Estimasi Harga
            </Button>

            {/* Price Display */}
            {totalPrice > 0 && (
              <div className="text-center p-8 glass rounded-xl animate-scale-in">
                <h3 className="text-2xl font-bold text-foreground mb-4">Estimasi Harga Total</h3>
                <div className="text-5xl font-bold text-primary mb-6">
                  Rp {totalPrice.toLocaleString('id-ID')}
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    * Harga sudah termasuk domain gratis dan hosting 1 tahun
                  </p>
                  <Button 
                    onClick={handleWhatsAppQuote}
                    size="lg"
                    className="bg-gradient-to-r from-success to-success/90 hover:from-success/90 hover:to-success/80 text-success-foreground shadow-glow px-8 py-4"
                  >
                    Dapatkan Penawaran Detail
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PriceCalculator;