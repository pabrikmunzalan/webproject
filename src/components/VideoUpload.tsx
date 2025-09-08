import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import { toast } from "sonner";

interface VideoUploadProps {
  onVideoUploaded?: (videoUrl: string) => void;
  maxSizeMB?: number;
}

const VideoUpload = ({ onVideoUploaded, maxSizeMB = 50 }: VideoUploadProps) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [loading, setLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('video/')) {
      toast.error('File harus berupa video');
      return;
    }

    // Validate file size
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSizeMB) {
      toast.error(`Ukuran file tidak boleh lebih dari ${maxSizeMB}MB`);
      return;
    }

    setLoading(true);
    try {
      // Create object URL for local preview
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
      onVideoUploaded?.(url);
      toast.success('Video berhasil diupload');
    } catch (error) {
      console.error('Error uploading video:', error);
      toast.error('Gagal mengupload video');
    } finally {
      setLoading(false);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        {!videoUrl ? (
          <div className="text-center space-y-4">
            <div 
              className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-12 cursor-pointer hover:border-primary/50 transition-colors"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Upload Video</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Klik untuk memilih video atau drag & drop
              </p>
              <p className="text-xs text-muted-foreground">
                Format yang didukung: MP4, WebM, MOV (Max {maxSizeMB}MB)
              </p>
            </div>
            
            <input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              onChange={handleFileSelect}
              className="hidden"
              disabled={loading}
            />
            
            <Button 
              onClick={() => fileInputRef.current?.click()}
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Mengupload...' : 'Pilih Video'}
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative group rounded-lg overflow-hidden bg-black">
              <video
                ref={videoRef}
                src={videoUrl}
                className="w-full h-auto max-h-96 object-contain"
                onLoadedMetadata={() => {
                  if (videoRef.current) {
                    videoRef.current.muted = isMuted;
                  }
                }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                controls={false}
                playsInline
              />
              
              {/* Video Controls Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center space-x-4">
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={togglePlay}
                    className="glass"
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={toggleMute}
                    className="glass"
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </Button>
                  
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={toggleFullscreen}
                    className="glass"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <p className="text-sm text-muted-foreground">
                Video berhasil diupload
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setVideoUrl(null);
                  setIsPlaying(false);
                  if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                  }
                }}
              >
                Upload Ulang
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default VideoUpload;