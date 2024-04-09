import { ProductType } from "../../types";

type ProductProps = {
  product: ProductType;
  onAddToCart: (product: ProductType) => void;
};

const Product: React.FC<ProductProps> = ({ product, onAddToCart }) => (
  <div>
    {product.name}
    <button onClick={() => onAddToCart(product)}>Добавить в корзину</button>
  </div>
);

export default Product;
