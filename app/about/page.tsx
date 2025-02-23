// about.tsx
// import Image from "next/image";
import Image from "next/image";
import { Metadata } from "next";
import { ContactSection } from "../components/ContactSection";
import { SolutionCards } from "../components/SolutionCards";

export const metadata: Metadata = {
  title: "关于我们",
};

function AbouSection() {
  return (
    <section id="about" className="mb-8 top-6">
      <h2 className="text-4xl font-bold mb-4 text-black py-8 text-center relative before:block before:w-1/4 before:h-[2px] before:bg-gray-300 before:absolute before:top-1/2 before:left-0 after:block after:w-1/4 after:h-[2px] after:bg-gray-300 after:absolute after:top-1/2 after:right-0">
        关于我们
      </h2>
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg mb-4 w-3/4 indent-8">
          四川琛松索道工程有限公司，汇聚了一大批行业精英，专业的工程师团队成员来自于多个相关领域，精通机械设计、结构力学、电子自动化等专业知识，拥有丰富的经验和前沿的理念，精心打造每一条货运索道。
        </p>
        <p className="text-lg mb-4 w-3/4 indent-8">
          从实地勘察，精准分析山川地势，到巧妙规划索道线路，避开复杂地形，确保运输路线的科学性与高效性；再到对每一个零部件的严苛筛选与精细加工，只为构建超强承载的货运索道系统，保障货物运输的平稳、安全。
        </p>
        <p className="text-lg mb-4 w-3/4 indent-8">
          公司秉持着 “高效、可靠、创新、诚信” 的理念，持续为客户提供优质的货运解决方案，携手各界共创辉煌未来。
        </p>

      </div>
    </section>
  );
}

function MissionSection() {
  return (
    <section id="mission" className="mb-8">
      <h2 className="text-4xl font-bold mb-4 text-black py-8 text-center relative before:block before:w-1/4 before:h-[2px] before:bg-gray-300 before:absolute before:top-1/2 before:left-0 after:block after:w-1/4 after:h-[2px] after:bg-gray-300 after:absolute after:top-1/2 after:right-0">
        我们的理念
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow-md p-4">
          <h3 className="font-semibold mb-2">高效</h3>
          <p className="text-gray-700">
            我们追求卓越的运输效率，通过优化货运索道设计和运营流程，确保货物能够快速、安全地到达目的地。高效不仅是我们的核心竞争力，更是我们为客户节约时间与成本的承诺。
          </p>
        </div>
        <div className="bg-white shadow-md p-4">
          <h3 className="font-semibold mb-2">可靠</h3>
          <p className="text-gray-700">
            质量和安全是我们服务的基石。我们严格把控每一个环节，采用先进的技术和高品质的设备，确保货运索道在各种环境中都能稳定运行，让客户放心托付每一次运输任务。
          </p>
        </div>
        <div className="bg-white shadow-md p-4">
          <h3 className="font-semibold mb-2">创新</h3>
          <p className="text-gray-700">
            我们以技术创新引领行业发展，持续研发和引入前沿技术，优化索道运输方案，满足多样化的客户需求。创新是推动我们不断前进的动力，也是我们为客户提供更优解决方案的源泉。
          </p>
        </div>
        <div className="bg-white shadow-md p-4">
          <h3 className="font-semibold mb-2">诚信</h3>
          <p className="text-gray-700">
            诚信是企业发展的根本。我们始终以客户为中心，坚持透明合作，履行每一项承诺。无论是在服务还是在合作中，我们都以诚实守信的态度赢得客户和合作伙伴的信赖。
          </p>
        </div>
      </div>
    </section>
  );
}

function SolutionsSection() {
  return (
    <section id="solutions" className="mb-8">
          <h2 className="text-4xl font-bold mb-4 text-black py-8 text-center relative before:block before:w-1/4 before:h-[2px] before:bg-gray-300 before:absolute before:top-1/2 before:left-0 after:block after:w-1/4 after:h-[2px] after:bg-gray-300 after:absolute after:top-1/2 after:right-0">
            我们的业务范围
          </h2>
          <SolutionCards />
        </section>
  )
}

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <main className="container mx-auto px-4 py-8">

        <div className=" flex justify-center gap-6 md:shadow-md p-6 rounded-lg">
          <Image src="/about/about2.png" alt="About Us" width={1200} height={300} className="rounded-lg w-full h-auto" />
        </div>

        <AbouSection />

        <MissionSection />


        {/* <section id="vision" className="mb-8">
          <h2 className="text-4xl font-bold mb-4">我们的愿景</h2>
          <p className="text-lg mb-4">
            致力于成为国内领先的货运索道解决方案提供商，我们以技术创新为核心驱动力，专注于提升货运效率、降低运输成本，为客户提供安全、可靠、环保的索道运输服务。我们将以专业的团队、卓越的品质和贴心的服务，助力各行业实现物流升级，推动绿色可持续发展，为社会创造更大的价值。
          </p>
        </section> */}

        <SolutionsSection />

        {/* <section id="team" className="mb-8">
          <h2 className="text-2xl font-bold mb-4">我们的团队</h2>
          <p className="text-lg mb-4">
            我们拥有一支由行业专家和技术精英组成的团队，他们在索道设计、制造和安装方面拥有丰富的经验。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md p-4">
              <Image src="/team-member1.jpg" alt="Team Member 1" width={300} height={200} />
              <h3 className="text-xl font-bold mt-2">张三</h3>
              <p>首席执行官</p>
            </div>
            <div className="bg-white shadow-md p-4">
              <Image src="/team-member2.jpg" alt="Team Member 2" width={300} height={200} />
              <h3 className="text-xl font-bold mt-2">李四</h3>
              <p>首席技术官</p>
            </div>
            <div className="bg-white shadow-md p-4">
              <Image src="/team-member3.jpg" alt="Team Member 3" width={300} height={200} />
              <h3 className="text-xl font-bold mt-2">王五</h3>
              <p>市场总监</p>
            </div>
          </div>
        </section> */}

        {/* 联系方式 */}
        <ContactSection />
      </main>
    </div>
  );
}