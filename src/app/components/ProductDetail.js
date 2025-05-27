'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ProductDetail = ({ product }) => {
  if (!product) return null;

  const { title, description, price, image } = product;
  const imageUrl = image?.url || null;

  const [quantity, setQuantity] = useState(1);
  const total = price * quantity;

  return (
    <div className="flex flex-col max-h-[90vh] overflow-y-auto bg-white rounded-xl">
      {/* Image Section */}
      {imageUrl && (
        <div className="relative w-full h-80 sm:h-96 bg-white">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover rounded-b-xl"
            priority
            unoptimized
          />
        </div>
      )}

      {/* Product Info */}
      <div className="px-4 py-3">
        <h2 className="text-base sm:text-lg font-semibold text-gray-900">{title}</h2>
        <p className="text-sm text-gray-600 mb-2">{description}</p>

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-[#007FAA]">Rs. {price}</span>
        </div>
      </div>

      {/* Bottom Sticky Bar */}
      <div className="mt-auto px-4 py-3 border-t border-gray-200 flex items-center justify-between bg-white sticky bottom-0">
        {/* Quantity Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setQuantity(q => q > 1 ? q - 1 : q)}
            className="bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 text-lg flex items-center justify-center font-bold text-gray-600"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="text-base font-semibold">{quantity}</span>
          <button
            onClick={() => setQuantity(q => q + 1)}
            className="bg-[#006A84] hover:bg-[#00596e] rounded-full w-8 h-8 text-white text-lg flex items-center justify-center font-bold"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        {/* Add to Order */}
        <button
          className="bg-[#87bdd2] hover:bg-[#006A84] text-white font-semibold px-5 py-2 rounded-md text-sm flex items-center gap-2 transition-colors"
        >
          Add to Order
          <span className="font-bold px-3 py-1 rounded text-sm">
            Rs. {total}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
