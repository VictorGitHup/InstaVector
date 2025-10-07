import ImageUploader from '@/components/image-uploader';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-4 sm:p-8">
      <div className="w-full max-w-2xl">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Vector Image Converter
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Upload your PNG, JPG, or JPEG file and get a high-quality SVG vector.
          </p>
        </header>
        <ImageUploader />
        <footer className="text-center mt-8 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} VectorImageConverter. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
