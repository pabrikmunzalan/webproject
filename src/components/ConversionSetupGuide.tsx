import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle, ExternalLink, Settings, TrendingUp } from "lucide-react";

const ConversionSetupGuide = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-500/10 text-blue-700 border-blue-500/20">
            📊 CONVERSION OPTIMIZATION
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Setup <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Analytics & Tracking</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Panduan setup tracking untuk mengoptimalkan konversi dan ROI marketing Anda
          </p>
        </div>

        <div className="space-y-8">
          {/* Features Implemented */}
          <Card className="border-green-200 bg-green-50/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800">
                <CheckCircle className="h-5 w-5" />
                Fitur Konversi Yang Sudah Diimplementasi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-green-800">🎯 Lead Generation:</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>✅ Urgency Banner dengan Countdown Timer</li>
                    <li>✅ Exit Intent Popup (50% OFF)</li>
                    <li>✅ Lead Magnet (Free Downloads)</li>
                    <li>✅ Floating WhatsApp Widget</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-green-800">📈 Optimization:</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>✅ A/B Testing CTA Buttons</li>
                    <li>✅ Trust Badges & Social Proof</li>
                    <li>✅ Case Studies Detail</li>
                    <li>✅ Process Timeline</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Google Analytics Setup */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Google Analytics 4 Setup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Settings className="h-4 w-4" />
                <AlertDescription>
                  Untuk mengaktifkan tracking Google Analytics, ikuti langkah berikut:
                </AlertDescription>
              </Alert>
              
              <div className="space-y-3">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold mb-2">1. Buat Google Analytics Property</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Kunjungi Google Analytics dan buat property baru untuk website Anda
                  </p>
                  <a 
                    href="https://analytics.google.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm"
                  >
                    Buka Google Analytics <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">2. Dapatkan Tracking ID</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Salin Measurement ID Anda (format: G-XXXXXXXXXX)
                  </p>
                  <div className="bg-white p-2 rounded border font-mono text-sm">
                    G-XXXXXXXXXX
                  </div>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold mb-2">3. Update Kode</h4>
                  <p className="text-sm text-muted-foreground">
                    Ganti "G-XXXXXXXXXX" di file <code className="bg-white px-1 rounded">AnalyticsTracker.tsx</code> dengan ID Anda
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Facebook Pixel Setup */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-5 h-5 bg-blue-600 rounded"></div>
                Facebook Pixel Setup
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <Settings className="h-4 w-4" />
                <AlertDescription>
                  Untuk retargeting dan conversion tracking Facebook/Instagram Ads:
                </AlertDescription>
              </Alert>
              
              <div className="space-y-3">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold mb-2">1. Buat Facebook Pixel</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Buat pixel di Facebook Business Manager
                  </p>
                  <a 
                    href="https://business.facebook.com/events_manager2/list" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm"
                  >
                    Buka Events Manager <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">2. Dapatkan Pixel ID</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Salin Pixel ID Anda (format angka 15-16 digit)
                  </p>
                  <div className="bg-white p-2 rounded border font-mono text-sm">
                    XXXXXXXXXXXXXXXXX
                  </div>
                </div>

                <div className="p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold mb-2">3. Update Kode</h4>
                  <p className="text-sm text-muted-foreground">
                    Ganti "XXXXXXXXXXXXXXXXX" di file <code className="bg-white px-1 rounded">AnalyticsTracker.tsx</code> dengan Pixel ID Anda
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conversion Events */}
          <Card className="border-purple-200 bg-purple-50/50">
            <CardHeader>
              <CardTitle className="text-purple-800">📊 Events Yang Dilacak</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-purple-800">Lead Generation:</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• WhatsApp Click (Lead)</li>
                    <li>• Email Download (Lead)</li>
                    <li>• Exit Intent Popup (Lead)</li>
                    <li>• Price Calculator Use</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-purple-800">Engagement:</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Page Views</li>
                    <li>• CTA Button Clicks</li>
                    <li>• Video Demo Clicks</li>
                    <li>• Portfolio Views</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertDescription>
              <strong>Selanjutnya:</strong> Setelah setup tracking, Anda bisa menjalankan Facebook/Google Ads dengan retargeting pixel untuk meningkatkan konversi hingga 3x lipat!
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  );
};

export default ConversionSetupGuide;