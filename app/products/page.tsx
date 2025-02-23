// app/products/page.tsx
import Image from "next/image";
import { Metadata } from "next";
import { ContactSection } from "../components/ContactSection";

export const metadata: Metadata = {
  title: "产品展示",
};

function ProductsList() {
  const path = "/products"
  const products = [
    { title: "15吨产品货运索道", image: "/product1.png", describe: "安全可靠的大型索道架设", feature: "高效、安全、可靠" },
    { title: "5吨小型索道", image: "/product4.jpg", describe: "适用范围较广的中型索道架设", feature: "高效、安全、可靠" },
    { title: "1.5吨循环式索道", image: "/product5.jpg", describe: "适用于小型项目的使用", feature: "灵活、便捷、安全" },
    { title: "地锚过渡筒", image: "/product2.jpg", describe: "", feature: "" },
    { title: "10吨用卷扬机", image: "/product3.jpg", describe: "", feature: "" },
    { title: "循环式卷扬机", image: "/product6.jpg", describe: "", feature: "" },
  ]
  function ProductCard({ title, image, describe, feature }: { title: string, image: string, describe: string, feature: string }) {
    return (
      < div className="bg-white shadow-md p-4" >
        <div className=" w-[150px] h-[150px] md:w-[300px] md:h-[300px]">
          <Image src={path + image} alt={title} width={300} height={300} className=" rounded-lg object-cover w-full h-full" />
        </div>
        {/* <div className="bg-[url(/product1.png)] bg-cover w-[300px] h-[200px]"></div> */}
        <h3 className="text-xl font-bold mt-2">{title}</h3>
        {describe === "" ? null : <p className="text-lg mb-2">{describe}</p>}
        {feature === "" ? null : <p className="text-gray-600">主要特点：{feature}</p>}
      </div >
    )
  }
  return (
    <section id="product-list" className="mb-8">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </section>
  );
}

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

        <ProductsList />

        {/* 联系方式 */}
        <ContactSection />
      </main>
    </div>
  );
}