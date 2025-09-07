import { useEffect, useState } from "react";
import { Users, Globe, Award, Clock } from "lucide-react";

const StatsCounter = () => {
  const [counts, setCounts] = useState({
    websites: 0,
    clients: 0,
    satisfaction: 0,
    response: 0
  });

  const finalCounts = {
    websites: 500,
    clients: 250,
    satisfaction: 98,
    response: 2
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const intervals = 50;
    const increment = {
      websites: finalCounts.websites / intervals,
      clients: finalCounts.clients / intervals,
      satisfaction: finalCounts.satisfaction / intervals,
      response: finalCounts.response / intervals
    };

    let currentInterval = 0;
    const timer = setInterval(() => {
      if (currentInterval < intervals) {
        setCounts(prev => ({
          websites: Math.min(Math.floor(prev.websites + increment.websites), finalCounts.websites),
          clients: Math.min(Math.floor(prev.clients + increment.clients), finalCounts.clients),
          satisfaction: Math.min(Math.floor(prev.satisfaction + increment.satisfaction), finalCounts.satisfaction),
          response: Math.min(Math.floor(prev.response + increment.response), finalCounts.response)
        }));
        currentInterval++;
      } else {
        setCounts(finalCounts);
        clearInterval(timer);
      }
    }, duration / intervals);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: Globe,
      count: counts.websites,
      suffix: "+",
      label: "Website Telah Dibuat",
      color: "text-primary"
    },
    {
      icon: Users,
      count: counts.clients,
      suffix: "+",
      label: "Client Puas",
      color: "text-blue-600"
    },
    {
      icon: Award,
      count: counts.satisfaction,
      suffix: "%",
      label: "Satisfaction Rate",
      color: "text-success"
    },
    {
      icon: Clock,
      count: counts.response,
      suffix: " Jam",
      label: "Response Time",
      color: "text-orange-500"
    }
  ];

  return (
    <section className="py-16 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">
            Dipercaya Oleh <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Ratusan Bisnis</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Angka-angka yang membuktikan kualitas layanan kami
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-gradient-to-br from-primary/10 to-blue-600/10">
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-card-foreground mb-2">
                  {stat.count}{stat.suffix}
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Client Logos */}
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground mb-8">
            Dipercaya oleh berbagai jenis bisnis di Indonesia
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-muted-foreground">TOKO ABC</div>
            <div className="text-2xl font-bold text-muted-foreground">RESTO XYZ</div>
            <div className="text-2xl font-bold text-muted-foreground">KLINIK 123</div>
            <div className="text-2xl font-bold text-muted-foreground">CV MAJU</div>
            <div className="text-2xl font-bold text-muted-foreground">PT JAYA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;