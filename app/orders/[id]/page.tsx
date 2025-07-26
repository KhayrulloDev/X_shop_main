import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Clock, CheckCircle2, AlertTriangle, Package, MapPin, CreditCard, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

interface OrderDetailPageProps {
  params: {
    id: string
  }
}

export default function OrderDetailPage({ params }: OrderDetailPageProps) {
  // In a real app, you would fetch order details from an API using the ID
  const order = {
    id: params.id,
    date: "2025-04-15",
    total: 543000,
    status: "delivered",
    paymentMethod: "Visa **** 4242",
    shippingAddress: "Toshkent sh., Shayxontohur t., Navoiy ko'chasi, 36-uy",
    contactPhone: "+998 90 123 45 67",
    trackingNumber: "TN-123456789",
    deliveryDate: "2025-04-18",
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
  }

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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "processing":
        return <Clock className="h-5 w-5 text-blue-500" />
      case "delivered":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />
      case "cancelled":
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      default:
        return <Package className="h-5 w-5" />
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex items-center h-16 px-4">
          <Link href="/orders" className="mr-4">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-lg font-medium">Buyurtma {order.id}</h1>
        </div>
      </header>

      <main className="flex-1 pb-20">
        <div className="container px-4 py-6">
          <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-6">
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
              <div className="flex items-center gap-3 mb-4">
                {getStatusIcon(order.status)}
                <div>
                  <h3 className="font-medium">
                    {order.status === "delivered"
                      ? "Buyurtma yetkazib berildi"
                      : order.status === "processing"
                        ? "Buyurtma jarayonda"
                        : "Buyurtma bekor qilindi"}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {order.status === "delivered"
                      ? `Yetkazib berilgan sana: ${formatDate(order.deliveryDate)}`
                      : order.status === "processing"
                        ? "Buyurtmangiz tez orada yetkazib beriladi"
                        : "Buyurtma bekor qilindi"}
                  </p>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Yetkazib berish manzili</h4>
                    <p className="text-sm text-gray-600">{order.shippingAddress}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Aloqa telefoni</h4>
                    <p className="text-sm text-gray-600">{order.contactPhone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CreditCard className="h-5 w-5 text-gray-500 mt-0.5" />
                  <div>
                    <h4 className="font-medium">To'lov usuli</h4>
                    <p className="text-sm text-gray-600">{order.paymentMethod}</p>
                  </div>
                </div>

                {order.trackingNumber && (
                  <div className="flex items-start gap-3">
                    <Package className="h-5 w-5 text-gray-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Kuzatish raqami</h4>
                      <p className="text-sm text-gray-600">{order.trackingNumber}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-6">
            <div className="p-4 border-b">
              <h2 className="font-medium">Buyurtma tarkibi</h2>
            </div>

            <div className="p-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex gap-3 py-3 border-b last:border-0">
                  <div className="w-16 h-16 relative bg-gray-50 rounded overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="text-sm font-medium">{item.name}</div>
                    <div className="text-sm text-gray-500">Soni: {item.quantity}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{formatPrice(item.price)} so'm</div>
                    <div className="text-sm text-gray-500">Jami: {formatPrice(item.price * item.quantity)} so'm</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="p-4">
              <h2 className="font-medium mb-4">To'lov ma'lumotlari</h2>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Mahsulotlar narxi</span>
                  <span>{formatPrice(order.total - 15000)} so'm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Yetkazib berish</span>
                  <span>15,000 so'm</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-bold">
                  <span>Jami to'lov</span>
                  <span>{formatPrice(order.total)} so'm</span>
                </div>
              </div>
            </div>
          </div>

          {order.status === "delivered" && (
            <div className="mt-6 flex justify-center">
              <Button className="bg-rose-600 hover:bg-rose-700">Qayta buyurtma berish</Button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
