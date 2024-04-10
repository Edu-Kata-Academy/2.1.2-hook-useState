import { CartItemType } from "../../types";
import './index.scss'

type CartItemsProps = {
  cart: CartItemType[];
};

const CartItems: React.FC<CartItemsProps> = ({ cart }) => (
  <ul className="list">
    {cart.map((item) => (
      <li className="list__item" key={item.id}>
        {item.name} (x{item.quantity})
      </li>
    ))}
  </ul>
);

export default CartItems;
