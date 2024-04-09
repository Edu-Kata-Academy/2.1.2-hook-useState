import { CartItemType } from "../../types";

type CartItemsProps = {
  cart: CartItemType[];
};

const CartItems: React.FC<CartItemsProps> = ({ cart }) => (
  <ul>
    {cart.map((item) => (
      <li key={item.id}>
        {item.name} (x{item.quantity})
      </li>
    ))}
  </ul>
);

export default CartItems;
