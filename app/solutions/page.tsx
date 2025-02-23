import { Metadata } from "next";
import { ContactSection } from "../components/ContactSection";
import { SolutionCards } from "../components/SolutionCards";

export const metadata: Metadata = {
  title: "解决方案",
};
export default function Solutions() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <main className="container mx-auto px-4 py-8">
        <section id="solutions" className="mb-8">
          <h2 className="text-3xl font-bold mb-8">解决方案</h2>
          <p className="text-lg mb-4">
            四川琛松索道工程有限公司提供全面的索道解决方案，涵盖勘察，设计、安装、运行维护、索道缆车工程总承包以及索道缆车技术顾问咨询。
          </p>
        </section>

        <section id="services" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">我们的服务</h2>
          <SolutionCards />
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
        <ContactSection />
      </main>

      {/* footer */}
    </div>
  );
}