import { useState, useEffect, useMemo } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Plus, Edit, Trash2, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import ImageUpload from '@/components/admin/ImageUpload';
import BulkActions from '@/components/admin/BulkActions';
import SearchFilterBar from '@/components/admin/SearchFilterBar';

interface Portfolio {
  id: string;
  title: string;
  category: string;
  description: string | null;
  image_url: string | null;
  demo_url: string | null;
  published: boolean;
  created_at: string;
}

const PortfolioAdmin = () => {
  const [portfolio, setPortfolio] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Portfolio | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    image_url: '',
    demo_url: '',
    published: true
  });
  const [error, setError] = useState<string | null>(null);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const { toast } = useToast();

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const { data, error } = await supabase
        .from('portfolio')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPortfolio(data || []);
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
          .from('portfolio')
          .update(formData)
          .eq('id', editingItem.id);

        if (error) throw error;
        toast({ title: "Portfolio berhasil diperbarui" });
      } else {
        const { error } = await supabase
          .from('portfolio')
          .insert(formData);

        if (error) throw error;
        toast({ title: "Portfolio berhasil ditambahkan" });
      }

      setIsDialogOpen(false);
      setEditingItem(null);
      setFormData({ title: '', category: '', description: '', image_url: '', demo_url: '', published: true });
      fetchPortfolio();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleEdit = (item: Portfolio) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      category: item.category,
      description: item.description || '',
      image_url: item.image_url || '',
      demo_url: item.demo_url || '',
      published: item.published
    });
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Apakah Anda yakin ingin menghapus portfolio ini?')) return;

    try {
      const { error } = await supabase
        .from('portfolio')
        .delete()
        .eq('id', id);

      if (error) throw error;
      toast({ title: "Portfolio berhasil dihapus" });
      fetchPortfolio();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const resetForm = () => {
    setEditingItem(null);
    setFormData({ title: '', category: '', description: '', image_url: '', demo_url: '', published: true });
    setError(null);
  };

  const handleBulkDelete = async () => {
    try {
      const { error } = await supabase
        .from('portfolio')
        .delete()
        .in('id', selectedIds);

      if (error) throw error;
      toast({ title: `${selectedIds.length} item berhasil dihapus` });
      setSelectedIds([]);
      fetchPortfolio();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleBulkPublish = async () => {
    try {
      const { error } = await supabase
        .from('portfolio')
        .update({ published: true })
        .in('id', selectedIds);

      if (error) throw error;
      toast({ title: `${selectedIds.length} item berhasil dipublish` });
      setSelectedIds([]);
      fetchPortfolio();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleBulkUnpublish = async () => {
    try {
      const { error } = await supabase
        .from('portfolio')
        .update({ published: false })
        .in('id', selectedIds);

      if (error) throw error;
      toast({ title: `${selectedIds.length} item berhasil di-draft` });
      setSelectedIds([]);
      fetchPortfolio();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === filteredPortfolio.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredPortfolio.map(item => item.id));
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const uniqueCategories = useMemo(() => {
    const categories = portfolio.map(item => item.category);
    return Array.from(new Set(categories));
  }, [portfolio]);

  const filteredPortfolio = useMemo(() => {
    return portfolio.filter(item => {
      const matchesSearch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description?.toLowerCase().includes(searchQuery.toLowerCase()) ?? false);
      
      const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
      const matchesStatus = statusFilter === 'all' || 
        (statusFilter === 'published' && item.published) ||
        (statusFilter === 'draft' && !item.published);
      
      return matchesSearch && matchesCategory && matchesStatus;
    }).sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        case 'oldest':
          return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });
  }, [portfolio, searchQuery, categoryFilter, statusFilter, sortBy]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Kelola Portfolio</h3>
        <Dialog open={isDialogOpen} onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) resetForm();
        }}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Tambah Portfolio
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingItem ? 'Edit Portfolio' : 'Tambah Portfolio Baru'}
              </DialogTitle>
              <DialogDescription>
                {editingItem ? 'Perbarui informasi portfolio' : 'Tambahkan portfolio baru ke website'}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Judul</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Kategori</Label>
                  <Input
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Deskripsi</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                />
              </div>

              <ImageUpload
                bucket="portfolio-images"
                currentImage={formData.image_url}
                onImageUploaded={(url) => setFormData({ ...formData, image_url: url })}
                label="Gambar Portfolio"
              />

              <div className="space-y-2">
                <Label htmlFor="demo_url">URL Demo (Opsional)</Label>
                <Input
                  id="demo_url"
                  type="url"
                  value={formData.demo_url}
                  onChange={(e) => setFormData({ ...formData, demo_url: e.target.value })}
                  placeholder="https://example.com/demo"
                />
              </div>

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
        categoryFilter={categoryFilter}
        onCategoryChange={setCategoryFilter}
        statusFilter={statusFilter}
        onStatusChange={setStatusFilter}
        sortBy={sortBy}
        onSortChange={setSortBy}
        categories={uniqueCategories}
      />

      <BulkActions
        selectedCount={selectedIds.length}
        onDelete={handleBulkDelete}
        onPublish={handleBulkPublish}
        onUnpublish={handleBulkUnpublish}
        onClearSelection={() => setSelectedIds([])}
      />

      {filteredPortfolio.length > 0 && (
        <div className="flex items-center gap-2 mb-4">
          <Checkbox
            id="select-all"
            checked={selectedIds.length === filteredPortfolio.length}
            onCheckedChange={toggleSelectAll}
          />
          <Label htmlFor="select-all" className="cursor-pointer text-sm">
            Pilih Semua ({filteredPortfolio.length} item)
          </Label>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPortfolio.map((item) => (
          <Card key={item.id} className="glass shadow-elegant hover:shadow-glow transition-all duration-300">
            <div className="absolute top-2 left-2 z-10 flex gap-2">
              <Checkbox
                checked={selectedIds.includes(item.id)}
                onCheckedChange={() => toggleSelect(item.id)}
                className="bg-background"
              />
            </div>
            {item.image_url && (
              <div className="relative overflow-hidden rounded-t-lg h-48">
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
            )}
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start gap-2">
                <CardTitle className="text-lg">{item.title}</CardTitle>
                <div className="flex gap-1 flex-wrap">
                  <Badge variant={item.published ? "default" : "secondary"} className="text-xs">
                    {item.published ? "Published" : "Draft"}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {item.category}
                  </Badge>
                </div>
              </div>
              {item.description && (
                <CardDescription className="text-sm">
                  {item.description}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
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
                {item.demo_url && (
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => window.open(item.demo_url!, '_blank')}
                    className="gap-1"
                  >
                    <ExternalLink className="h-3 w-3" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPortfolio.length === 0 && portfolio.length > 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-muted-foreground">Tidak ada hasil yang sesuai dengan filter.</p>
          </CardContent>
        </Card>
      )}

      {portfolio.length === 0 && (
        <Card>
          <CardContent className="text-center py-8">
            <p className="text-muted-foreground">Belum ada portfolio. Tambahkan yang pertama!</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default PortfolioAdmin;
