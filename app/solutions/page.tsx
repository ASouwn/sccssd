
export default function Solutions() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <a href="/">
            <h1 className="text-3xl font-bold ml-16">四川琛松索道工程有限公司</h1>
          </a>
          <nav className="mt-4">
            <ul className="flex space-x-4 mr-16">
              <li><a href="/about" className="text-gray-700 hover:text-blue-500">关于我们</a></li>
              <li><a href="/products" className="text-gray-700 hover:text-blue-500">产品展示</a></li>
              <li><a href="/solutions" className="text-gray-700 hover:text-blue-500">解决方案</a></li>
              <li><a href="/contact" className="text-gray-700 hover:text-blue-500">联系我们</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section id="solutions" className="mb-8">
          <h2 className="text-3xl font-bold mb-8">解决方案</h2>
          <p className="text-lg mb-4">
            四川琛松索道工程有限公司提供全面的索道解决方案，涵盖勘察，设计、安装、运行维护、索道缆车工程总承包以及索道缆车技术顾问咨询。
          </p>
        </section>

        <section id="services" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">我们的服务</h2>
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

        {/* <section id="case-studies" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">案例研究</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white shadow-md p-4">
              <Image src="/case-study1.jpg" alt="Case Study 1" width={300} height={200} />
              <h3 className="text-xl font-bold mt-2">项目1</h3>
              <p>项目1的详细描述...</p>
            </div>
            <div className="bg-white shadow-md p-4">
              <Image src="/case-study2.jpg" alt="Case Study 2" width={300} height={200} />
              <h3 className="text-xl font-bold mt-2">项目2</h3>
              <p>项目2的详细描述...</p>
            </div>
          </div>
        </section> */}

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
          <p>&copy; 2023 四川琛松索道工程有限公司. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}