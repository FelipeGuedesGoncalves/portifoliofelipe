import type { Metadata } from "next";
import "./globals.css";
import { Share_Tech_Mono } from "next/font/google"

const STMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400"
})

export const metadata: Metadata = {
  title: "Portifólio",
  description: "Portifólio de Felipe Guedes Gonçalves - web developer, web development, mobile developer, mobile developmente, ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${STMono.className} text-white`}>{children}</body>
    </html>
  );
}
