import Link from "next/link"
import Image from "next/image"
import {
  ChevronRight,
  User,
  Heart,
  ShoppingBag,
  CreditCard,
  Settings,
  LogOut,
  Bell,
  MapPin,
  Gift,
  HelpCircle,
  ShieldCheck,
  Home,
  Grid,
  ShoppingCart,
  Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export default function AccountPage() {
  // In a real app, you would fetch user data from an API or state management
  const user = {
    name: "Aziz Karimov",
    email: "aziz.karimov@example.com",
    phone: "+998 90 123 45 67",
    avatar: "/placeholder.svg?height=100&width=100",
    bonusPoints: 325,
    level: "Silver",
    totalOrders: 12,
  }

  const menuItems = [
    {
      icon: <User className="h-5 w-5" />,
      label: "Shaxsiy ma'lumotlar",
      href: "/account/profile",
    },
    {
      icon: <ShoppingBag className="h-5 w-5" />,
      label: "Buyurtmalarim",
      href: "/account/orders",
      badge: "3",
    },
    {
      icon: <Heart className="h-5 w-5" />,
      label: "Sevimlilar",
      href: "/wishlist",
    },
    {
      icon: <Bell className="h-5 w-5" />,
      label: "Bildirishnomalar",
      href: "/account/notifications",
      badge: "2",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Manzillarim",
      href: "/account/addresses",
    },
    {
      icon: <CreditCard className="h-5 w-5" />,
      label: "To'lov usullari",
      href: "/account/payment",
    },
    {
      icon: <Gift className="h-5 w-5" />,
      label: "Bonus va kuponlar",
      href: "/account/bonuses",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      label: "Xavfsizlik",
      href: "/account/security",
    },
    {
      icon: <HelpCircle className="h-5 w-5" />,
      label: "Yordam markazi",
      href: "/help",
    },
    {
      icon: <Settings className="h-5 w-5" />,
      label: "Sozlamalar",
      href: "/account/settings",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex items-center justify-between h-16 px-4">
          <h1 className="text-lg font-medium">Kabinet</h1>
        </div>
      </header>

      <main className="flex-1 pb-20">
        <div className="container px-4 py-6">
          {/* User summary section */}
          <div className="bg-gradient-to-r from-rose-500 to-rose-600 rounded-2xl p-5 text-white mb-6">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden bg-white/20 border-2 border-white/50">
                <Image src={user.avatar || "/placeholder.svg"} alt={user.name} fill className="object-cover" />
              </div>

              <div>
                <h2 className="font-bold text-xl">{user.name}</h2>
                <p className="text-white/90">{user.phone}</p>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4 text-sm">
              <div className="flex items-center gap-1 bg-white/20 px-3 py-1 rounded-full">
                <span className="font-medium">{user.level}</span>
                <span>darajasi</span>
              </div>
              <div>
                <span className="font-medium">{user.bonusPoints}</span>
                <span className="text-white/80 ml-1">bonus ball</span>
              </div>
            </div>
          </div>

          {/* Stats section */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-2xl font-bold text-rose-600">{user.totalOrders}</div>
              <div className="text-xs text-gray-500">Buyurtmalar</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-2xl font-bold text-rose-600">{user.bonusPoints}</div>
              <div className="text-xs text-gray-500">Bonuslar</div>
            </div>
            <div className="bg-white rounded-lg p-3 text-center shadow-sm">
              <div className="text-2xl font-bold text-rose-600">{user.level}</div>
              <div className="text-xs text-gray-500">Daraja</div>
            </div>
          </div>

          {/* Menu items */}
          <div className="bg-white rounded-xl shadow-sm">
            <div className="space-y-1">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-gray-500">{item.icon}</div>
                    <span>{item.label}</span>
                  </div>
                  <div className="flex items-center">
                    {item.badge && <Badge className="mr-2 bg-rose-600">{item.badge}</Badge>}
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Separator className="my-6" />

          <Button variant="outline" className="w-full text-red-500 hover:text-red-600 hover:bg-red-50">
            <LogOut className="mr-2 h-5 w-5" />
            Chiqish
          </Button>
        </div>
      </main>

      <footer className="border-t bg-white">
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t z-40">
          <div className="flex justify-between items-center px-6 py-3">
            <Link href="/" className="flex flex-col items-center">
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
            <Link href="/account" className="flex flex-col items-center text-rose-600">
              <User className="h-6 w-6" />
              <span className="text-xs">Kabinet</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
