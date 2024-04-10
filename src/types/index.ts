// Определение типа для товара
export type ProductType = {
  id: number;
  name: string;
  image: string;
};

// Определение типа для элемента в корзине
export type CartItemType = {
  id: number;
  name: string;
  quantity: number;
};
