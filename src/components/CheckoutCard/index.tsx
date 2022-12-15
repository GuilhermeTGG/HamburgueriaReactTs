import { Product } from "../../types";
import * as styled from "./styles";
import { useState } from "react";

interface CheckoutCardProps {
  product: Product;
}

const CheckoutCard = ({ product }: CheckoutCardProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [description, setDescription] = useState<string>("");

  return (
    <div>
      <div>
        <img alt={product.name} src={product.image} />
        <div>
          <h5>{product.name}</h5>
          <p>R${product.price}</p>
        </div>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <span>R${quantity * product.price}</span>
      </div>
      <div>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>btn</button>
      </div>
    </div>
  );
};

export default CheckoutCard;
