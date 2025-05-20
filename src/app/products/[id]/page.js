import { getProductById } from "@/app/lib/";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({ params }) {
  const product = await getProductById(params.id);
  if (!product) return notFound();

  const { title, description, price, image } = product;
  const imageUrl = image?.url
    ? `${process.env.NEXT_PUBLIC_API_URL}${image.url}`
    : '/placeholder-pizza.jpg';

  return (
    <div className="min-h-screen p-8 pb-20">
      <header className="mb-8">
        <Link href="/" className="text-red-600 hover:underline">← Back to Menu</Link>
        <h1 className="text-3xl font-bold mt-4">{title}</h1>
      </header>

      <main className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <div className="relative h-64 w-full mb-6">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">{title}</h2>
              <p className="text-gray-600">{description}</p>
              
              <div className="flex items-center justify-between mt-8">
                <span className="text-2xl font-bold">Rs. {price}</span>
                <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md text-lg transition-colors">
                  Add to Order Rs. {price}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-16 text-center text-gray-500">
        <p>© 2025 Domino's Clone. All rights reserved.</p>
      </footer>
    </div>
  );
}