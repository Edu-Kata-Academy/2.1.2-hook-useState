import { useState, FC } from "react";
import CartItems from "../cartItems/CartItems";
import Product from "../product/Product";
import { CartItemType, ProductType } from "../../types";

const ShoppingCart: FC = () => {
  const [cart, setCart] = useState<CartItemType[]>([]);

  const products: ProductType[] = [
    { id: 1, name: "Шоколад" },
    { id: 2, name: "Печенье" },
    { id: 3, name: "Чай" },
  ];

  const addToCart = (product: ProductType) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.find((item) => item.id === product.id);
      if (isProductInCart) {
        return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <div>
      <h2>Товары:</h2>
      {products.map((product) => (
        <Product key={product.id} product={product} onAddToCart={addToCart} />
      ))}
      <h2>Корзина:</h2>
      <CartItems cart={cart} />
    </div>
  );
};

export default ShoppingCart;
