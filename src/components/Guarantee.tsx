import { Shield, RefreshCw, Headphones, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const Guarantee = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "100% Money Back Guarantee",
      description: "Tidak puas dalam 7 hari pertama? Uang kembali 100%! Tidak ada pertanyaan, tidak ada ribet.",
      color: "text-green-600"
    },
    {
      icon: RefreshCw,
      title: "Free Revision Unlimited",
      description: "Revisi gratis sampai Anda benar-benar puas dengan hasilnya. Kepuasan Anda adalah prioritas utama kami.",
      color: "text-blue-600"
    },
    {
      icon: Headphones,
      title: "Support 24/7",
      description: "Tim support kami siap membantu kapan saja via WhatsApp. Response time maksimal 2 jam.",
      color: "text-purple-600"
    },
    {
      icon: Award,
      title: "Maintenance Gratis 3 Bulan",
      description: "Update, backup, dan maintenance website gratis selama 3 bulan pertama. Website selalu aman dan up-to-date.",
      color: "text-orange-600"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-blue-600/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Jaminan <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">100% Tanpa Risiko</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami sangat percaya diri dengan kualitas layanan kami. Makanya kami berani berikan jaminan ini:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border bg-card">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-full bg-gradient-to-br from-primary/10 to-blue-600/10">
                      <Icon className={`h-6 w-6 ${guarantee.color}`} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground text-lg mb-2">
                      {guarantee.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {guarantee.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Trust Badge */}
        <div className="bg-card border border-border rounded-lg p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              ✅ TRUSTED BY 500+ BUSINESSES
            </div>
          </div>
          <h3 className="text-xl font-bold text-card-foreground mb-2">
            Kenapa Kami Berani Berikan Jaminan Ini?
          </h3>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Dalam 5+ tahun pengalaman, tingkat kepuasan client kami mencapai 98%. 
            Hanya 2% client yang minta revisi major, dan tidak ada yang minta refund. 
            Kami yakin Anda akan puas dengan hasil kerja kami!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;