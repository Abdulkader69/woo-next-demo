import axios from 'axios';
import wooApiService from './WooFetch';

const fetchData = async (url) => {
  try {
    const { data: fetchedData } = await axios.get(`${process.env.API_ENDPOINT}/${url}`);
    return fetchedData;
  } catch (err) {
    return false;
  }
};

export const getPosts = async () => {
  const posts = await fetchData('posts');
  return posts;
};

export const getProducts = async (params) => {
  try {
    // const urlParams = params ? `products?${params}` : 'products';
    const response = await wooApiService.get('products?per_page=50');
    return response.data;
  } catch (error) {
    return false;
  }
};

export const getTotalProducts = async () => {
  try {
    const response = await wooApiService.get('products?per_page=99999');
    return response.data;
  } catch (error) {
    return false;
  }
};

export const getProductsByCategory = async (categoryID) => {
  try {
    const response = await wooApiService.get(`products?_embed&product_cat=${categoryID}&per_page=8`);
    return response.data;
  } catch (error) {
    return false;
  }
};

export const getTotalProductPages = async () => {
  const totalProducts = await getTotalProducts();
  return totalProducts ? Math.ceil(totalProducts.length / 10) : 1;
};

export const getProductBySlug = async (slug) => {
  try {
    const product = await wooApiService.get(`products/?slug=${slug}`);
    return product.data;
  } catch (err) {
    return false;
  }
};

export const getNavById = async (id) => {
  const nav = await fetchData(`nav/${id}`);
  return nav;
};

export default { getPosts, getProductBySlug, getProducts, getTotalProducts, getTotalProductPages, getNavById };
