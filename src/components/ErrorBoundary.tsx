import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, RefreshCcw, Home, MessageCircle } from 'lucide-react';
import { CONTACT_CONFIG } from '@/config/contact';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorInfo: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
    
    this.setState({
      error,
      errorInfo
    });
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = '/';
  };

  private handleContactSupport = () => {
    const errorMessage = this.state.error?.message || 'Unknown error';
    const message = `Halo! Saya mengalami error di website: "${errorMessage}". Mohon bantuannya.`;
    const whatsappUrl = CONTACT_CONFIG.whatsapp.createUrl(message);
    window.open(whatsappUrl, '_blank');
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-primary/5">
          <div className="absolute inset-0 bg-[linear-gradient(hsl(262.1_83.3%_57.8%_/_0.05)_1px,transparent_1px),linear-gradient(90deg,hsl(262.1_83.3%_57.8%_/_0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
          
          <Card className="w-full max-w-2xl glass shadow-elegant relative">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center">
                <AlertTriangle className="h-8 w-8 text-destructive animate-pulse" />
              </div>
              
              <CardTitle className="text-2xl md:text-3xl font-bold">
                Oops! Terjadi Kesalahan
              </CardTitle>
              
              <CardDescription className="text-base">
                Mohon maaf, terjadi error yang tidak terduga. Tim kami akan segera memperbaikinya.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Error Details (only in development) */}
              {import.meta.env.DEV && this.state.error && (
                <div className="p-4 bg-destructive/5 border border-destructive/20 rounded-lg">
                  <p className="text-sm font-mono text-destructive break-words">
                    {this.state.error.toString()}
                  </p>
                  {this.state.errorInfo && (
                    <details className="mt-2">
                      <summary className="text-xs text-muted-foreground cursor-pointer hover:text-foreground">
                        Stack Trace
                      </summary>
                      <pre className="mt-2 text-xs text-muted-foreground overflow-auto max-h-40">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </details>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={this.handleReset}
                  className="flex-1 bg-gradient-to-r from-primary to-primary-glow hover:from-primary/90 hover:to-primary-glow/90"
                  size="lg"
                >
                  <Home className="mr-2 h-5 w-5" />
                  Kembali ke Beranda
                </Button>
                
                <Button 
                  onClick={() => window.location.reload()}
                  variant="outline"
                  className="flex-1"
                  size="lg"
                >
                  <RefreshCcw className="mr-2 h-5 w-5" />
                  Muat Ulang Halaman
                </Button>
              </div>

              {/* Contact Support */}
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground text-center mb-3">
                  Masalah masih berlanjut? Hubungi tim support kami
                </p>
                <Button 
                  onClick={this.handleContactSupport}
                  variant="outline"
                  className="w-full border-green-500/30 text-green-600 hover:bg-green-500/10 hover:border-green-500/50"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Hubungi Support via WhatsApp
                </Button>
              </div>

              {/* Additional Info */}
              <div className="text-center">
                <p className="text-xs text-muted-foreground">
                  Error ID: {Date.now().toString(36).toUpperCase()}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
