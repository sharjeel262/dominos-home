import { getProducts } from "@/app/lib/api";
import ProductCard from "@/app/components/ProductCard";

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="min-h-screen p-8 pb-20">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center mb-4">Domino's Pizza</h1>
        <h2 className="text-3xl font-bold ">MORE VALUE DEALS</h2>
        <div className="border-b-2 border-gray-800 my-6  "></div>
      </header>

      <main className="max-w-6xl mx-auto">
        {products.length === 0 ? (
          <p className="text-center">No products available</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <footer className="mt-16 text-center text-gray-500">
        <p>© 2025 Domino's Clone. All rights reserved.</p>
      </footer>
    </div>
  );
}
