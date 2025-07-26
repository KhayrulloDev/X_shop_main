import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Clock, CheckCircle2, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function OrdersPage() {
  // In a real app, you would fetch orders from an API
  const orders = [
    {
      id: "ORD-12345",
      date: "2025-04-15",
      total: 543000,
      status: "delivered",
      items: [
        {
          id: "1",
          name: "Smartfon Honor X9b",
          image: "/placeholder.svg?height=80&width=80",
          price: 212429,
          quantity: 1,
        },
        {
          id: "2",
          name: "Qahva Jacobs Monarch",
          image: "/placeholder.svg?height=80&width=80",
          price: 2549,
          quantity: 2,
        },
      ],
    },
    {
      id: "ORD-12346",
      date: "2025-04-10",
      total: 349000,
      status: "processing",
      items: [
        {
          id: "5",
          name: "Samsung Galaxy A54",
          image: "/placeholder.svg?height=80&width=80",
          price: 349000,
          quantity: 1,
        },
      ],
    },
    {
      id: "ORD-12347",
      date: "2025-03-28",
      total: 1249000,
      status: "cancelled",
      items: [
        {
          id: "6",
          name: "Apple iPhone 15",
          image: "/placeholder.svg?height=80&width=80",
          price: 1249000,
          quantity: 1,
        },
      ],
    },
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("uz-UZ").format(price)
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
    return new Date(dateString).toLocaleDateString("uz-UZ", options)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "processing":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
            <Clock className="h-3 w-3 mr-1" /> Jarayonda
          </Badge>
        )
      case "delivered":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200">
            <CheckCircle2 className="h-3 w-3 mr-1" /> Yetkazildi
          </Badge>
        )
      case "cancelled":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200">
            <AlertTriangle className="h-3 w-3 mr-1" /> Bekor qilindi
          </Badge>
        )
      default:
        return <Badge>{status}</Badge>
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex items-center h-16 px-4">
          <Link href="/account" className="mr-4">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-lg font-medium">Mening buyurtmalarim</h1>
        </div>
      </header>

      <main className="flex-1 pb-20">
        <div className="container px-4 py-6">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full grid grid-cols-3 mb-4">
              <TabsTrigger value="all">Hammasi</TabsTrigger>
              <TabsTrigger value="processing">Jarayonda</TabsTrigger>
              <TabsTrigger value="delivered">Yetkazildi</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
                  <div className="p-4 border-b flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-500">Buyurtma raqami</div>
                      <div className="font-medium">{order.id}</div>
                    </div>

                    <div className="text-right">
                      <div className="text-sm text-gray-500">{formatDate(order.date)}</div>
                      {getStatusBadge(order.status)}
                    </div>
                  </div>

                  <div className="p-4">
                    {order.items.map((item) => (
                      <div key={item.id} className="flex gap-3 py-2">
                        <div className="w-16 h-16 relative bg-gray-50 rounded overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-grow">
                          <div className="text-sm font-medium line-clamp-2">{item.name}</div>
                          <div className="text-sm text-gray-500">Soni: {item.quantity}</div>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">{formatPrice(item.price)} so&apos;m</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 p-4 flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-500">Jami summa:</div>
                      <div className="font-bold text-lg">{formatPrice(order.total)} so&apos;m</div>
                    </div>

                    <Link href={`/account/orders/${order.id}`}>
                      <Button variant="outline" className="flex gap-1 items-center">
                        Batafsil <ChevronRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="processing" className="space-y-4">
              {orders
                .filter((o) => o.status === "processing")
                .map((order) => (
                  <div key={order.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
                    {/* Same content as above */}
                    <div className="p-4 border-b flex justify-between items-center">
                      <div>
                        <div className="text-sm text-gray-500">Buyurtma raqami</div>
                        <div className="font-medium">{order.id}</div>
                      </div>

                      <div className="text-right">
                        <div className="text-sm text-gray-500">{formatDate(order.date)}</div>
                        {getStatusBadge(order.status)}
                      </div>
                    </div>

                    <div className="p-4">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex gap-3 py-2">
                          <div className="w-16 h-16 relative bg-gray-50 rounded overflow-hidden flex-shrink-0">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="flex-grow">
                            <div className="text-sm font-medium line-clamp-2">{item.name}</div>
                            <div className="text-sm text-gray-500">Soni: {item.quantity}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{formatPrice(item.price)} so&apos;m</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gray-50 p-4 flex justify-between items-center">
                      <div>
                        <div className="text-sm text-gray-500">Jami summa:</div>
                        <div className="font-bold text-lg">{formatPrice(order.total)} so&apos;m</div>
                      </div>

                      <Link href={`/account/orders/${order.id}`}>
                        <Button variant="outline" className="flex gap-1 items-center">
                          Batafsil <ChevronRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
            </TabsContent>

            <TabsContent value="delivered" className="space-y-4">
              {orders
                .filter((o) => o.status === "delivered")
                .map((order) => (
                  <div key={order.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
                    {/* Same content as above */}
                    <div className="p-4 border-b flex justify-between items-center">
                      <div>
                        <div className="text-sm text-gray-500">Buyurtma raqami</div>
                        <div className="font-medium">{order.id}</div>
                      </div>

                      <div className="text-right">
                        <div className="text-sm text-gray-500">{formatDate(order.date)}</div>
                        {getStatusBadge(order.status)}
                      </div>
                    </div>

                    <div className="p-4">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex gap-3 py-2">
                          <div className="w-16 h-16 relative bg-gray-50 rounded overflow-hidden flex-shrink-0">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                          <div className="flex-grow">
                            <div className="text-sm font-medium line-clamp-2">{item.name}</div>
                            <div className="text-sm text-gray-500">Soni: {item.quantity}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{formatPrice(item.price)} so&apos;m</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-gray-50 p-4 flex justify-between items-center">
                      <div>
                        <div className="text-sm text-gray-500">Jami summa:</div>
                        <div className="font-bold text-lg">{formatPrice(order.total)} so&apos;m</div>
                      </div>

                      <Link href={`/account/orders/${order.id}`}>
                        <Button variant="outline" className="flex gap-1 items-center">
                          Batafsil <ChevronRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
