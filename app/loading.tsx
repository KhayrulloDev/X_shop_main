// app/loading.tsx
import Image from "next/image";
import logo from "@/public/placeholder-logo.svg"; // o'zingizga mos yo'l bo'lsin
import { cn } from "@/lib/utils"; // agar `clsx` yoki `cn` funksiyangiz bo‘lsa

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground transition-colors">
      <Image
        src={logo}
        alt="Market Logo"
        width={80}
        height={80}
        priority
        className="animate-pulse mb-4"
      />
      <div
        className={cn(
          "w-10 h-10 rounded-full border-4 border-t-transparent animate-spin",
          "border-primary"
        )}
        role="status"
        aria-label="Loading"
      />
      <p className="mt-4 text-sm text-muted-foreground">Yuklanmoqda, iltimos kuting...</p>
    </div>
  );
}
