// app/contact/page.tsx
import Image from "next/image";
import { Metadata } from "next";
import { Header } from "../components/Header";
import { ContactSection } from "../components/ContactSection";

export const metadata: Metadata = {
  title: "联系方式",
};
export default function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <main className="container mx-auto px-4 py-8 text-center">

        <ContactSection/>
        <Image src="/contact/contact.jpg" alt="About Us" width={1600} height={300} className="rounded-lg" />
      </main>

    </div>
  );
}