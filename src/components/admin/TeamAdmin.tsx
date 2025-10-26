import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Linkedin, Github, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ImageUpload from '@/components/admin/ImageUpload';

interface Team {
  id: string;
  name: string;
  position: string;
  bio: string | null;
  avatar_url: string | null;
  linkedin_url: string | null;
  github_url: string | null;
  created_at: string;
}

const TeamAdmin = () => {
  const [team, setTeam] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Team | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    bio: '',
    avatar_url: '',
    linkedin_url: '',
    github_url: ''
  });
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const { data, error } = await supabase
        .from('team')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTeam(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      if (editingItem) {
        const { error } = await supabase
          .from('team')
          .update(formData)
          .eq('id', editingItem.id);

        if (error) throw error;
        toast({ title: "Anggota tim berhasil diperbarui" });
      } else {
        const { error } = await supabase
          .from('team')
          .insert(formData);

        if (error) throw error;
        toast({ title: "Anggota tim berhasil ditambahkan" });
      }

      setIsDialogOpen(false);
      setEditingItem(null);
      setFormData({ name: '', position: '', bio: '', avatar_url: '', linkedin_url: '', github_url: '' });
      fetchTeam();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleEdit = (item: Team) => {
    setEditingItem(item);
    setFormData({
      name: item.name,
      position: item.position,
      bio: item.bio || '',
      avatar_url: item.avatar_url || '',
      linkedin_url: item.linkedin_url || '',
      github_url: item.github_url || ''
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Apakah Anda yakin ingin menghapus anggota tim ini?')) return;

    try {
      const { error } = await supabase
        .from('team')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({ title: "Anggota tim berhasil dihapus" });
      fetchTeam();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const resetForm = () => {
    setEditingItem(null);
    setFormData({ name: '', position: '', bio: '', avatar_url: '', linkedin_url: '', github_url: '' });
    setError(null);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Kelola Tim</h3>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Tambah Anggota Tim
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingItem ? 'Edit Anggota Tim' : 'Tambah Anggota Tim Baru'}
              </DialogTitle>
              <DialogDescription>
                {editingItem ? 'Perbarui informasi anggota tim' : 'Tambahkan anggota tim baru ke website'}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="position">Posisi</Label>
                  <Input
                    id="position"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  rows={3}
                />
              </div>

              <ImageUpload
                bucket="team-avatars"
                currentImage={formData.avatar_url}
                onImageUploaded={(url) => setFormData({ ...formData, avatar_url: url })}
                label="Foto Profil"
              />

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="linkedin_url">LinkedIn URL (Opsional)</Label>
                  <Input
                    id="linkedin_url"
                    type="url"
                    value={formData.linkedin_url}
                    onChange={(e) => setFormData({ ...formData, linkedin_url: e.target.value })}
                    placeholder="https://linkedin.com/in/username"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="github_url">GitHub URL (Opsional)</Label>
                  <Input
                    id="github_url"
                    type="url"
                    value={formData.github_url}
                    onChange={(e) => setFormData({ ...formData, github_url: e.target.value })}
                    placeholder="https://github.com/username"
                  />
                </div>
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="flex justify-end gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Batal
                </Button>
                <Button type="submit">
                  {editingItem ? 'Perbarui' : 'Tambah'}
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {team.map((item) => (
          <Card key={item.id} className="glass shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardHeader className="text-center">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src={item.avatar_url || undefined} />
                <AvatarFallback className="text-xl">
                  {item.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <CardTitle className="text-lg">{item.name}</CardTitle>
              <CardDescription>
                <Badge variant="secondary">{item.position}</Badge>
              </CardDescription>
            </CardHeader>
            <CardContent>
              {item.bio && (
                <p className="text-sm text-muted-foreground mb-4 text-center">
                  {item.bio}
                </p>
              )}
              
              <div className="flex justify-center gap-2 mb-4">
                {item.linkedin_url && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(item.linkedin_url!, '_blank')}
                    className="gap-1"
                  >
                    <Linkedin className="h-3 w-3" />
                  </Button>
                )}
                {item.github_url && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open(item.github_url!, '_blank')}
                    className="gap-1"
                  >
                    <Github className="h-3 w-3" />
                  </Button>
                )}
              </div>

              <div className="flex justify-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleEdit(item)}
                  className="gap-1"
                >
                  <Edit className="h-3 w-3" />
                  Edit
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleDelete(item.id)}
                  className="gap-1 text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-3 w-3" />
                  Hapus
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {team.length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-muted-foreground">Belum ada anggota tim. Tambahkan yang pertama!</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TeamAdmin;