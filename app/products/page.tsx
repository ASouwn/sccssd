// app/products/page.tsx
import Image from "next/image";
import { Metadata } from "next";
import { ContactSection } from "../components/ContactSection";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "产品展示",
};

export default function Products() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <main className="container mx-auto px-4 py-8">
        <section id="products" className="mb-8">
          <h2 className="text-3xl font-bold mb-8">产品展示</h2>
          <p className="text-lg mb-4">
            公司提供多种高性能的索道和缆车产品，满足不同客户的需求。
          </p>
        </section>
        
        {/* <ProductsList /> */}
        <HomeContent />

        {/* 联系方式 */}
        <ContactSection />
      </main>
    </div>
  );
}