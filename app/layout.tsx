import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "T&K Media",
  description: "Сайт находится в разработке",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Применяем наш шрифт Helvetica Neue ко всему сайту
    <html lang="ru" className="font-sans">
      <body>{children}</body>
    </html>
  );
}
