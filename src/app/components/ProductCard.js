'use client';
import { ShoppingCart, Heart } from 'lucide-react';
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import ProductDetail from './ProductDetail';

export default function ProductCard({ product }) {
  if (!product) return null;

  const { title, description, price, image } = product;
  const imageUrl = image?.url || null;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 font-sans overflow-hidden w-full">
      {/* Product Image */}
      {imageUrl && (
        <div className="relative w-full h-48">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
      )}

      {/* Product Info */}
      <div className="p-3">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-800 line-clamp-2">
            {title}
          </h3>
          <Heart className="w-5 h-5 text-red-500 cursor-pointer hover:scale-110 transition-transform" />
        </div>
        <p className="text-xs text-gray-500 mb-3 leading-tight line-clamp-2">
          {description}
        </p>
        <p className="text-[#007FAA] text-sm font-bold">Rs. {price}</p>
      </div>

      {/* Add to Cart Button + Modal */}
      <Dialog>
        <DialogTrigger asChild>
          <div className="px-3 pb-3">
            <button
              className="w-full bg-[#006A84] hover:bg-[#00596e] text-white font-medium py-2 rounded-md flex items-center justify-center gap-2 text-sm transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              Add To Cart
            </button>
          </div>
        </DialogTrigger>

        <DialogContent className="p-0 max-w-md sm:max-w-lg w-[90vw]">
          {/* Hidden header for accessibility and hydration integrity */}
          <DialogHeader className="p-0 hidden">
            <DialogTitle className="text-base font-semibold hidden">{title}</DialogTitle>
          </DialogHeader>

          <ProductDetail product={product} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
