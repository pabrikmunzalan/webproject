import { Button } from '@/components/ui/button';
import { Trash2, Eye, EyeOff } from 'lucide-react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { useState } from 'react';

interface BulkActionsProps {
  selectedCount: number;
  onDelete: () => void;
  onPublish: () => void;
  onUnpublish: () => void;
  onClearSelection: () => void;
}

const BulkActions = ({ 
  selectedCount, 
  onDelete, 
  onPublish, 
  onUnpublish,
  onClearSelection 
}: BulkActionsProps) => {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  if (selectedCount === 0) return null;

  const handleDelete = () => {
    onDelete();
    setShowDeleteDialog(false);
  };

  return (
    <>
      <div className="flex items-center gap-3 p-4 bg-primary/10 border border-primary/20 rounded-lg">
        <span className="font-medium">{selectedCount} item dipilih</span>
        <div className="flex gap-2 ml-auto">
          <Button
            size="sm"
            variant="outline"
            onClick={onPublish}
            className="gap-2"
          >
            <Eye className="h-4 w-4" />
            Publish
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={onUnpublish}
            className="gap-2"
          >
            <EyeOff className="h-4 w-4" />
            Draft
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => setShowDeleteDialog(true)}
            className="gap-2 text-destructive hover:text-destructive"
          >
            <Trash2 className="h-4 w-4" />
            Hapus
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={onClearSelection}
          >
            Batal
          </Button>
        </div>
      </div>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Konfirmasi Hapus</AlertDialogTitle>
            <AlertDialogDescription>
              Apakah Anda yakin ingin menghapus {selectedCount} item? Tindakan ini tidak dapat dibatalkan.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete} className="bg-destructive hover:bg-destructive/90">
              Hapus
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default BulkActions;
