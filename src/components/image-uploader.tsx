"use client";

import { useState, useRef, type ChangeEvent, type DragEvent } from "react";
import Image from "next/image";
import { UploadCloud, FileImage, Loader2, X, Download, XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_FILE_TYPES = ["image/png", "image/jpeg"];

export default function ImageUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (selectedFile: File | null) => {
    setError(null);
    if (!selectedFile) {
        setFile(null);
        if (preview) {
            URL.revokeObjectURL(preview);
        }
        setPreview(null);
        return;
    }

    if (!ALLOWED_FILE_TYPES.includes(selectedFile.type)) {
      setError("Invalid file type. Please upload a PNG or JPG file.");
      setFile(null);
      return;
    }

    if (selectedFile.size > MAX_FILE_SIZE) {
      setError("File is too large. Maximum size is 5MB.");
      setFile(null);
      return;
    }

    setFile(selectedFile);
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
  };
  
  const onFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    handleFileChange(e.target.files?.[0] || null);
    if (e.target) {
        e.target.value = "";
    }
  };

  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileChange(e.dataTransfer.files?.[0] || null);
  };

  const onRemoveFile = () => {
    if (preview) {
        URL.revokeObjectURL(preview);
    }
    setFile(null);
    setPreview(null);
  };

  const onConvert = async () => {
    if (!file) return;

    setIsLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("https://convertsvg-fclo.onrender.com/convert", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        let errorMsg = `API error: ${response.statusText}`;
        try {
            const errorData = await response.json();
            errorMsg = errorData.error || errorData.message || errorMsg;
        } catch (e) {
            // Not a JSON response
        }
        throw new Error(errorMsg);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      const originalFileName = file.name.split('.').slice(0, -1).join('.') || 'converted';
      a.download = `${originalFileName}.svg`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
      onRemoveFile();

    } catch (err: any) {
      setError(err.message || "An unexpected error occurred during conversion.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardContent className="p-6 space-y-6">
        {error && (
            <Alert variant="destructive">
                <XCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}

        {preview && file ? (
          <div className="space-y-4">
            <div className="relative group w-full aspect-video rounded-lg overflow-hidden border shadow-inner">
                <Image src={preview} alt="Image preview" fill className="object-contain" />
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="destructive" size="icon" onClick={onRemoveFile} aria-label="Remove file">
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between p-3 bg-muted/50 rounded-lg gap-4">
                <div className="flex items-center gap-3 overflow-hidden">
                    <FileImage className="w-8 h-8 text-primary flex-shrink-0"/>
                    <div className="text-sm overflow-hidden">
                        <p className="font-medium text-foreground truncate">{file.name}</p>
                        <p className="text-muted-foreground">{ (file.size / 1024 / 1024).toFixed(2) } MB</p>
                    </div>
                </div>
                 <Button onClick={onConvert} disabled={isLoading} className="w-full sm:w-auto flex-shrink-0">
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Converting...
                        </>
                    ) : (
                        <>
                            <Download className="mr-2 h-4 w-4" />
                            Convert & Download SVG
                        </>
                    )}
                 </Button>
            </div>
          </div>
        ) : (
          <div
            className={cn(
              "relative flex flex-col items-center justify-center w-full p-12 border-2 border-dashed rounded-lg cursor-pointer transition-colors",
              isDragging ? "border-primary bg-accent" : "border-border hover:border-primary/50"
            )}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={onDrop}
            onClick={() => fileInputRef.current?.click()}
          >
            <UploadCloud className="w-12 h-12 text-muted-foreground" />
            <p className="mt-4 text-center text-muted-foreground">
              <span className="font-semibold text-primary">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 5MB</p>
            <input
              ref={fileInputRef}
              type="file"
              accept={ALLOWED_FILE_TYPES.join(",")}
              className="hidden"
              onChange={onFileSelect}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
