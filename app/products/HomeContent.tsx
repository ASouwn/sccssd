"use client"
import { useState } from "react"
import Image from "next/image";
import PaginatedProductList from "./PaginatedProductListProps";

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

function EquipmentList() {

  interface Product {
    title: string
    image: string
    describe: string
    feature: string
  }
  // 卷扬机列表
  const equipment: Product[] = [
    {
      "title": "JM 慢速卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/d3f22a0c43d1cd66464c3a3b7b6ba530c78b062a.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "JM 慢速卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/00785963918f9328834b74617f3c818ec50b7952.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "JM 慢速卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/24c8932677d6bd263be2a840e604bf742cd7d298.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "JM 慢速卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/2b13a9d05ce8671006113f23e5080d1aec794b5a.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "JK快速卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/6eda62c183bbf368eae808158ed4fa8a273ebad4.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "JK快速卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/e7ab899ee7030253f1be7387a788e7bd41d3749c.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "JM JK 通用卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/fbf9dff113ac13c98eacce58ca608008789be3c4.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "JM JK 通用卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/b7ccd8e451442848fffb9fbab27d462bca80fab3.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "JM JK 通用卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/8feb5f2dd8274efcacd2fdef028dfcc6ebce9149.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "JM JK 通用卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/abb995f12aaddd3fec63fc42be185f9ec3f09e96.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "2JKL手刹离合卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/015a1aaac486473f50c51aeb0f597ccbafa89f00.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "JKL手刹离合卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/0e1f8999c513db0475cf620085b9896caabc2055.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "JKL 单筒手控卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/9185f7eed48028e9d74d4a70bbf5044f0e719ee5.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "JKL 手控溜放卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/68e8dc9a43e6e9a371c4b7ecd267fe39ad836a7b.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "JKL 单筒手控卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/3b958fe1e97f014e47459fa57ccb999187a21040.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "JKL 单筒手控卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/3c5bb5a4124dec2810b102022ddf6f9aa0e4b7e8.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "JMJK通用卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/014b2ef2793ca9e30cf7ea238c5fd4ae121b6a3e.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "2JKM摩擦筒牵引卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/3df22519ae8e6f2be2a428479383f9c4aa9643ee.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "索道牵引起吊专用卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/d96ce8801be6ffdbeaf0c50a9c60fdade72152fe.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "索道牵引卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/be15d50ead6b6f011e01c42aae4a0888444890c3.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "索道牵引",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/4e2d26ad77544096cfcbf42e2011172d09fd9b2e.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "索道牵引卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/3ee4b9bf9a07a47d599d6d4309dfceb56bc431cd.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "摩擦筒牵引卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/5969d248f7f2cc78d59a6a78a3012ebaf204b47a.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "索道牵引卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/b7e35626b43c01701290c00f44ffd0d31e9cf847.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "索道牵引卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/081424779b0860810fc9f3cf365425fbb802c9b5.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "索道牵引起吊专用卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/25221bacf9d007cd4afae1dae6a447ca1579ee94.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "冶金炉门专用卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/b94e4962baf780ceb97c3814b42cb16f3da67543.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "冶金炉门专用卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/ab3bb3902a856e19a8eab1c14501b09060ff6e20.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "冶金炉门专用卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/8740de6b454917c5308bc1c38426343f24ae50fe.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "启闭机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/a535e83c6649aae0589d968f439ad01e68890c59.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "启闭机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/ec5df1114645fb14bd2997150f9d001959d8f9ee.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "启闭机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/f625bdbfc26da36e77b40ef4255c600714705a24.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "启闭机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/8353ded9a43ec92ad8993909cc202cc6e92a4de2.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "启闭机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/e83ac166ff58ff1d185506022ea630debeaf8cc0.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "2JKL手刹离合卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/669ca0783de66f253b864bb1ede5a528cc7144d6.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "后轿牵引机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/3982fb094ac95611115bd7cb0d74271c22a99779.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "定制型非标卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/c7cc3a5e82f21e06d94c4cab1a5b3267116bd148.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "定制型非标卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/8b0e1d7edc9825fb450f8e2ea321843585a58be4.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "定制型非标卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/dd2a5c9dfbcea24b69711115ebdb3cd9bbbd0684.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "定制型非标卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/ece4b862d7bc1d442ff77d93cf064d0417c07c6b.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "定制型非标卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/4e94366a65e83845fa2f237c4039cd8a12ff2ebd.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "定制型非标卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/25476fe495ecbda3021ef22abccd8dc1b981abe2.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "定制型非标卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/e34f6b1343439847245f85497bbde154daeae569.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "定制型非标卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/12ac6f54849f0b8c9a236d29748d8849cef8de0b.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "HZP 路面摊铺机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/bae9b49bf4c7e20e19156c7d0705a64c6eec89de.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "HZP 路面摊铺机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/2c95935b74819be2e6bc57a17a528755ac2528ec.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    }
  ]
  // 打桩机列表
  const pilingMachinery: Product[] = [
    {
      "title": "打桩卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/0cb0c722025e593d4eda8185b2fd6b5f47959803.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "桩机架",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/9ded6962abf73ef8abe6c19dff2a9717d4553de9.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "CK打桩机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/e6cb9bc828521081b79f4eda55bad8f9b4fa5833.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "打桩卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/e6d656061ca2ba87640d32e9e3216f924f86f7d4.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "打桩卷扬机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/433120083383edace3192e6144fe55f2867a9b8a.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "CZ-8冲击式钻机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/73e296d988c21f65b3f759257dd922988d6f42af.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "CZ-8冲击式钻机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/2d8c21fcbbbe483c3fb4657416ce102b39282c19.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "护栏打桩机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/a5362f305d2098cb7fdd9c96a3ef984304809082.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "护栏打桩机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/299cdd383183233f60e1a77955fa41604dc4a92a.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    },
    {
      "title": "步履式打桩机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/3407bf5675efa85af48655c7d2876c1e3c75469e.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""

    },
    {
      "title": "步履式打桩机",
      "image": "https://cdn.myxypt.com/74bfbbe4/25/03/8b3d2b2fef22f5b630f6933733c45f19752e438d.jpg?x-oss-process=image/resize,m_lfit,h_400,w_400",
      "describe": "",
      "feature": ""
    }
  ]

  // 分页状态
  return (
    <section className="py-12 px-4 md:px-12 bg-gray-50">
      {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">卷扬机设备</h2>
      <div className="flex space-x-4 overflow-x-auto py-4">
        {equipment.map((e) => (
          <ProductCard key={e.title} product={e} />
        ))}
      </div> */}

      {/* 卷扬机设备 */}
      <PaginatedProductList
        products={equipment}
        pageSize={6}
      />

      {/* <h2 className="text-3xl md:text-4xl font-bold text-center mt-12 mb-8">打桩机设备</h2>
      <div className="flex space-x-4 overflow-x-auto py-4">
        {pilingMachinery.map((p) => (
          <ProductCard key={p.title} product={p} />
        ))}
      </div> */}
      {/* 打桩机设备 */}
      <PaginatedProductList
        products={pilingMachinery}
        pageSize={6}
      />
    </section>
  )
}

export default function HomeContent() {
  const tabs = [
    { key: "products", label: "方案列表" },
    { key: "equipment", label: "设备列表" },
  ]
  const [activeTab, setActiveTab] = useState("products")

  return (
    <div className="px-4 md:px-12 py-8">
      {/* 菜单栏 */}
      <nav className="flex border-b border-gray-300 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`px-6 py-2 -mb-px font-medium border-b-2 ${
              activeTab === tab.key
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* 内容区 */}
      <div>
        {activeTab === "products" && <ProductsList />}
        {activeTab === "equipment" && <EquipmentList />}
      </div>
    </div>
  )
}
