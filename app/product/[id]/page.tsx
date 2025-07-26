import type { Metadata } from "next"

interface ProductPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  // In a real app, you would fetch product data based on the ID
  const product = {
    id: params.id,
    name: "Smartfon Honor X9b, 120 Hz, 5800 mA/soat",
    description:
      "Honor X9b smartfoni 6.78 dyuymli AMOLED-displey, 120 Gts yangilanish chastotasi, Snapdragon 6 Gen 1 protsessori, 8 Gb operativ xotira, 256 Gb ichki xotira, 5800 mA/soat batareya va 108 MP asosiy kamera bilan jihozlangan.",
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      type: "website", // Changed from "product" to "website"
      images: [
        {
          url: "/placeholder.svg?height=500&width=500",
          width: 500,
          height: 500,
          alt: product.name,
        },
      ],
    },
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  // In a real app, you would fetch product data based on the ID
  const product = {
    id: params.id,
    name: "Smartfon Honor X9b, 120 Hz, 5800 mA/soat",
    description:
      "Honor X9b smartfoni 6.78 dyuymli AMOLED-displey, 120 Gts yangilanish chastotasi, Snapdragon 6 Gen 1 protsessori, 8 Gb operativ xotira, 256 Gb ichki xotira, 5800 mA/soat batareya va 108 MP asosiy kamera bilan jihozlangan.",
    price: 212429,
    oldPrice: 2999000,
    rating: 4.9,
    reviews: 15,
    images: [
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
    specs: {
      display: '6.78" AMOLED, 120 Hz',
      processor: "Snapdragon 6 Gen 1",
      ram: "8 GB",
      storage: "256 GB",
      battery: "5800 mAh",
      camera: "108 MP + 5 MP + 2 MP",
      os: "Android 13, MagicOS 7.1",
    },
    colors: ["Black", "Green", "Silver"],
    inStock: true,
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("uz-UZ").format(price)
  }

  const relatedProducts = [
    {
      id: "2",
      name: "Honor X8a",
      image: "/placeholder.svg?height=200&width=200",
      price: 189000,
      oldPrice: 219000,
      rating: 4.7,
      reviews: 42,
      badge: "Super narx",
    },
    {
      id: "3",
      name: "Honor Magic5 Lite",
      image: "/placeholder.svg?height=200&width=200",
      price: 299000,
      oldPrice: 349000,
      rating: 4.8,
      reviews: 23,
      badge: "Chegirma",
    }]}
