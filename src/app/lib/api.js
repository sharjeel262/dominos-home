export async function getProducts() {
  try {
    console.log('Fetching from URL:', `${process.env.NEXT_PUBLIC_API_URL}/api/products?populate=*`);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?populate=*`);
    if (!res.ok) {
      console.error('API Response not OK:', res.status, res.statusText);
      throw new Error('Failed to fetch products');
    }
    const data = await res.json();
    console.log('Raw API Response:', JSON.stringify(data, null, 2));

    if (!data.data || !Array.isArray(data.data)) {
      console.error('Invalid data format:', data);
      return [];
    }

    const mappedProducts = data.data.map(product => {
      console.log('Processing product:', product);
      const mappedProduct = {
        id: product.id,
        title: product.Name || '',
        description: product.Description || '',
        price: product.Price || 0,
        image: {
          url: product.Image?.url || null,
          formats: product.Image?.formats || null
        }
      };
      console.log('Mapped product:', mappedProduct);
      return mappedProduct;
    });

    console.log('Final mapped products:', mappedProducts);
    return mappedProducts;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function getProductById(id) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}?populate=*`);
    if (!res.ok) {
      console.error('API Response not OK:', res.status, res.statusText);
      throw new Error('Failed to fetch product');
    }
    const data = await res.json();
    console.log('API Response for single product:', data);

    if (!data.data) {
      console.error('Invalid data format:', data);
      return null;
    }

    return {
      id: data.data.id,
      title: data.data.Name || '',
      description: data.data.Description || '',
      price: data.data.Price || 0,
      image: {
        url: data.data.Image?.url || null,
        formats: data.data.Image?.formats || null
      }
    };
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}
