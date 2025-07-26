import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Camera, Mail, Phone, Calendar, UserIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function ProfilePage() {
  // In a real app, you would fetch user data from an API or state management
  const user = {
    name: "Aziz Karimov",
    email: "aziz.karimov@example.com",
    phone: "+998 90 123 45 67",
    birthDate: "1990-05-15",
    gender: "male",
    avatar: "/placeholder.svg?height=200&width=200",
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex items-center h-16 px-4">
          <Link href="/account" className="mr-4">
            <ChevronLeft className="h-6 w-6" />
          </Link>
          <h1 className="text-lg font-medium">Shaxsiy ma&apos;lumotlar</h1>
        </div>
      </header>

      <main className="flex-1 pb-20">
        <div className="container px-4 py-6">
          <div className="flex flex-col items-center mb-8">
            <div className="relative mb-4">
              <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-sm">
                <Image
                  src={user.avatar || "/placeholder.svg"}
                  alt={user.name}
                  width={200}
                  height={200}
                  className="object-cover w-full h-full"
                />
              </div>
              <button className="absolute bottom-0 right-0 bg-rose-600 text-white p-2 rounded-full shadow-md">
                <Camera className="h-4 w-4" />
              </button>
            </div>
            <h2 className="text-xl font-bold">{user.name}</h2>
          </div>

          <div className="space-y-6 bg-white p-5 rounded-xl shadow-sm">
            <div className="grid gap-2">
              <Label htmlFor="fullName">To&apos;liq ism</Label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input id="fullName" defaultValue={user.name} className="pl-10" />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input id="email" type="email" defaultValue={user.email} className="pl-10" />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="phone">Telefon raqami</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input id="phone" type="tel" defaultValue={user.phone} className="pl-10" />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="birthDate">Tug&apos;ilgan sana</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input id="birthDate" type="date" defaultValue={user.birthDate} className="pl-10" />
              </div>
            </div>

            <div className="grid gap-2">
              <Label>Jins</Label>
              <RadioGroup defaultValue={user.gender} className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">Erkak</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">Ayol</Label>
                </div>
              </RadioGroup>
            </div>

            <Separator />

            <div className="flex justify-end">
              <Button className="bg-rose-600 hover:bg-rose-700">Saqlash</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
