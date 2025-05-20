'use client';
import { ShoppingCart, Heart } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  if (!product) return null;

  const { title, description, price, image } = product;
  const imageUrl = image?.url
    ? `${process.env.NEXT_PUBLIC_API_URL}${image.url}`
    : null;

  return (
    <div className="bg-white p-0 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow w-full max-w-[300px] font-sans">
      <Link href={`/products/${product.id}`}>
        {/* Image covering full width and top */}
        {imageUrl && (
          <div className="relative w-full h-48">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover rounded-b-xl"
              priority
            />
          </div>
        )}

        {/* Content below image */}
        <div className="p-3">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-[15px] mb-4 uppercase tracking-wide text-gray-800">{title}</h3>
            <Heart className="w-5 h-5 text-red-500 " />
          </div>
          <p className="text-[13px] text-gray-400 mb-6 leading-tight">
            {description}
          </p>
          <p className="text-[rgb(0,127,170)] text-[14px] font-bold mb-3">Rs. {price}</p>
          <button 
            className="w-full bg-[rgb(14,104,134)] hover:bg-[rgb(0,107,150)] text-white font-medium py-2 px-2 rounded-md transition-colors flex items-center justify-center gap-2 text-[14px]"
            onClick={(e) => e.preventDefault()}
          >
            <ShoppingCart className="w-4 h-4" />
            Add To Cart
          </button>
        </div>
      </Link>
    </div>
  );
}