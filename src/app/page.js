import { getProducts } from "../../src/app/lib/api";
import ProductCard from "../../src/app/components/ProductCard";

export default async function Home() {
  console.log('Environment variable:', process.env.NEXT_PUBLIC_API_URL);
  
  try {
    const products = await getProducts();
    console.log('Products in page component:', products);

    return (
      <div className="min-h-screen p-8 pb-20">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-center mb-4">Domino's Pizza</h1>
          <h2 className="text-3xl font-bold ">MORE VALUE DEALS</h2>
          <div className="border-b-2 border-gray-800 my-6  "></div>
        </header>

        <main className="max-w-6xl mx-auto">
          {!products || products.length === 0 ? (
            <div className="text-center">
              <p className="text-red-500">No products available</p>
              <p className="text-sm text-gray-500 mt-2">Please check the console for more details</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-2">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </main>
      </div>
    );
  } catch (error) {
    console.error('Error in page component:', error);
    return (
      <div className="min-h-screen p-8 pb-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-500 mb-4">Error Loading Products</h1>
          <p className="text-gray-500">Please check the console for more details</p>
        </div>
      </div>
    );
  }
}
