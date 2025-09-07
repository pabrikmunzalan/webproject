import { Check, MessageSquare, Palette, Code, TestTube, Rocket, HeadphonesIcon } from "lucide-react";

const ProcessTimeline = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Konsultasi Gratis",
      description: "Diskusi kebutuhan website dan analisis bisnis Anda",
      duration: "30 menit",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: Palette,
      title: "Design & Wireframe",
      description: "Buat mockup dan design sesuai brand identity",
      duration: "1-2 hari",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Code,
      title: "Development",
      description: "Coding website dengan teknologi terdepan",
      duration: "3-5 hari",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: TestTube,
      title: "Testing & Review",
      description: "Quality check dan revisi sampai Anda puas",
      duration: "1 hari",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Rocket,
      title: "Launch",
      description: "Website siap online dan training penggunaan",
      duration: "1 hari",
      color: "from-orange-500 to-yellow-500"
    },
    {
      icon: HeadphonesIcon,
      title: "Support 24/7",
      description: "Maintenance dan support berkelanjutan",
      duration: "Selamanya",
      color: "from-green-500 to-blue-500"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/5 via-background to-blue-500/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Proses <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Pembuatan Website</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Alur kerja yang jelas dan transparan, dari konsultasi hingga website Anda online
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-purple-500 to-blue-500 rounded-full opacity-20"></div>

          <div className="space-y-8 md:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-full bg-gradient-to-br ${step.color} text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded-full">
                              Step {index + 1}
                            </span>
                            <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                              {step.duration}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-card-foreground mb-2">
                            {step.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Dot - Hidden on mobile */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-primary to-blue-600 rounded-full border-4 border-background shadow-lg z-10"></div>

                  {/* Step Number - Mobile only */}
                  <div className="md:hidden absolute left-0 top-6 w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 bg-card border border-border rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Check className="h-5 w-5 text-green-500" />
            <span className="text-sm font-medium text-green-500">Proses Terjamin & Transparan</span>
          </div>
          <h3 className="text-2xl font-bold text-card-foreground mb-2">
            Siap Memulai Proyek Website Anda?
          </h3>
          <p className="text-muted-foreground mb-6">
            Konsultasi gratis tanpa commitment untuk menentukan solusi terbaik
          </p>
          <div className="inline-flex items-center gap-2 text-primary font-medium animate-pulse">
            💬 Chat WhatsApp untuk konsultasi gratis sekarang!
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;