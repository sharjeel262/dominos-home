import React from "react";
import Image from "next/image";

export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
  const data = await res.json();

  return data?.data?.map((product) => ({
    id: product.id.toString(),
  }));
}

async function getProductById(id) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`, {
    next: { revalidate: 10 }, // Optional caching
  });
  const json = await res.json();
  return json.data;
}

export default async function ProductDetailPage({ params }) {
  const id = params.id;
  const product = await getProductById(id);

  if (!product) {
    return React.createElement("div", { className: "p-8 text-center" }, "Product not found");
  }

  const { title, description, price, image } = product;
  const imageUrl = image?.url ? `${process.env.NEXT_PUBLIC_API_URL}${image.url}` : null;

  return React.createElement(
    "div",
    { className: "max-w-4xl mx-auto p-6 font-sans" },
    React.createElement(
      "div",
      { className: "bg-white rounded-2xl shadow-xl overflow-hidden" },
      imageUrl &&
        React.createElement(
          "div",
          { className: "relative w-full h-96" },
          React.createElement(Image, {
            src: imageUrl,
            alt: title,
            fill: true,
            className: "object-cover",
            priority: true,
          })
        ),
      React.createElement(
        "div",
        { className: "p-6 space-y-4" },
        React.createElement("h1", { className: "text-3xl font-bold text-gray-800" }, title),
        React.createElement("p", { className: "text-gray-600 text-sm leading-relaxed" }, description),
        React.createElement("p", { className: "text-xl font-semibold text-[rgb(0,127,170)]" }, `Rs. ${price}`),
        React.createElement(
          "div",
          { className: "mt-4 flex gap-4" },
          React.createElement(
            "button",
            {
              className: "bg-[rgb(14,104,134)] text-white py-2 px-6 rounded-md hover:bg-[rgb(0,90,120)] transition",
            },
            "Add to Cart"
          ),
          React.createElement(
            "button",
            {
              className: "border border-red-500 text-red-500 py-2 px-6 rounded-md hover:bg-red-50 transition",
            },
            "❤️ Favorite"
          )
        )
      )
    )
  );
}
