import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"

export default function CartPage() {
  // In a real app, you would fetch cart data from an API or state management
  const cartItems = [
    {
      id: "1",
      name: "Smartfon Honor X9b, 120 Hz, 5800 mA/soat",
      price: 212429,
      quantity: 1,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      id: "2",
      name: "Qahva Jacobs Monarch, 95 g",
      price: 2549,
      quantity: 2,
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("uz-UZ").format(price)
  }

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  const shipping = 15000
  const total = subtotal + shipping

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex items-center h-16 px-4">
          <Link href="/" className="mr-4">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-lg font-medium">Savat</h1>
        </div>
      </header>

      <main className="flex-1 pb-20">
        <div className="container px-4 py-6">
          {cartItems.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-3">
              <div className="md:col-span-2">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 border rounded-lg p-4">
                      <div className="relative w-20 h-20 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <Link href={`/product/${item.id}`} className="hover:underline">
                          <h3 className="font-medium line-clamp-2">{item.name}</h3>
                        </Link>

                        <div className="mt-2 flex justify-between items-center">
                          <div className="font-bold">{formatPrice(item.price)} so&apos;m</div>

                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>

                      <Button variant="ghost" size="icon" className="text-red-500">
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-1">
                <div className="border rounded-lg p-4 sticky top-20">
                  <h2 className="text-lg font-bold mb-4">Buyurtma ma&apos;lumotlari</h2>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Mahsulotlar ({cartItems.length})</span>
                      <span>{formatPrice(subtotal)} so&apos;m</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Yetkazib berish</span>
                      <span>{formatPrice(shipping)} so&apos;m</span>
                    </div>

                    <Separator />

                    <div className="flex justify-between font-bold">
                      <span>Jami</span>
                      <span>{formatPrice(total)} so&apos;m</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-4">
                    <div className="flex gap-2">
                      <Input placeholder="Promokod" className="flex-1" />
                      <Button variant="outline">Qo&apos;llash</Button>
                    </div>

                    <Button className="w-full" size="lg">
                      Buyurtma berish
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-2">Savatingiz bo&apos;sh</h2>
              <p className="text-gray-500 mb-6">Savatingizga hali hech narsa qo&apos;shmadingiz</p>
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
