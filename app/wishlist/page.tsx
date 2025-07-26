import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ShoppingCart, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WishlistPage() {
  // In a real app, you would fetch wishlist data from an API or state management
  const wishlistItems = [
    {
      id: "1",
      name: "Smartfon Honor X9b, 120 Hz, 5800 mA/soat",
      price: 212429,
      oldPrice: 2999000,
      image: "/placeholder.svg?height=200&width=200",
      inStock: true,
    },
    {
      id: "5",
      name: "Samsung Galaxy A54",
      price: 349000,
      oldPrice: 399000,
      image: "/placeholder.svg?height=200&width=200",
      inStock: true,
    },
    {
      id: "6",
      name: "Apple iPhone 15",
      price: 1249000,
      oldPrice: 1399000,
      image: "/placeholder.svg?height=200&width=200",
      inStock: false,
    },
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("uz-UZ").format(price)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex items-center h-16 px-4">
          <Link href="/" className="mr-4">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-lg font-medium">Sevimlilar</h1>
        </div>
      </header>

      <main className="flex-1 pb-20">
        <div className="container px-4 py-6">
          {wishlistItems.length > 0 ? (
            <div className="space-y-4">
              {wishlistItems.map((item) => (
                <div key={item.id} className="flex gap-4 border rounded-lg p-4">
                  <div className="relative w-20 h-20 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-contain p-2" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <Link href={`/product/${item.id}`} className="hover:underline">
                      <h3 className="font-medium line-clamp-2">{item.name}</h3>
                    </Link>

                    <div className="mt-1">
                      <div className="font-bold">{formatPrice(item.price)} so&apos;m</div>
                      {item.oldPrice && (
                        <div className="text-sm text-gray-500 line-through">{formatPrice(item.oldPrice)} so&apos;m</div>
                      )}
                    </div>

                    <div className="mt-2 flex gap-2">
                      <Button size="sm" className="h-8" disabled={!item.inStock}>
                        <ShoppingCart className="mr-1 h-4 w-4" />
                        {item.inStock ? "Savatga" : "Mavjud emas"}
                      </Button>
                    </div>
                  </div>

                  <Button variant="ghost" size="icon" className="text-red-500">
                    <Trash2 className="h-5 w-5" />
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-2">Sevimlilar ro&apos;yxati bo&apos;sh</h2>
              <p className="text-gray-500 mb-6">
                Siz hali hech qanday mahsulotni sevimlilar ro&apos;yxatiga qo&apos;shmadingiz
              </p>
              <Button asChild>
                <Link href="/">Xarid qilishni boshlash</Link>
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
