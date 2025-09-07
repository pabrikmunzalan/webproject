import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Berapa lama waktu pengerjaan website?",
      answer: "Untuk paket Starter: 3-5 hari kerja. Paket Professional: 5-7 hari kerja. Paket Enterprise: 7-14 hari kerja. Kami berkomitmen menyelesaikan tepat waktu atau gratis!"
    },
    {
      question: "Apakah ada garansi untuk website yang dibuat?",
      answer: "Ya! Kami memberikan garansi 100% money back jika tidak puas dalam 7 hari pertama. Plus maintenance gratis selama 3 bulan dan free revision sampai Anda puas dengan hasilnya."
    },
    {
      question: "Apakah website bisa diakses di mobile?",
      answer: "Tentu! Semua website yang kami buat menggunakan teknologi responsive design yang otomatis menyesuaikan tampilan di desktop, tablet, dan smartphone. Mobile-first adalah prioritas kami."
    },
    {
      question: "Bagaimana cara pembayaran?",
      answer: "Pembayaran bisa dilakukan via transfer bank, e-wallet (OVO, GoPay, DANA), atau cash. Sistem pembayaran: DP 50% di awal, pelunasan 50% setelah website selesai dan Anda puas."
    },
    {
      question: "Apakah saya bisa mengelola website sendiri setelah selesai?",
      answer: "Absolutely! Kami akan memberikan panduan lengkap dan training gratis cara mengelola website Anda. Dashboard admin dibuat user-friendly khusus untuk non-teknis."
    },
    {
      question: "Apakah website sudah SEO-friendly?",
      answer: "Ya! Setiap website sudah di-optimasi untuk SEO dasar: meta tags, sitemap, loading speed, mobile optimization. Untuk SEO advance bisa konsultasi untuk paket tambahan."
    },
    {
      question: "Bagaimana jika website ada masalah setelah selesai?",
      answer: "Kami menyediakan support 24/7 via WhatsApp. Ada maintenance gratis 3 bulan pertama. Setelah itu, ada paket maintenance bulanan dengan harga terjangkau."
    },
    {
      question: "Apakah bisa request fitur custom?",
      answer: "Tentu saja! Setiap bisnis punya kebutuhan unik. Kami bisa customize fitur sesuai kebutuhan bisnis Anda. Konsultasi gratis untuk menentukan fitur yang tepat."
    },
    {
      question: "Apakah ada training penggunaan website?",
      answer: "Ya! Kami include training gratis via video call atau offline (area Jabodetabek). Plus dokumentasi lengkap dan video tutorial step-by-step."
    },
    {
      question: "Berapa biaya maintenance website per bulan?",
      answer: "Maintenance gratis 3 bulan pertama. Setelah itu mulai Rp 150K/bulan untuk paket basic maintenance (backup, security update, minor changes). Harga terjangkau untuk keamanan website Anda."
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pertanyaan <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Yang Sering Ditanyakan</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Temukan jawaban untuk pertanyaan umum seputar jasa pembuatan website kami
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-card-foreground hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Masih ada pertanyaan lain? Jangan ragu untuk bertanya!
          </p>
          <div className="inline-flex items-center gap-2 text-primary font-medium">
            💬 Chat langsung dengan tim kami di WhatsApp
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;