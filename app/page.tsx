import Image from "next/image";
import { ContactSection } from "./components/ContactSection";
import { SolutionCards } from "./components/SolutionCards";

function AboutSection() {
  return (
    <section id="about">
      <h2 className="text-4xl font-bold mb-4 text-black py-8 text-center relative before:block before:w-1/4 before:h-[2px] before:bg-gray-300 before:absolute before:top-1/2 before:left-0 after:block after:w-1/4 after:h-[2px] after:bg-gray-300 after:absolute after:top-1/2 after:right-0">
        公司简介
      </h2>
      <div className="bg-white shadow-md p-6 rounded-lg">
        <p className="text-lg text-gray-700 indent-8">
          四川作为天府之国，这片山水纵横、资源富饶的土地充满了无限生机。四川琛松索道工程有限公司积极投身于四川的建设事业，以专业的技术和卓越的服务，为这片土地的发展架起一道道空中桥梁，助力区域经济腾飞，连接未来的无限可能。
        </p>
        <p className="text-lg text-gray-700 mt-4 indent-8">
          公司依托前沿科技与精湛技艺，打造出超强承载的货运索道系统。每一根钢索，都经过严苛筛选与精细加工，拉力强劲，足以稳稳承载各类重物，确保货物运输一路畅行无忧。专业工程师团队精心设计索道路线，巧妙避开复杂地形障碍，让货物能以最快捷、最经济的路径穿梭于山川之间。
        </p>
      </div>
    </section>
  )
}

function ProductsSection() {
  const path = "/products"
  const products = [
    { title: "15吨产品货运索道", image: "/product1.png", },
    { title: "循环式货运索道地锚过渡筒", image: "/product2.jpg", },
    { title: "复式卷扬机", image: "/product3.jpg", },
    { title: "索道桥架", image: "/product4.jpg", },
    { title: "索道桥架", image: "/product5.jpg", },
    { title: "复式卷扬机", image: "/product6.jpg", },
  ]
  function ProductCard({ title, image }: { title: string, image: string }) {
    return (
      <div className=" bg-white shadow-md p-6 rounded-lg">
        <div className=" w-[150px] h-[150px] md:w-[300px] md:h-[300px]">
          <Image src={path + image} alt={title} width={300} height={300} className=" rounded-lg object-cover w-full h-full" />
        </div>
        <div className=" text-center text-xl font-bold mt-2 text-gray-700">{title}</div>
      </div>
    )
  }
  return (
    <section id="products" >
      <h2 className="text-4xl font-bold mb-4 text-black py-8 text-center relative before:block before:w-1/4 before:h-[2px] before:bg-gray-300 before:absolute before:top-1/2 before:left-0 after:block after:w-1/4 after:h-[2px] after:bg-gray-300 after:absolute after:top-1/2 after:right-0">
        产品展示
      </h2>
      <div>
        {/* 轮播图 */}
        <div className="overflow-x-auto py-3 scroll-auto">
          <div className="flex w-max space-x-4">
            {products.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
        <div className="bg-white shadow-md p-12 rounded-lg">
          <p className="text-lg text-gray-700 indent-8">公司具备全面的货运索道架设能力，无论是大型、中型还是小型货运索道项目，我们都能够高效、高质量地完成。公司拥有先进的设备供应体系，能够满足各种工程需求，并配备了一支经验丰富、技术精湛的专业团队，从设计规划到施工实施，全程提供专业化服务，确保每个项目的安全性、可靠性和高效性。我们致力于为客户打造量身定制的索道解决方案，为各行业的物流运输提供强有力的支持。</p>
        </div>
      </div>
    </section>
  )
}

function SolutionsSection() {
  return (
    <section id="solutions">
      <h2 className="text-4xl font-bold mb-4 text-black py-8 text-center relative before:block before:w-1/4 before:h-[2px] before:bg-gray-300 before:absolute before:top-1/2 before:left-0 after:block after:w-1/4 after:h-[2px] after:bg-gray-300 after:absolute after:top-1/2 after:right-0">
        解决方案
      </h2>
      
      <SolutionCards />
    </section>
  )
}

export default function Home() {
  return (

    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <Image src="/about/about1.jpg" alt="About Us" width={1200} height={300} className="rounded-lg w-full h-auto" />
        {/* 关于我们 */}
        <AboutSection />

        {/* 产品展示 */}
        <ProductsSection />

        {/* 解决方案 */}
        <SolutionsSection />

        {/* 联系方式 */}
        <ContactSection />
      </main>
    </div>
  );
}