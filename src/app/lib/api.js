export async function getProducts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?populate=*`);
    if (!res.ok) throw new Error('Failed to fetch products');
    const data = await res.json();

    return data.data.map(product => ({
      id: product.id,
      title: product.Name,
      description: product.Description,
      price: product.Price,
      image: {
        url: product.Image?.url || null,
      }
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getProductById(id) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}?populate=*`);
    if (!res.ok) throw new Error('Failed to fetch product');
    const data = await res.json();

    return {
      id: data.data.id,
      title: data.data.Name,
      description: data.data.Description,
      price: data.data.Price,
      image: {
        url: data.data.Image?.url || null,
      }
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}
