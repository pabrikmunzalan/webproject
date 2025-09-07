import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2, LogOut, Users, Briefcase, MessageSquare, Camera, UserCheck } from 'lucide-react';
import PortfolioAdmin from '@/components/admin/PortfolioAdmin';
import TestimonialsAdmin from '@/components/admin/TestimonialsAdmin';
import TeamAdmin from '@/components/admin/TeamAdmin';
import GalleryAdmin from '@/components/admin/GalleryAdmin';

const AdminDashboard = () => {
  const { user, isAdmin, loading, signOut } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle className="text-destructive">Akses Ditolak</CardTitle>
            <CardDescription>
              Anda tidak memiliki akses ke halaman admin.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => window.location.href = '/'} className="w-full">
              Kembali ke Beranda
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-blue-500/5">
      <header className="border-b border-border/40 backdrop-blur-sm bg-background/80">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <UserCheck className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Selamat datang, {user?.email}
            </span>
            <Button variant="outline" onClick={handleSignOut} className="gap-2">
              <LogOut className="h-4 w-4" />
              Keluar
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Kelola Konten Website
          </h2>
          <p className="text-muted-foreground">
            Anda dapat menambah, mengubah, dan menghapus konten website di sini.
          </p>
        </div>

        <Tabs defaultValue="portfolio" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8 glass shadow-elegant">
            <TabsTrigger value="portfolio" className="gap-2">
              <Briefcase className="h-4 w-4" />
              Portfolio
            </TabsTrigger>
            <TabsTrigger value="testimonials" className="gap-2">
              <MessageSquare className="h-4 w-4" />
              Testimoni
            </TabsTrigger>
            <TabsTrigger value="team" className="gap-2">
              <Users className="h-4 w-4" />
              Tim
            </TabsTrigger>
            <TabsTrigger value="gallery" className="gap-2">
              <Camera className="h-4 w-4" />
              Gallery
            </TabsTrigger>
          </TabsList>

          <TabsContent value="portfolio">
            <PortfolioAdmin />
          </TabsContent>

          <TabsContent value="testimonials">
            <TestimonialsAdmin />
          </TabsContent>

          <TabsContent value="team">
            <TeamAdmin />
          </TabsContent>

          <TabsContent value="gallery">
            <GalleryAdmin />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;