
function Menu() {
    const menuItems = [
        { title: "关于我们", href: "/about", },
        { title: "产品展示", href: "/products", },
        { title: "解决方案", href: "/solutions", },
        { title: "联系我们", href: "/contact", },
    ];
    return (
        <nav className="mt-4">
            <ul className="flex space-x-8 md:mr-16">
                {menuItems.map((item) => (
                    <li key={item.title}><a href={item.href} className=" text-xl text-gray-700 hover:text-blue-500">{item.title}</a></li>
                ))}
            </ul>
        </nav>
    )
}
/**
 * 头部导航栏
 * @returns 
 */
export function Header() {
    return (
        <header className="bg-white shadow-md md:sticky top-0 z-10">
            <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
                <a href="/">
                    <h1 className="text-xl md:text-3xl font-bold md:ml-16">四川琛松索道工程有限公司</h1>
                </a>
                <Menu />
            </div>
        </header>
    )
}