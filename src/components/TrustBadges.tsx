import { Shield, Award, Clock, Headphones, RefreshCw, Star } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "100% Money Back",
      subtitle: "Garansi 7 hari",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      subtitle: "Tepat waktu atau gratis",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      subtitle: "Always ready to help",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: RefreshCw,
      title: "Free Revision",
      subtitle: "Sampai Anda puas",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: Star,
      title: "Premium Quality",
      subtitle: "Standar internasional",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Award,
      title: "Certified Team",
      subtitle: "Berpengalaman 5+ tahun",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section className="py-12 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Kenapa Memilih <span className="text-primary">WebPro?</span>
          </h3>
          <p className="text-muted-foreground">
            Jaminan kualitas dan kepuasan yang tidak akan Anda temukan di tempat lain
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 group hover:scale-105"
              >
                <div className="flex justify-center mb-3">
                  <div className={`p-3 rounded-full bg-gradient-to-br ${badge.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h4 className="font-bold text-sm text-card-foreground mb-1">
                  {badge.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {badge.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Security Badges */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-wrap justify-center items-center gap-6 opacity-60">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4" />
              SSL Secured
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Award className="h-4 w-4" />
              ISO Certified
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Star className="h-4 w-4" />
              5★ Google Reviews
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Headphones className="h-4 w-4" />
              24/7 Indonesian Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;