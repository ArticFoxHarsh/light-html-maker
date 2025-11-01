import { useRef } from 'react';
import { Paperclip, X, File, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FileUploadProps {
  onFileSelect: (files: File[]) => void;
  selectedFiles: File[];
  onFileRemove: (index: number) => void;
}

export const FileUpload = ({ onFileSelect, selectedFiles, onFileRemove }: FileUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      onFileSelect(filesArray);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const isImage = (file: File) => {
    return file.type.startsWith('image/');
  };

  return (
    <div>
      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={handleFileChange}
        className="hidden"
        accept="image/*,.pdf,.doc,.docx,.txt"
      />

      {selectedFiles.length > 0 && (
        <div className="mb-2 p-2 border border-border rounded-lg bg-muted/50 space-y-2">
          {selectedFiles.map((file, index) => (
            <div
              key={index}
              className="flex items-center gap-2 p-2 bg-card rounded border border-border"
            >
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center flex-shrink-0">
                {isImage(file) ? (
                  <ImageIcon className="h-4 w-4 text-primary" />
                ) : (
                  <File className="h-4 w-4 text-primary" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{file.name}</p>
                <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-6 w-6 flex-shrink-0"
                onClick={() => onFileRemove(index)}
              >
                <X className="h-3.5 w-3.5" />
              </Button>
            </div>
          ))}
        </div>
      )}

      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="h-7 w-7 hover:bg-muted"
        onClick={handleFileClick}
      >
        <Paperclip className="h-3.5 w-3.5" />
      </Button>
    </div>
  );
};
