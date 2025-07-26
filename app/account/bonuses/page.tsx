import Link from "next/link"
import { ChevronLeft, Gift, Ticket, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

export default function BonusesPage() {
  // In a real app, you would fetch bonuses/coupons from an API
  const bonusPoints = 325
  const totalPointsForNextLevel = 500
  const currentLevel = "Silver"
  const nextLevel = "Gold"

  const coupons = [
    {
      id: 1,
      title: "15% chegirma barcha mahsulotlarga",
      code: "WELCOME15",
      expiryDate: "2025-05-15",
      minAmount: 100000,
      isActive: true,
    },
    {
      id: 2,
      title: "50,000 so'm chegirma elektron mahsulotlarga",
      code: "TECH50K",
      expiryDate: "2025-04-30",
      minAmount: 500000,
      isActive: true,
    },
    {
      id: 3,
      title: "Bepul yetkazib berish",
      code: "FREESHIP",
      expiryDate: "2025-04-25",
      minAmount: 200000,
      isActive: false,
    },
  ]

  const history = [
    {
      id: 1,
      date: "2025-04-15",
      description: "Buyurtma #ORD-12345 uchun ball qo'shildi",
      points: "+50",
      type: "earning",
    },
    {
      id: 2,
      date: "2025-04-10",
      description: "Sharhingiz uchun ball qo'shildi",
      points: "+25",
      type: "earning",
    },
    {
      id: 3,
      date: "2025-04-05",
      description: "Chegirma uchun ball ishlatildi",
      points: "-100",
      type: "spending",
    },
  ]

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("uz-UZ", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex items-center h-16 px-4">
          <Link href="/account" className="mr-4">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-lg font-medium">Bonus va kuponlar</h1>
        </div>
      </header>

      <main className="flex-1 pb-20">
        <div className="container px-4 py-6">
          {/* Bonus points card */}
          <Card className="bg-gradient-to-r from-rose-500 to-rose-600 text-white mb-6">
            <CardContent className="p-6">
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Gift className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Sizning ballaringiz</h3>
                    <p className="text-3xl font-bold">{bonusPoints}</p>
                  </div>
                </div>
                <Button className="bg-white text-rose-600 hover:bg-gray-100">Sarflash</Button>
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex justify-between items-center text-sm">
                  <span>{currentLevel} daraja</span>
                  <span>{nextLevel} daraja</span>
                </div>
                <Progress value={(bonusPoints / totalPointsForNextLevel) * 100} className="h-2 bg-white/30" />
                <p className="text-sm">
                  {nextLevel} darajaga yetish uchun yana {totalPointsForNextLevel - bonusPoints} ball to'plang
                </p>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="coupons" className="w-full">
            <TabsList className="w-full grid grid-cols-2 mb-4">
              <TabsTrigger value="coupons">Kuponlar</TabsTrigger>
              <TabsTrigger value="history">Ballar tarixi</TabsTrigger>
            </TabsList>

            <TabsContent value="coupons" className="space-y-4">
              {coupons.map((coupon) => (
                <Card key={coupon.id} className={!coupon.isActive ? "opacity-60" : ""}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div className="flex gap-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${coupon.isActive ? "bg-rose-100 text-rose-600" : "bg-gray-100 text-gray-500"}`}
                        >
                          <Ticket className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-medium">{coupon.title}</h3>
                          <p className="text-sm text-gray-500 mt-1">
                            Kod: <span className="font-mono font-medium">{coupon.code}</span>
                          </p>
                          <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                            <Calendar className="h-3 w-3" />
                            <span>Amal qilish muddati: {formatDate(coupon.expiryDate)}</span>
                          </div>
                          {coupon.minAmount > 0 && (
                            <p className="text-xs text-gray-500 mt-1">
                              Minimal buyurtma: {coupon.minAmount.toLocaleString("uz-UZ")} so'm
                            </p>
                          )}
                        </div>
                      </div>

                      {coupon.isActive && (
                        <Button variant="outline" size="sm">
                          Ishlatish
                        </Button>
                      )}
                      {!coupon.isActive && (
                        <Badge variant="outline" className="bg-gray-100 text-gray-500">
                          Ishlatilgan
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="history" className="space-y-4">
              {history.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{item.description}</h3>
                        <p className="text-sm text-gray-500 mt-1">{formatDate(item.date)}</p>
                      </div>
                      <div className={`font-medium ${item.type === "earning" ? "text-green-600" : "text-red-600"}`}>
                        {item.points}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
