import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <a href="/">
            <h1 className="text-3xl font-bold md:ml-16">四川琛松索道工程有限公司</h1>
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

        {/* 关于我们 */}
        <section id="about" className="mb-8 md:h-screen flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold mb-4 text-black">关于我们</h2>
          <div className=" w-full md:w-full flex flex-col items-center">
            <div className="md:w-3/4 items-center justify-center grid grid-cols-1 md:flex md:flex-col gap-6">
              <div className=" flex justify-center gap-6 shadow-md p-6 rounded-lg">
                <Image src="/about1.jpg" alt="About Us" width={1200} height={300} className="rounded-lg" />
              </div>
              <div className="bg-white shadow-md p-6 rounded-lg">
                <p className="text-lg text-gray-700">
                  四川作为天府之国，这片山水纵横、资源富饶的土地充满了无限生机。四川琛松索道工程有限公司积极投身于四川的建设事业，以专业的技术和卓越的服务，为这片土地的发展架起一道道空中桥梁，助力区域经济腾飞，连接未来的无限可能。
                </p>
                <p className="text-lg text-gray-700 mt-4">
                  公司依托前沿科技与精湛技艺，打造出超强承载的货运索道系统。每一根钢索，都经过严苛筛选与精细加工，拉力强劲，足以稳稳承载各类重物，确保货物运输一路畅行无忧。专业工程师团队精心设计索道路线，巧妙避开复杂地形障碍，让货物能以最快捷、最经济的路径穿梭于山川之间。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 产品展示 */}
        <section id="products" className="mb-8 md:h-screen flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold mb-4 text-black">产品展示</h2>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white shadow-md p-6 rounded-lg">
                <div className="bg-[url(/product1.png)] bg-cover w-[400px] h-[300px] rounded-lg" />
                <h3 className="text-xl font-bold mt-2 text-gray-700">15吨产品货运索道运行展示</h3>
              </div>
              <div className="bg-white shadow-md p-6 rounded-lg">
                <div className="bg-[url(/product2.jpg)] bg-cover w-[400px] h-[300px] rounded-lg" />
                <h3 className="text-xl font-bold mt-2 text-gray-700">循环式货运索道地锚过渡筒</h3>
                {/* <p className="text-lg text-gray-700">产品2的详细描述...</p> */}
              </div>
              <div className="bg-white shadow-md p-6 rounded-lg">
                <div className="bg-[url(/product3.jpg)] bg-cover w-[400px] h-[300px] rounded-lg" />
                <h3 className="text-xl font-bold mt-2 text-gray-700">复式卷扬机</h3>
                {/* <p className="text-lg text-gray-700">产品3的详细描述...</p> */}
              </div>
            </div>
            <div className="bg-white shadow-md p-12 rounded-lg">
              <p className="text-lg text-gray-700">公司具备全面的货运索道架设能力，无论是大型、中型还是小型货运索道项目，我们都能够高效、高质量地完成。公司拥有先进的设备供应体系，能够满足各种工程需求，并配备了一支经验丰富、技术精湛的专业团队，从设计规划到施工实施，全程提供专业化服务，确保每个项目的安全性、可靠性和高效性。我们致力于为客户打造量身定制的索道解决方案，为各行业的物流运输提供强有力的支持。</p>
            </div>
          </div>

        </section>

        {/* 解决方案 */}
        <section id="solutions" className="mb-8 md:h-screen flex flex-col justify-center items-center">
          <h2 className="text-4xl font-bold mb-4 text-black">解决方案</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-gray-700">技术咨询</h3>
              <p className="text-lg mb-2 text-gray-700">
                货运索道产品咨询、货运索道线路规划设计咨询、地形测量勘测咨询、特种设备安装改造修理、可行性研究咨询等
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-gray-700">解决方案</h3>
              <p className="text-lg mb-2 text-gray-700">
                根据项目现场情况和客户需求，提供最优解决方案
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-gray-700">索道设备供应</h3>
              <p className="text-lg mb-2 text-gray-700">
                单线循环式货运索道、双线循环式货运索道、单线往复式货运索道、双线往复式货运索道、多索往复式货运索道等
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-gray-700">旧索道设备升级改造或翻新维护</h3>
              <p className="text-lg mb-2 text-gray-700">
                对老旧货运索道进行升级改造或翻新维护
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-gray-700">索道缆车技术顾问咨询</h3>
              <p className="text-lg mb-2 text-gray-700">
                我们提供专业的技术顾问服务，帮助客户解决货运索道缆车相关的问题。
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-gray-700">索道缆车工程总承包</h3>
              <p className="text-lg mb-2 text-gray-700">
                我们提供一站式货运索道缆车工程总承包服务，从设计到施工，全程无忧。
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-gray-700">索道设计</h3>
              <p className="text-lg mb-2 text-gray-700">
                我们提供专业的货运索道设计服务，确保索道系统的安全、可靠、环保。
              </p>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-gray-700">售后服务</h3>
              <p className="text-lg mb-2 text-gray-700">
                备品备件供应、快速响应客户需求、巡检服务、客户回访
              </p>
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