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
import { useState } from 'react';

export default function ProductCard({ product }) {
  if (!product) return null;
  const [isFavorite, setIsFavorite] = useState(false);

  const { title, description, price, image } = product;
  const imageUrl = image?.url || null;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full">
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
      <div className="p-3 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-800 line-clamp-1">
            {title}
          </h3>
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className="focus:outline-none"
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart 
              className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-red-500'} cursor-pointer hover:scale-110 transition-transform`} 
            />
          </button>
        </div>
        <p className="text-xs text-gray-500 mb-3 leading-tight line-clamp-2 min-h-[32px]">
          {description}
        </p>
        <p className="text-[#007FAA] text-sm font-bold mb-2">Rs. {price}</p>

        {/* Add to Cart Button + Modal */}
        <div className="mt-auto">
          <Dialog>
            <DialogTrigger asChild>
              <button
                className="w-full bg-[#006A84] hover:bg-[#00596e] text-white font-medium py-2 rounded-md flex items-center justify-center gap-2 text-sm transition-colors"
              >
                <ShoppingCart className="w-4 h-4" />
                Add To Cart
              </button>
            </DialogTrigger>
            <DialogContent className="p-0 max-w-md sm:max-w-lg w-[90vw]">
              <DialogTitle className="sr-only">Product Details</DialogTitle>
              <ProductDetail product={product} />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
