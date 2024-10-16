export type Product = {
  id: string;
  name: string;
  price: string | number; // Ensure price can be string or number
  description: string;
  image: string;
  quantity: number;
};
