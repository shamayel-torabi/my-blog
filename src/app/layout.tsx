import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  display: 'swap',
});



export const metadata: Metadata = {
  title: "وبلاگ شمایل ترابی",
  description: "وبلاگ و نوشته های شمایل ترابی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.className}} antialiased`}>
        <div className="flex flex-col">
          <Header />
          <main className="overflow-y-auto">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
