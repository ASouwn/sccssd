const solutions = [
    { title: "技术咨询", description: "货运索道产品咨询、货运索道线路规划设计咨询、地形测量勘测咨询、特种设备安装改造修理、可行性研究咨询等" },
    { title: "解决方案", description: "根据项目现场情况和客户需求，提供最优解决方案" },
    { title: "索道设备供应", description: "单线循环式货运索道、双线循环式货运索道、单线往复式货运索道、双线往复式货运索道、多索往复式货运索道等" },
    { title: "旧索道设备升级改造或翻新维护", description: "对老旧货运索道进行升级改造或翻新维护" },
    { title: "索道缆车技术顾问咨询", description: "我们提供专业的技术顾问服务，帮助客户解决货运索道缆车相关的问题。" },
    { title: "索道缆车工程总承包", description: "我们提供专业的技术顾问服务，帮助客户解决货运索道缆车相关的问题。" },
    { title: "索道设计", description: "我们提供专业的货运索道设计服务，确保索道系统的安全、可靠、环保。" },
    { title: "售后服务", description: "备品备件供应、快速响应客户需求、巡检服务、客户回访" },
]
function SolutionCard({ title, description }: { title: string, description: string }) {
    return (
        <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2 text-gray-700">{title}</h3>
            <p className="text-lg mb-2 text-gray-700">{description}</p>
        </div>
    )
}

export function SolutionCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution) => (
                <SolutionCard key={solution.title} {...solution} />
            ))}
        </div>
    )
}