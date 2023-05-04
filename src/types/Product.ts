export default interface Product {
  id: number;
  sku: string;
  name: string;
  price: number;
  type: 'dvd' | 'furniture' | 'book';
  size?: number;
  height?: number;
  width?: number;
  length?: number;
  weight?: number;
}
