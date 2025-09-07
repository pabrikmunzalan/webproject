import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Linkedin, Mail, Award, Code, Palette, Zap } from "lucide-react";

const Team = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "6282241590417";
    const message = "Halo! Saya ingin konsultasi dengan tim WebStudio Pro tentang project website saya.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const teamMembers = [
    {
      name: "Dimas Pratama",
      role: "Founder & Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      expertise: ["React", "Node.js", "DevOps"],
      experience: "7+ tahun",
      projects: "200+",
      description: "Expert dalam full-stack development dengan fokus pada performa dan skalabilitas website.",
      achievements: ["AWS Certified", "Google Developer Expert", "React Specialist"]
    },
    {
      name: "Sari Wulandari", 
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b605?w=300&h=300&fit=crop&crop=face",
      expertise: ["Figma", "Adobe Creative", "User Research"],
      experience: "5+ tahun",
      projects: "150+",
      description: "Spesialis design yang mengutamakan user experience dan conversion optimization.",
      achievements: ["Adobe Certified Expert", "UX Design Award Winner", "Design Thinking Specialist"]
    },
    {
      name: "Arif Rahman",
      role: "SEO & Marketing Specialist", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      expertise: ["SEO", "Google Ads", "Analytics"],
      experience: "6+ tahun",
      projects: "300+",
      description: "Ahli dalam meningkatkan visibility website di mesin pencari dan digital marketing.",
      achievements: ["Google Ads Certified", "SEO Expert", "Analytics Professional"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Tim <span className="text-primary">Professional</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kenali tim ahli yang akan mengembangkan website Anda dengan dedikasi dan keahlian tinggi
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <Card className="glass shadow-elegant text-center p-6 hover:shadow-glow transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Award className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-primary mb-2">15+</h3>
            <p className="text-muted-foreground">Tahun Pengalaman Gabungan</p>
          </Card>

          <Card className="glass shadow-elegant text-center p-6 hover:shadow-glow transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-full bg-success/10">
                <Code className="h-8 w-8 text-success" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-success mb-2">500+</h3>
            <p className="text-muted-foreground">Website Telah Dibuat</p>
          </Card>

          <Card className="glass shadow-elegant text-center p-6 hover:shadow-glow transition-all duration-300">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-full bg-blue-500/10">
                <Zap className="h-8 w-8 text-blue-500" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-blue-500 mb-2">98%</h3>
            <p className="text-muted-foreground">Kepuasan Klien</p>
          </Card>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="glass shadow-elegant hover:shadow-glow transition-all duration-300 transform hover:scale-105 animate-fade-up overflow-hidden"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="relative">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm opacity-90">{member.role}</p>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 py-4 border-y border-border/50">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{member.experience}</div>
                    <div className="text-xs text-muted-foreground">Pengalaman</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-success">{member.projects}</div>
                    <div className="text-xs text-muted-foreground">Project</div>
                  </div>
                </div>

                {/* Expertise */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Keahlian:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm">Sertifikasi:</h4>
                  <div className="space-y-1">
                    {member.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Award className="h-3 w-3 text-primary" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact buttons */}
                <div className="flex gap-2 pt-4">
                  <Button size="sm" variant="outline" className="flex-1">
                    <Mail className="h-3 w-3 mr-1" />
                    Email
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    <Linkedin className="h-3 w-3 mr-1" />
                    LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <Card className="glass shadow-elegant p-8 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-center mb-4">
                <div className="p-4 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20">
                  <Palette className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Siap Bekerja Sama dengan Tim Professional?
              </h3>
              <p className="text-muted-foreground">
                Tim berpengalaman kami siap membantu mewujudkan website impian Anda dengan hasil yang maksimal
              </p>
              <Button 
                onClick={handleWhatsAppClick}
                size="lg"
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-primary-foreground px-8 py-4 shadow-glow hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                Konsultasi dengan Tim Kami
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Team;