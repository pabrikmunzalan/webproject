import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { blogPosts } from "@/data/blog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Calendar, Clock, ArrowLeft, Share2, BookOpen } from "lucide-react";
import { CONTACT_CONFIG, openWhatsApp } from "@/config/contact";

const BlogDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center pt-16">
          <div className="text-center space-y-4 p-8">
            <h1 className="text-4xl font-bold text-foreground">Artikel Tidak Ditemukan</h1>
            <p className="text-muted-foreground">Maaf, artikel yang Anda cari tidak tersedia.</p>
            <Button onClick={() => navigate("/blog")} variant="default">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Kembali ke Blog
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const handleShare = async () => {
    const url = window.location.href;
    const text = `${post.title} - ${post.excerpt}`;

    if (navigator.share) {
      try {
        await navigator.share({ title: post.title, text, url });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      navigator.clipboard.writeText(url);
      alert("Link berhasil disalin!");
    }
  };

  const handleConsultation = () => {
    openWhatsApp(CONTACT_CONFIG.messages.blogInquiry);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <article className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate("/blog")}
            className="mb-8 hover:bg-secondary"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Blog
          </Button>

          {/* Header */}
          <header className="mb-8 space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <Badge variant="secondary" className="text-base px-4 py-1">
                {post.category}
              </Badge>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author & Share */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">Author</p>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-elegant">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none mb-12">
            <div 
              className="text-foreground leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }}
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12 pb-12 border-b border-border">
            {post.tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="px-3 py-1">
                #{tag}
              </Badge>
            ))}
          </div>

          {/* CTA Card */}
          <Card className="glass shadow-elegant mb-12">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="p-4 rounded-full bg-primary/10">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Butuh Website Professional?
                  </h3>
                  <p className="text-muted-foreground">
                    Konsultasikan kebutuhan website bisnis Anda dengan tim expert kami. Gratis!
                  </p>
                </div>
                <Button
                  size="lg"
                  onClick={handleConsultation}
                  className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-glow"
                >
                  Konsultasi Gratis
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                Artikel Terkait
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <Card className="glass shadow-elegant hover:shadow-glow transition-all duration-300 overflow-hidden h-full">
                      <div className="relative overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <Badge
                          variant="secondary"
                          className="absolute top-4 left-4 bg-white/90"
                        >
                          {relatedPost.category}
                        </Badge>
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                          {relatedPost.title}
                        </h3>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {relatedPost.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {relatedPost.readTime}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default BlogDetailPage;
