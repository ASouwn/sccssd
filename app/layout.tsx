import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "./components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "四川琛松索道工程有限公司",
    template: "%s | 四川琛松索道工程有限公司",
  },
  description: "四川琛松索道工程有限公司介绍网站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <head>
          <meta name="baidu-site-verification" content="codeva-OtOQ8cV6oy" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />

          {children}

          <footer className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-6 text-center">
              <p>&copy; 2024 四川琛松索道工程有限公司. All rights reserved.</p>
            </div>
          </footer>
        </body>
      </html>
    </>
  );
}
