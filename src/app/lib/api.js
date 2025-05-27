export async function getProducts() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?populate=*`);
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await res.json();

    if (!data.data || !Array.isArray(data.data)) {
      return [];
    }

    const mappedProducts = data.data.map(product => ({
      id: product.id,
      title: product.Name || '',
      description: product.Description || '',
      price: product.Price || 0,
      image: {
        url: product.Image?.url || null,
        formats: product.Image?.formats || null
      }
    }));

    return mappedProducts;
  } catch (error) {
    return [];
  }
}

export async function getProductById(id) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}?populate=*`);
    if (!res.ok) {
      throw new Error('Failed to fetch product');
    }
    const data = await res.json();

    if (!data.data) {
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
    return null;
  }
}

export async function getBanners() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/banners?populate=*`);
    if (!res.ok) {
      throw new Error('Failed to fetch banners');
    }
    const data = await res.json();

    if (!data.data || !Array.isArray(data.data)) {
      return [];
    }

    return data.data.map(banner => ({
      id: banner.id,
      title: banner.attributes.title || '',
      description: banner.attributes.description || '',
      image: {
        url: banner.attributes.image?.data?.attributes?.url || null,
        formats: banner.attributes.image?.data?.attributes?.formats || null
      }
    }));
  } catch (error) {
    return [];
  }
}
