import Link from "next/link"
import { ChevronLeft, ChevronRight, Grid, Home, Menu, Search, ShoppingCart, SlidersHorizontal, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import ProductCard from "@/components/product-card"
import type { Metadata } from "next"
import CategoryScroller from "@/components/category-scroller"

export const metadata: Metadata = {
  title: "Catalog - Browse All Products",
  description:
    "Browse our extensive catalog of products across various categories including electronics, fashion, and more",
}

export default function CatalogPage() {
  // In a real app, you would fetch categories and products from an API
  const categories = [
    { id: "1", name: "Smartfonlar", icon: "📱", count: 1245, color: "bg-rose-100" },
    { id: "2", name: "Noutbuklar", icon: "💻", count: 432, color: "bg-blue-100" },
    { id: "3", name: "Televizorlar", icon: "📺", count: 321, color: "bg-emerald-100" },
    { id: "4", name: "Planshetlar", icon: "📋", count: 198, color: "bg-amber-100" },
    { id: "5", name: "Quloqchinlar", icon: "🎧", count: 543, color: "bg-purple-100" },
    { id: "6", name: "Soatlar", icon: "⌚", count: 276, color: "bg-cyan-100" },
    { id: "7", name: "Kameralar", icon: "📷", count: 132, color: "bg-pink-100" },
    { id: "8", name: "O'yin konsollari", icon: "🎮", count: 87, color: "bg-indigo-100" },
  ]

  const products = [
    {
      id: "1",
      name: "Smartfon Honor X9b, 120 Hz, 5800 mA/soat",
      image: "/placeholder.svg?height=200&width=200",
      price: 212429,
      oldPrice: 2999000,
      rating: 4.9,
      reviews: 15,
      badge: "Super narx",
    },
    {
      id: "2",
      name: "Qahva Jacobs Monarch, 95 g",
      image: "/placeholder.svg?height=200&width=200",
      price: 2549,
      oldPrice: 35990,
      rating: 5.0,
      reviews: 3804,
      badge: "Super narx",
    },
    {
      id: "3",
      name: "Erkaklar uchun DISHE krossovkalari",
      image: "/placeholder.svg?height=200&width=200",
      price: 9845,
      oldPrice: 139000,
      rating: 5.0,
      reviews: 46,
      badge: "Super narx",
    },
    {
      id: "4",
      name: "Honor X9b 5G",
      image: "/placeholder.svg?height=200&width=200",
      price: 249000,
      oldPrice: 299000,
      rating: 4.8,
      reviews: 24,
      badge: "Super narx",
    },
    {
      id: "5",
      name: "Samsung Galaxy A54",
      image: "/placeholder.svg?height=200&width=200",
      price: 349000,
      oldPrice: 399000,
      rating: 4.7,
      reviews: 132,
      badge: "Chegirma",
    },
    {
      id: "6",
      name: "Apple iPhone 15",
      image: "/placeholder.svg?height=200&width=200",
      price: 1249000,
      oldPrice: 1399000,
      rating: 4.9,
      reviews: 87,
      badge: "Yangi",
    },
    {
      id: "7",
      name: "Xiaomi Redmi Note 12",
      image: "/placeholder.svg?height=200&width=200",
      price: 219000,
      oldPrice: 259000,
      rating: 4.6,
      reviews: 215,
      badge: "Super narx",
    },
    {
      id: "8",
      name: "Lenovo IdeaPad Laptop",
      image: "/placeholder.svg?height=200&width=200",
      price: 599000,
      oldPrice: 699000,
      rating: 4.8,
      reviews: 64,
      badge: "Chegirma",
    },
  ]

  const brands = []

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex items-center h-16 px-4">
          <Link href="/" className="mr-4">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-lg font-medium">Katalog</h1>
        </div>
      </header> */}

      <main className="flex-1 pb-20">
        <div className="container px-4 py-6">
          {/* Search bar */}
          <div className="mb-6 relative">
            <Input
              placeholder="Mahsulotlarni qidirish..."
              className="pl-10 pr-10 h-12 rounded-full"
              aria-label="Search products"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" aria-hidden="true" />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
              aria-label="Filter options"
            >
              <SlidersHorizontal className="h-5 w-5" />
            </Button>
          </div>

          {/* Categories section */}
          {/* <section aria-labelledby="categories-heading" className="mb-8">
            <h2 id="categories-heading" className="text-xl font-bold mb-4">
              Kategoriyalar
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/catalog/${category.id}`}
                  className="flex items-center gap-3 p-4 bg-white rounded-xl border hover:border-rose-200 hover:shadow-sm transition-all"
                  aria-label={`${category.name} category with ${category.count} products`}
                >
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${category.color}`}>
                    <span className="text-2xl" aria-hidden="true">
                      {category.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-medium">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.count} mahsulot</p>
                  </div>
                </Link>
              ))}
            </div>
          </section> */}

        <section className="py-4 px-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Kategoriyalar</h2>
            <Link href="/catalog" className="text-sm text-rose-600 flex items-center hover:underline">
              Hammasi <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <CategoryScroller categories={categories} />
        </section>

          {/* Brands filter */}
          <section aria-labelledby="brands-heading" className="mb-6">
            {/* <h2 id="brands-heading" className="text-xl font-bold mb-4">
              Smartfonlar
            </h2> */}
            <div className="flex gap-2 overflow-auto pb-4 scrollbar-hide">
              {brands.map((brand, index) => (
                <Badge
                  key={brand}
                  variant={index === 0 ? "default" : "outline"}
                  className="px-3 py-1 rounded-full whitespace-nowrap"
                >
                  {brand}
                </Badge>
              ))}
            </div>
          </section>

          {/* Products grid */}
          <section aria-labelledby="products-heading">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  rating={product.rating}
                  reviews={product.reviews}
                  badge={product.badge}
                />
              ))}
            </div>
          </section>
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t z-40 md:hidden">
          <div className="flex justify-between items-center px-6 py-3">
            <Link href="/" className="flex flex-col items-center">
              <Home className="h-6 w-6" />
              <span className="text-xs">Bosh sahifa</span>
            </Link>
            <Link href="/catalog" className="flex flex-col items-center text-rose-600">
              <Grid className="h-6 w-6" />
              <span className="text-xs">Katalog</span>
            </Link>
            <Link href="/cart" className="flex flex-col items-center">
              <ShoppingCart className="h-6 w-6" />
              <span className="text-xs">Savat</span>
            </Link>
            <Link href="/orders" className="flex flex-col items-center">
              <Menu className="h-6 w-6" />
              <span className="text-xs">Buyurtma</span>
            </Link>
            <Link href="/account" className="flex flex-col items-center">
              <User className="h-6 w-6" />
              <span className="text-xs">Kabinet</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}


