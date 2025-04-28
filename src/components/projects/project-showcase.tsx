import { useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { X } from "lucide-react";

export default function WeedDetectionUploader() {
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setUploadedImage(file);
      setPreview(URL.createObjectURL(file));
      // Simulate result generation
      setTimeout(() => setResult("🌱 Weed Detected: MAIZE"), 1500);
    }
  };

  const removeImage = () => {
    setUploadedImage(null);
    setPreview(null);
    setResult(null);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  return (
    <section className="flex flex-col items-center justify-center px-6 py-20 text-center min-h-screen">
      <h2 className="text-4xl font-extrabold text-emerald-700 mb-8 drop-shadow-md">
        Weed Detection System
      </h2>

      <div
        {...getRootProps()}
        className={`border-4 border-dashed rounded-2xl w-full max-w-2xl p-10 text-zinc-600 shadow-xl transition-colors duration-300 cursor-pointer hover:bg-zinc-50 backdrop-blur-md bg-white/10 ${
          isDragActive ? "border-emerald-500 bg-emerald-50/20" : "border-zinc-300"
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-lg">
          {isDragActive ? "Drop the image here..." : "Drag & drop an image here, or click to upload"}
        </p>
      </div>

      {preview && (
        <div className="relative mt-10">
          <Image
            src={preview}
            alt="Uploaded Preview"
            width={500}
            height={300}
            className="rounded-xl border border-zinc-200 shadow-lg"
          />
          <button
            onClick={removeImage}
            className="absolute top-2 right-2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md transition-colors"
            aria-label="Remove image"
          >
            <X className="w-5 h-5 text-red-500" />
          </button>
        </div>
      )}

      {result && (
        <div className="mt-6 px-6 py-4 backdrop-blur-md bg-white/10 border border-zinc-300 rounded-xl text-lg font-semibold text-emerald-700 shadow-md max-w-xl">
          {result}
        </div>
      )}
    </section>
  );
}