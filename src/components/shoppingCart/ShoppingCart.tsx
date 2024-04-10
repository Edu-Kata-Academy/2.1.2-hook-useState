import { useState, FC } from "react";
import CartItems from "../cartItems/CartItems";
import Product from "../product/Product";
import { CartItemType, ProductType } from "../../types";
import "./index.scss";
import { chocolate, cookie, tea } from "../../assets";

const ShoppingCart: FC = () => {
  const [cart, setCart] = useState<CartItemType[]>([]);

  const products: ProductType[] = [
    { id: 1, name: "Шоколад", image: chocolate },
    { id: 2, name: "Печенье", image: cookie },
    { id: 3, name: "Чай", image: tea },
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
    <div className="cart">
      <h2 className="cart__title">Товары:</h2>
      <div className="cart__item">
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
      <h2 className="catr__basket">Корзина:</h2>
      <CartItems cart={cart} />
    </div>
  );
};

export default ShoppingCart;
