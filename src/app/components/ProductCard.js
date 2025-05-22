'use client';
import { ShoppingCart, Heart } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  if (!product) return null;

  const { id, title, description, price, image } = product;
  const imageUrl = image?.url
    ? `${process.env.NEXT_PUBLIC_API_URL}${image.url}`
    : null;

  return (
<div className="bg-white p-0 rounded-2xl shadow-2xl overflow-hidden transition-shadow w-full font-sans">
      {/* Image and title link to detail page */}
      <Link href={`/products/${id}`} className="block">
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
        <div className="p-3">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-[15px] mb-2 uppercase tracking-wide text-gray-800 line-clamp-2">
              {title}</h3>            
              <Heart className="w-5 h-5 text-red-500" />
          </div>
          <p className="text-[13px] text-gray-400 mb-4 leading-tight line-clamp-2">
            {description}
          </p>
          <p className="text-[rgb(0,127,170)] text-[14px] font-bold">Rs. {price}</p>
        </div>
      </Link>

      {/* Add to Cart Button outside Link */}
      <div className="px-3 pb-3">
        <button
          className="w-full bg-[rgb(14,104,134)] text-white font-medium py-2 px-2 rounded-md transition-colors flex items-center justify-center gap-2 text-[14px]"
          onClick={() => alert(`Added ${title} to cart!`)}
        >
          <ShoppingCart className="w-4 h-4" />
          Add To Cart
        </button>
      </div>
    </div>
  );
}
