import { useState, useEffect, useMemo } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ImageUpload from '@/components/admin/ImageUpload';
import BulkActions from '@/components/admin/BulkActions';
import SearchFilterBar from '@/components/admin/SearchFilterBar';

interface Testimonial {
  id: string;
  client_name: string;
  client_position: string | null;
  client_company: string | null;
  content: string;
  rating: number;
  avatar_url: string | null;
  published: boolean;
  created_at: string;
}

const TestimonialsAdmin = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Testimonial | null>(null);
  const [formData, setFormData] = useState({
    client_name: '',
    client_position: '',
    client_company: '',
    content: '',
    rating: 5,
    avatar_url: '',
    published: true
  });
  const [error, setError] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const { toast } = useToast();

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTestimonials(data || []);
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
          .from('testimonials')
          .update(formData)
          .eq('id', editingItem.id);

        if (error) throw error;
        toast({ title: "Testimoni berhasil diperbarui" });
      } else {
        const { error } = await supabase
          .from('testimonials')
          .insert(formData);

        if (error) throw error;
        toast({ title: "Testimoni berhasil ditambahkan" });
      }

      setIsDialogOpen(false);
      setEditingItem(null);
      setFormData({ client_name: '', client_position: '', client_company: '', content: '', rating: 5, avatar_url: '', published: true });
      fetchTestimonials();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleEdit = (item: Testimonial) => {
    setEditingItem(item);
    setFormData({
      client_name: item.client_name,
      client_position: item.client_position || '',
      client_company: item.client_company || '',
      content: item.content,
      rating: item.rating,
      avatar_url: item.avatar_url || '',
      published: item.published
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Apakah Anda yakin ingin menghapus testimoni ini?')) return;

    try {
      const { error } = await supabase
        .from('testimonials')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({ title: "Testimoni berhasil dihapus" });
      fetchTestimonials();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const resetForm = () => {
    setEditingItem(null);
    setFormData({ client_name: '', client_position: '', client_company: '', content: '', rating: 5, avatar_url: '', published: true });
    setError(null);
  };

  const handleBulkDelete = async () => {
    try {
      const { error } = await supabase
        .from('testimonials')
        .delete()
        .in('id', selectedIds);

      if (error) throw error;
      toast({ title: `${selectedIds.length} item berhasil dihapus` });
      setSelectedIds([]);
      fetchTestimonials();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleBulkPublish = async () => {
    try {
      const { error } = await supabase
        .from('testimonials')
        .update({ published: true })
        .in('id', selectedIds);

      if (error) throw error;
      toast({ title: `${selectedIds.length} item berhasil dipublish` });
      setSelectedIds([]);
      fetchTestimonials();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleBulkUnpublish = async () => {
    try {
      const { error } = await supabase
        .from('testimonials')
        .update({ published: false })
        .in('id', selectedIds);

      if (error) throw error;
      toast({ title: `${selectedIds.length} item berhasil di-draft` });
      setSelectedIds([]);
      fetchTestimonials();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredTestimonials.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredTestimonials.map(item => item.id));
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const filteredTestimonials = useMemo(() => {
    return testimonials.filter(item => {
      const matchesSearch = searchQuery === '' || 
        item.client_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.client_company?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
      
      const matchesStatus = statusFilter === 'all' || 
        (statusFilter === 'published' && item.published) ||
        (statusFilter === 'draft' && !item.published);
      
      return matchesSearch && matchesStatus;
    }).sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        case 'oldest':
          return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        case 'title':
          return a.client_name.localeCompare(b.client_name);
        case 'title-desc':
          return b.client_name.localeCompare(a.client_name);
        default:
          return 0;
      }
    });
  }, [testimonials, searchQuery, statusFilter, sortBy]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}
      />
    ));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Kelola Testimoni</h3>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Tambah Testimoni
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingItem ? 'Edit Testimoni' : 'Tambah Testimoni Baru'}
              </DialogTitle>
              <DialogDescription>
                {editingItem ? 'Perbarui informasi testimoni' : 'Tambahkan testimoni baru ke website'}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="client_name">Nama Klien</Label>
                  <Input
                    id="client_name"
                    value={formData.client_name}
                    onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="client_position">Posisi</Label>
                  <Input
                    id="client_position"
                    value={formData.client_position}
                    onChange={(e) => setFormData({ ...formData, client_position: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="client_company">Perusahaan</Label>
                  <Input
                    id="client_company"
                    value={formData.client_company}
                    onChange={(e) => setFormData({ ...formData, client_company: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="rating">Rating</Label>
                  <Select value={formData.rating.toString()} onValueChange={(value) => setFormData({ ...formData, rating: parseInt(value) })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          <div className="flex items-center gap-2">
                            <span>{num}</span>
                            <div className="flex">
                              {renderStars(num)}
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content">Testimoni</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={4}
                  required
                />
              </div>

              <ImageUpload
                bucket="testimonial-avatars"
                currentImage={formData.avatar_url}
                onImageUploaded={(url) => setFormData({ ...formData, avatar_url: url })}
                label="Foto Klien (Opsional)"
              />

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="published"
                  checked={formData.published}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, published: checked as boolean })
                  }
                />
                <Label htmlFor="published" className="cursor-pointer">
                  Publish (tampilkan di website)
                </Label>
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

      <SearchFilterBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        categoryFilter=""
        onCategoryChange={() => {}}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        sortBy={sortBy}
        onSortChange={setSortBy}
        showCategoryFilter={false}
      />

      <BulkActions
        selectedCount={selectedIds.length}
        onDelete={handleBulkDelete}
        onPublish={handleBulkPublish}
        onUnpublish={handleBulkUnpublish}
        onClearSelection={() => setSelectedIds([])}
      />

      {filteredTestimonials.length > 0 && (
        <div className="flex items-center gap-2 mb-4">
          <Checkbox
            id="select-all"
            checked={selectedIds.length === filteredTestimonials.length}
            onCheckedChange={toggleSelectAll}
          />
          <Label htmlFor="select-all" className="cursor-pointer text-sm">
            Pilih Semua ({filteredTestimonials.length} item)
          </Label>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTestimonials.map((item) => (
          <Card key={item.id} className="glass shadow-elegant hover:shadow-glow transition-all duration-300 relative">
            <div className="absolute top-2 left-2 z-10">
              <Checkbox
                checked={selectedIds.includes(item.id)}
                onCheckedChange={() => toggleSelect(item.id)}
                className="bg-background"
              />
            </div>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={item.avatar_url || undefined} />
                    <AvatarFallback>
                      {item.client_name.charAt(0).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{item.client_name}</CardTitle>
                    {item.client_position && (
                      <CardDescription>
                        {item.client_position}{item.client_company && ` di ${item.client_company}`}
                      </CardDescription>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-end">
                  <Badge variant={item.published ? "default" : "secondary"} className="text-xs">
                    {item.published ? "Published" : "Draft"}
                  </Badge>
                  <div className="flex">
                    {renderStars(item.rating)}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">"{item.content}"</p>
              <div className="flex justify-end gap-2">
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

      {filteredTestimonials.length === 0 && testimonials.length > 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-muted-foreground">Tidak ada hasil yang sesuai dengan filter.</p>
          </CardContent>
        </Card>
      )}

      {testimonials.length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-muted-foreground">Belum ada testimoni. Tambahkan yang pertama!</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TestimonialsAdmin;
