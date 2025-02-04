// app/products/page.tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "产品展示",
};
export default function Products() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <a href="/">
            <h1 className="text-2xl md:text-3xl font-bold md:ml-16">四川琛松索道工程有限公司</h1>
          </a>
          <nav className="mt-4">
            <ul className="flex space-x-4 md:mr-16">
              <li><a href="/about" className="text-gray-700 hover:text-blue-500">关于我们</a></li>
              <li><a href="/products" className="text-gray-700 hover:text-blue-500">产品展示</a></li>
              <li><a href="/solutions" className="text-gray-700 hover:text-blue-500">解决方案</a></li>
              <li><a href="/contact" className="text-gray-700 hover:text-blue-500">联系我们</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="products" className="mb-8">
          <h2 className="text-3xl font-bold mb-8">产品展示</h2>
          <p className="text-lg mb-4">
            公司提供多种高性能的索道和缆车产品，满足不同客户的需求。
          </p>
        </section>

        <section id="product-list" className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md p-4">
              <div className="bg-[url(/product1.png)] bg-cover w-[300px] h-[200px]"></div>
              <h3 className="text-xl font-bold mt-2">15吨中型索道(竣工项目)</h3>
              <p className="text-lg mb-2">安全可靠的大型索道架设</p>
              <p className="text-gray-600">主要特点：高效、安全、可靠</p>
            </div>
            <div className="bg-white shadow-md p-4">
              <div className="bg-[url(/product4.jpg)] bg-cover w-[300px] h-[200px]"></div>
              <h3 className="text-xl font-bold mt-2">5吨小型索道(竣工项目)</h3>
              <p className="text-lg mb-2">适用范围较广的中型索道架设</p>
              <p className="text-gray-600">主要特点：灵活、稳定、可靠</p>
            </div>
            <div className="bg-white shadow-md p-4">
              <div className="bg-[url(/product5.jpg)] bg-contain bg-center bg-no-repeat w-[300px] h-[200px]"></div>
              <h3 className="text-xl font-bold mt-2">1.5吨循环式索道(竣工项目)</h3>
              <p className="text-lg mb-2">适用于小型项目的使用</p>
              <p className="text-gray-600">主要特点：灵活、便捷、安全</p>
            </div>
            <div className="bg-white shadow-md p-4">
              <div className="bg-[url(/product2.jpg)] bg-cover w-[300px] h-[200px]"></div>
              <h3 className="text-xl font-bold mt-2">地锚过渡筒</h3>
              {/* <p className="text-lg mb-2">公司自研产品</p>
              <p className="text-gray-600">主要特点：创新、耐用、高效</p> */}
            </div>
            <div className="bg-white shadow-md p-4">
              <div className="bg-[url(/product3.jpg)] bg-cover w-[300px] h-[200px]"></div>
              <h3 className="text-xl font-bold mt-2">10吨用卷扬机</h3>
              {/* <p className="text-lg mb-2">中型索道使用</p>
              <p className="text-gray-600">主要特点：效率、稳定、安全</p> */}
            </div>
            <div className="bg-white shadow-md p-4">
              <div className="bg-[url(/product6.jpg)] bg-cover w-[300px] h-[200px]"></div>
              <h3 className="text-xl font-bold mt-2">循环式卷扬机</h3>
              {/* <p className="text-lg mb-2">循环式货运</p>
              <p className="text-gray-600">主要特点：耐用、环保、舒适</p> */}
            </div>
          </div>
        </section>

        {/* 联系方式 */}
        <section id="contact" className="mb-8 flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold mb-4 text-black">联系我们</h2>
          <p className="text-lg text-gray-700">地址：四川省绵阳市涪城区西山东路48号2栋102室</p>
          <p className="text-lg text-gray-700">邮编：621000</p>
          <p className="text-lg text-gray-700">联系人：181-4034-4252（唐） 159-0824-9318（罗）</p>
          {/* <p className="text-lg text-gray-700">邮箱：contact@chenongsuodao.com</p> */}
        </section>
      </main>

      {/* footer */}
      <footer className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 text-center">
          <p>&copy; 2024 四川琛松索道工程有限公司. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}