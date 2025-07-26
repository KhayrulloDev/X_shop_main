import Link from "next/link"
import { ChevronLeft, MapPin, Plus, Edit2, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function AddressesPage() {
  // In a real app, you would fetch addresses from an API
  const addresses = [
    {
      id: 1,
      name: "Uy",
      fullName: "Aziz Karimov",
      phone: "+998 90 123 45 67",
      address: "Amir Temur ko'chasi, 108-uy",
      city: "Toshkent",
      region: "Toshkent shahri",
      isDefault: true,
    },
    {
      id: 2,
      name: "Ish",
      fullName: "Aziz Karimov",
      phone: "+998 90 123 45 67",
      address: "Mustaqillik ko'chasi, 45-uy",
      city: "Toshkent",
      region: "Toshkent shahri",
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
          <h1 className="text-lg font-medium">Mening manzillarim</h1>
        </div>
      </header>

      <main className="flex-1 pb-20">
        <div className="container px-4 py-6">
          <div className="flex flex-col gap-4">
            {addresses.map((address) => (
              <Card key={address.id} className={address.isDefault ? "border-rose-200 bg-rose-50" : ""}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="flex gap-2 items-center">
                      <MapPin className="h-5 w-5 text-rose-600" />
                      <h3 className="font-medium">{address.name}</h3>
                      {address.isDefault && (
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

                  <div className="space-y-1 text-sm">
                    <p className="font-medium">{address.fullName}</p>
                    <p>{address.phone}</p>
                    <p>{address.address}</p>
                    <p>
                      {address.city}, {address.region}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button variant="outline" className="w-full mt-4 border-dashed flex gap-2">
              <Plus className="h-4 w-4" /> Yangi manzil qo'shish
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
