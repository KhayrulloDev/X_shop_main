import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Plus, Edit2, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function PaymentMethodsPage() {
  // In a real app, you would fetch payment methods from an API
  const paymentMethods = [
    {
      id: 1,
      type: "card",
      name: "VISA",
      last4: "4242",
      expiryMonth: "12",
      expiryYear: "25",
      isDefault: true,
    },
    {
      id: 2,
      type: "card",
      name: "Mastercard",
      last4: "8456",
      expiryMonth: "09",
      expiryYear: "26",
      isDefault: false,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex items-center h-16 px-4">
          <Link href="/account" className="mr-4">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-lg font-medium">To'lov usullari</h1>
        </div>
      </header>

      <main className="flex-1 pb-20">
        <div className="container px-4 py-6">
          <div className="flex flex-col gap-4">
            {paymentMethods.map((method) => (
              <Card key={method.id} className={method.isDefault ? "border-rose-200 bg-rose-50" : ""}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-2 items-center">
                      <div className="w-10 h-6 relative">
                        <Image
                          src={`/placeholder.svg?height=24&width=40&text=${method.name}`}
                          alt={method.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <h3 className="font-medium">•••• •••• •••• {method.last4}</h3>
                      {method.isDefault && (
                        <Badge variant="outline" className="ml-2 bg-rose-100 border-rose-200 text-rose-700">
                          Standart
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <Separator className="my-3" />

                  <div className="text-sm text-gray-500">
                    <p>
                      Amal qilish muddati: {method.expiryMonth}/{method.expiryYear}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button variant="outline" className="w-full mt-4 border-dashed flex gap-2">
              <Plus className="h-4 w-4" /> Yangi to'lov usulini qo'shish
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
