import { ProductType } from "../../types";
import './index.scss'

type ProductProps = {
  product: ProductType;
  onAddToCart: (product: ProductType) => void;
};

const Product: React.FC<ProductProps> = ({ product, onAddToCart }) => (
  <div className="addtocart">
    {product.name}
    <img src={product.image} alt="" />
    <button className="addtocart__btn" onClick={() => onAddToCart(product)}>Добавить в корзину</button>
  </div>
);

export default Product;
