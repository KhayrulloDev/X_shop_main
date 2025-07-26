import Link from "next/link"
import { ChevronLeft, Bell, Tag, Package, ShoppingCart, Truck } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function NotificationsPage() {
  // In a real app, you would fetch notifications from an API
  const notifications = [
    {
      id: 1,
      type: "order",
      title: "Buyurtmangiz yo'lda",
      message: "Buyurtmangiz #ORD-12346 yetkazib berilmoqda. Tez orada yetkazib beruvchi siz bilan bog'lanadi.",
      date: "2025-04-20T14:30:00",
      read: false,
      icon: <Truck className="h-5 w-5" />,
    },
    {
      id: 2,
      type: "promo",
      title: "Yangi chegirmalar",
      message: "Maxsus taklif: elektron mahsulotlar uchun 30% chegirma. Shoshiling, taklif cheklangan!",
      date: "2025-04-19T09:15:00",
      read: false,
      icon: <Tag className="h-5 w-5" />,
    },
    {
      id: 3,
      type: "order",
      title: "Buyurtmangiz yetib keldi",
      message: "Buyurtmangiz #ORD-12345 muvaffaqiyatli yetkazib berildi. Xaridingiz uchun rahmat!",
      date: "2025-04-15T16:45:00",
      read: true,
      icon: <Package className="h-5 w-5" />,
    },
    {
      id: 4,
      type: "cart",
      title: "Savatingizga qaytish",
      message: "Sizning savatingizda mahsulotlar kutmoqda. Xaridingizni yakunlang!",
      date: "2025-04-14T11:20:00",
      read: true,
      icon: <ShoppingCart className="h-5 w-5" />,
    },
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 3600 * 24))

    if (diffDays === 0) {
      return "Bugun"
    } else if (diffDays === 1) {
      return "Kecha"
    } else {
      return date.toLocaleDateString("uz-UZ", { day: "numeric", month: "long" })
    }
  }

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString("uz-UZ", { hour: "2-digit", minute: "2-digit" })
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex items-center h-16 px-4">
          <Link href="/account" className="mr-4">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-lg font-medium">Bildirishnomalar</h1>
        </div>
      </header>

      <main className="flex-1 pb-20">
        <div className="container px-4 py-6">
          <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
            <h2 className="text-lg font-medium mb-4 flex items-center">
              <Bell className="h-5 w-5 mr-2 text-rose-600" /> Sozlamalar
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="push" className="font-medium">
                    Push bildirishnomalar
                  </Label>
                  <p className="text-sm text-gray-500">Smartfon qurilmangizga bildirishnomalar yuborish</p>
                </div>
                <Switch id="push" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email" className="font-medium">
                    Email bildirishnomalar
                  </Label>
                  <p className="text-sm text-gray-500">Email manzilingizga bildirishnomalar yuborish</p>
                </div>
                <Switch id="email" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="sms" className="font-medium">
                    SMS bildirishnomalar
                  </Label>
                  <p className="text-sm text-gray-500">Telefon raqamingizga SMS yuborish</p>
                </div>
                <Switch id="sms" />
              </div>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full grid grid-cols-3 mb-4">
              <TabsTrigger value="all">
                Hammasi
                <Badge className="ml-2 bg-rose-600">{notifications.filter((n) => !n.read).length}</Badge>
              </TabsTrigger>
              <TabsTrigger value="orders">Buyurtmalar</TabsTrigger>
              <TabsTrigger value="promos">Chegirmalar</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 rounded-lg bg-white shadow-sm relative ${notification.read ? "" : "border-l-4 border-rose-600"}`}
                >
                  {!notification.read && (
                    <div className="absolute top-4 right-4 w-2 h-2 bg-rose-600 rounded-full"></div>
                  )}

                  <div className="flex gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${notification.read ? "bg-gray-100" : "bg-rose-100"}`}
                    >
                      <div className={notification.read ? "text-gray-500" : "text-rose-600"}>{notification.icon}</div>
                    </div>

                    <div className="flex-1">
                      <h3 className="font-medium">{notification.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                      <div className="text-xs text-gray-500 mt-2">
                        {formatDate(notification.date)} • {formatTime(notification.date)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="orders" className="space-y-4">
              {notifications
                .filter((n) => n.type === "order")
                .map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-lg bg-white shadow-sm relative ${notification.read ? "" : "border-l-4 border-rose-600"}`}
                  >
                    {!notification.read && (
                      <div className="absolute top-4 right-4 w-2 h-2 bg-rose-600 rounded-full"></div>
                    )}

                    <div className="flex gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${notification.read ? "bg-gray-100" : "bg-rose-100"}`}
                      >
                        <div className={notification.read ? "text-gray-500" : "text-rose-600"}>{notification.icon}</div>
                      </div>

                      <div className="flex-1">
                        <h3 className="font-medium">{notification.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                        <div className="text-xs text-gray-500 mt-2">
                          {formatDate(notification.date)} • {formatTime(notification.date)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </TabsContent>

            <TabsContent value="promos" className="space-y-4">
              {notifications
                .filter((n) => n.type === "promo" || n.type === "cart")
                .map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-lg bg-white shadow-sm relative ${notification.read ? "" : "border-l-4 border-rose-600"}`}
                  >
                    {!notification.read && (
                      <div className="absolute top-4 right-4 w-2 h-2 bg-rose-600 rounded-full"></div>
                    )}

                    <div className="flex gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${notification.read ? "bg-gray-100" : "bg-rose-100"}`}
                      >
                        <div className={notification.read ? "text-gray-500" : "text-rose-600"}>{notification.icon}</div>
                      </div>

                      <div className="flex-1">
                        <h3 className="font-medium">{notification.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                        <div className="text-xs text-gray-500 mt-2">
                          {formatDate(notification.date)} • {formatTime(notification.date)}
                        </div>
                      </div>
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
