import Link from "next/link"
import { Search, Heart, ShoppingCart, User, Home, Grid, Menu, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import ProductCard from "@/components/product-card"
import BannerCarousel from "@/components/banner-carousel"
import CategoryScroller from "@/components/category-scroller"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description: "Discover the best deals on electronics, fashion, and more at Market - your one-stop online shop",
  openGraph: {
    title: "Market - Online Shop",
    description: "Discover the best deals on electronics, fashion, and more at Market - your one-stop online shop",
  },
}

export default function HomePage() {
  // Featured categories
  const categories = [
    { name: "Smartfonlar", icon: "📱", color: "bg-rose-100" },
    { name: "Noutbuklar", icon: "💻", color: "bg-blue-100" },
    { name: "Kiyim", icon: "👕", color: "bg-amber-100" },
    { name: "Televizorlar", icon: "📺", color: "bg-emerald-100" },
    { name: "Quloqchinlar", icon: "🎧", color: "bg-purple-100" },
    { name: "Soatlar", icon: "⌚", color: "bg-cyan-100" },
    { name: "Kosmetika", icon: "💄", color: "bg-pink-100" },
    { name: "O'yinlar", icon: "🎮", color: "bg-indigo-100" },
  ]

  // Banner data
  const banners = [
    {
      title: "-30 000",
      subtitle: "3 team buyurtmasiga",
      promo: "MARKET",
      ctaText: "Bo'limda mavjud",
      bgColor: "bg-purple-600",
      textColor: "text-white",
    },
    {
      title: "YANGI KOLLEKSIYA",
      subtitle: "Chegirmalar 50% gacha",
      promo: "FASHION",
      ctaText: "Hozir xarid qiling",
      bgColor: "bg-rose-500",
      textColor: "text-white",
    },
    {
      title: "PREMIUM AKSESSUARLAR",
      subtitle: "Limited Edition seriyasi",
      promo: "LUXURY",
      ctaText: "Kolleksiyani ko'rish",
      bgColor: "bg-amber-500",
      textColor: "text-black",
    },
    {
      title: "SMART UY TEXNIKASI",
      subtitle: "Aqlli uyingiz uchun",
      promo: "SMART",
      ctaText: "Mahsulotlarni ko'rish",
      bgColor: "bg-teal-500",
      textColor: "text-white",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex items-center h-16 px-4">
          <div className="flex items-center flex-1 gap-2">
            <div className="relative w-full max-w-md">
              <Input
                placeholder="Mahsulotlar va turkumlar izlash"
                className="h-10 w-full rounded-full pl-10"
                aria-label="Search products and categories"
              />
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/wishlist" aria-label="Wishlist">
              <Heart className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Banner carousel section */}
        <BannerCarousel banners={banners} />

        {/* Categories scroller */}
        <section className="py-4 px-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Kategoriyalar</h2>
            <Link href="/catalog" className="text-sm text-rose-600 flex items-center hover:underline">
              Hammasi <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <CategoryScroller categories={categories} />
        </section>

        {/* Flash deals section */}
        <section className="py-4 px-4 bg-gradient-to-r from-rose-50 to-rose-100">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-semibold">Flash Chegirmalar</h2>
              <Badge className="bg-rose-600">24 soat</Badge>
            </div>
            <Link href="/catalog" className="text-sm text-rose-600 flex items-center hover:underline">
              Hammasi <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="overflow-x-auto pb-2 scrollbar-hide">
            <div className="flex gap-1 min-w-max">
              <ProductCard
                id="1"
                name="Smartfon Honor X9b, 120 Hz, 5800 mA/soat"
                image="/placeholder.svg?height=200&width=200"
                price={212429}
                oldPrice={2999000}
                rating={4.9}
                reviews={15}
                badge="Super narx"
                discount="-25%"
              />
              <ProductCard
                id="2"
                name="Qahva Jacobs Monarch, 95 g"
                image="/placeholder.svg?height=200&width=200"
                price={2549}
                oldPrice={35990}
                rating={5.0}
                reviews={3804}
                badge="Super narx"
                discount="-30%"
              />
              <ProductCard
                id="3"
                name="Erkaklar uchun DISHE krossovkalari"
                image="/placeholder.svg?height=200&width=200"
                price={9845}
                oldPrice={139000}
                rating={5.0}
                reviews={46}
                badge="Super narx"
                discount="-40%"
              />
              <ProductCard
                id="4"
                name="Honor X9b 5G"
                image="/placeholder.svg?height=200&width=200"
                price={249000}
                oldPrice={299000}
                rating={4.8}
                reviews={24}
                badge="Super narx"
                discount="-15%"
              />
            </div>
          </div>
        </section>

        {/* Secondary banner */}
        <section className="px-4 py-6">
          <div className="rounded-xl overflow-hidden bg-gradient-to-r from-teal-500 to-cyan-500 relative">
            <div className="p-6 md:p-8 relative z-10 text-white">
              <h2 className="text-2xl font-bold mb-2">Yangi TX Ultra kolleksiyasi</h2>
              <p className="mb-4 max-w-md">Zamonaviy dizayndagi eng ilg'or va premium modellar endi mavjud</p>
              <Button className="bg-white text-teal-600 hover:bg-gray-100">Kolleksiyani ko'rish</Button>
            </div>
            <div className="absolute right-0 bottom-0 opacity-25">
              <div className="h-32 w-32 md:h-48 md:w-48 rounded-full bg-white/30 -mb-10 -mr-10"></div>
            </div>
          </div>
        </section>

        {/* Popular products section */}
        <section className="py-2 px-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Ommabop mahsulotlar</h2>
            <Link href="/popular" className="text-sm text-rose-600 flex items-center hover:underline">
              Hammasi <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            <ProductCard
              id="1"
              name="Smartfon Honor X9b, 120 Hz, 5800 mA/soat"
              image="/placeholder.svg?height=200&width=200"
              price={212429}
              oldPrice={2999000}
              rating={4.9}
              reviews={15}
              badge="Super narx"
            />
            <ProductCard
              id="2"
              name="Qahva Jacobs Monarch, 95 g"
              image="/placeholder.svg?height=200&width=200"
              price={2549}
              oldPrice={35990}
              rating={5.0}
              reviews={3804}
              badge="Super narx"
            />
            <ProductCard
              id="3"
              name="Erkaklar uchun DISHE krossovkalari"
              image="/placeholder.svg?height=200&width=200"
              price={9845}
              oldPrice={139000}
              rating={5.0}
              reviews={46}
              badge="Super narx"
            />
            <ProductCard
              id="4"
              name="Honor X9b 5G"
              image="/placeholder.svg?height=200&width=200"
              price={249000}
              oldPrice={299000}
              rating={4.8}
              reviews={24}
              badge="Super narx"
            />
            <ProductCard
              id="5"
              name="Samsung Galaxy A54"
              image="/placeholder.svg?height=200&width=200"
              price={349000}
              oldPrice={399000}
              rating={4.7}
              reviews={132}
              badge="Chegirma"
            />
          </div>
        </section>

        {/* New arrivals banner */}
        <section className="px-4 py-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden bg-gradient-to-r from-amber-400 to-amber-600 relative">
              <div className="p-6 relative z-10 text-white">
                <h2 className="text-xl font-bold mb-2">Yangi kelgan modellar</h2>
                <p className="mb-4">Eng so'nggi trendlar</p>
                <Button className="bg-white text-amber-600 hover:bg-gray-100">
                  Ko'rish <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden bg-gradient-to-r from-rose-400 to-rose-600 relative">
              <div className="p-6 relative z-10 text-white">
                <h2 className="text-xl font-bold mb-2">Yilning eng yaxshi takliflari</h2>
                <p className="mb-4">70% gacha chegirmalar</p>
                <Button className="bg-white text-rose-600 hover:bg-gray-100">
                  Ko'rish <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Recently viewed section */}
        <section className="py-2 px-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Yaqinda ko'rilgan</h2>
            <Link href="/history" className="text-sm text-rose-600 flex items-center hover:underline">
              Hammasi <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-4 min-w-max">
              <ProductCard
                id="6"
                name="Apple iPhone 15"
                image="/placeholder.svg?height=200&width=200"
                price={1249000}
                oldPrice={1399000}
                rating={4.9}
                reviews={87}
                badge="Yangi"
              />
              <ProductCard
                id="7"
                name="Xiaomi Redmi Note 12"
                image="/placeholder.svg?height=200&width=200"
                price={219000}
                oldPrice={259000}
                rating={4.6}
                reviews={215}
                badge="Super narx"
              />
              <ProductCard
                id="8"
                name="Lenovo IdeaPad Laptop"
                image="/placeholder.svg?height=200&width=200"
                price={599000}
                oldPrice={699000}
                rating={4.8}
                reviews={64}
                badge="Chegirma"
              />
              <ProductCard
                id="9"
                name="Samsung Galaxy Watch 6"
                image="/placeholder.svg?height=200&width=200"
                price={279000}
                oldPrice={329000}
                rating={4.7}
                reviews={38}
                badge="Chegirma"
              />
            </div>
          </div>
        </section>

        {/* Featured brands */}
        <section className="py-6 px-4 bg-white">
          <h2 className="text-xl font-semibold mb-5 text-center">Top Brendlar</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {["Samsung", "Apple", "Xiaomi", "Sony", "LG", "Honor"].map((brand) => (
              <div key={brand} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <span className="font-bold text-gray-500">{brand.substring(0, 1)}</span>
                </div>
                <span className="mt-2 text-sm">{brand}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t bg-white">
        <div className="container mx-auto px-4 py-8 hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Market</h3>
              <p className="text-gray-600 mb-4">
                Your one-stop shop for all your needs with the best prices and quality products
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Xaridorlar uchun</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-rose-600">
                    Buyurtma berish
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-rose-600">
                    To'lov usullari
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-rose-600">
                    Yetkazib berish
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-rose-600">
                    Qaytarish va almashtirish
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Kompaniya</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-rose-600">
                    Biz haqimizda
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-rose-600">
                    Yangiliklar
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-rose-600">
                    Vakansiyalar
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-rose-600">
                    Hamkorlik
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Aloqa</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">📍</span>
                  <span className="text-gray-600">Toshkent sh., Shayxontohur t., Navoiy ko'chasi, 36-uy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">📞</span>
                  <span className="text-gray-600">+998 71 123 45 67</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gray-600 mr-2">✉️</span>
                  <span className="text-gray-600">info@market.uz</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-gray-500">
            <p>© 2025 Market. Barcha huquqlar himoyalangan.</p>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white border-t z-40 md:hidden">
          <div className="flex justify-between items-center px-6 py-3">
            <Link href="/" className="flex flex-col items-center text-rose-600">
              <Home className="h-6 w-6" />
              <span className="text-xs">Bosh sahifa</span>
            </Link>
            <Link href="/catalog" className="flex flex-col items-center">
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
      </footer>
    </div>
  )
}
