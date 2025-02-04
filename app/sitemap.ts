import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'http://sccssd.cn',
            lastModified: new Date(),
        },
        {
            url: 'http://sccssd.cn/about',
            lastModified: new Date(),
        },
        {
            url: 'http://sccssd.cn/products',
            lastModified: new Date(),
        },
        {
            url: 'http://sccssd.cn/solutions',
            lastModified: new Date(),
        },
        {
            url: 'http://sccssd.cn/contact',
            lastModified: new Date(),
        },
    ]
}