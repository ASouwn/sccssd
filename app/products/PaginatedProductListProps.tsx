"use client"

import { useState, useMemo } from "react"
import Image from "next/image"

export interface Product {
  title: string
  image: string
  describe?: string
  feature?: string
}

interface PaginatedProductListProps {
  products: Product[]
  pageSize: number
}

export default function PaginatedProductList({
  products,
  pageSize,
}: PaginatedProductListProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(products.length / pageSize)

  // 确保每页数据固定
  const currentData = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    const end = currentPage * pageSize
    return products.slice(start, end)
  }, [currentPage, products, pageSize])

  function ProductCard({ product }: { product: Product }) {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden w-full md:w-[300px]">
        <div className="w-full h-[200px] md:h-[250px] relative">
          <Image src={product.image} alt={product.title} fill className="object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>
          {product.describe && <p className="text-gray-600 mt-2">{product.describe}</p>}
          {product.feature && <p className="text-gray-500 mt-1 text-sm">{product.feature}</p>}
        </div>
      </div>
    )
  }

  return (
    <section className="py-8 px-4 md:px-12">
      {/* 产品网格 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentData.map((product) => (
          <ProductCard key={product.image} product={product} />
        ))}
      </div>

      {/* 分页按钮 */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          <button
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
          >
            上一页
          </button>
          <span className="px-4 py-2">
            {currentPage} / {totalPages}
          </span>
          <button
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
          >
            下一页
          </button>
        </div>
      )}
    </section>
  )
}
