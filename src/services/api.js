import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';


export const getAllProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};


export const deleteProduct = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};


export const addProduct = async (product) => {
  const response = await axios.post(API_URL, product);
  return response.data;
};
