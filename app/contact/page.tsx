// app/contact/page.tsx
import Image from "next/image";
export default function Contact() {
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

        <section id="contact-details" className="mb-8 h-screen ">
          <div className="flex flex-col justify-between items-start">
            <h2 className="text-3xl font-bold mb-8">联系我们</h2>
            {/* <div className="bg-[url(/contact.jpg)] w-full bg-cover h-[400px] rounded-lg mb-8"></div> */}
            <Image src="/contact.jpg" alt="About Us" width={1200} height={300} className="rounded-lg" />
            <div className="w-full mb-4 md:mb-0 flex flex-col items-center justify-center">
              <p className="text-lg mb-8">
                如果您有任何问题或需要进一步的信息，请通过以下方式联系我们。
              </p>
              <p>地址：四川省绵阳市涪城区西山东路48号2栋102室</p>
              <p>邮编：621000</p>
              <p>联系人：181-4034-4252（唐） 159-0824-9318（罗）</p>
              {/* <p>邮箱：contact@chenongsuodao.com</p> */}
            </div>
            {/* <div className="w-full md:w-1/3">
              <h3 className="text-2xl font-bold mb-4">直接联系</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">您的邮箱</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="your-email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">您的消息</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="请输入您的消息..."
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    发送消息
                  </button>
                </div>
              </form>
            </div> */}
          </div>
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