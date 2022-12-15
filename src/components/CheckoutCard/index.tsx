import { Product } from "../../types";
import * as styled from "./styles";
import { useState } from "react";
import toast from "react-hot-toast";
import { StyledButton } from "../Button/styles";
import { TrashIcon } from "../../assets/icons";

interface CheckoutCardProps {
  product: Product;
}

const CheckoutCard = ({ product }: CheckoutCardProps) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [description, setDescription] = useState<string>("");

  return (
    <styled.CheckoutCardContainer>
      <styled.CheckoutCardHeader>
        <img alt={product.name} src={product.image} />
        <div>
          <h5 title={product.name}>{product.name}</h5>
          <p>R${product.price}</p>
        </div>
        <styled.ProductQuantityInput
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <span>R${(quantity * product.price).toFixed(2)}</span>
      </styled.CheckoutCardHeader>
      <styled.CheckoutCardFooter>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <styled.RemoveProductButton
          onClick={() => toast.error("Sessão em desenvolvimento!")}
        >
          <TrashIcon />
        </styled.RemoveProductButton>
      </styled.CheckoutCardFooter>
    </styled.CheckoutCardContainer>
  );
};

export default CheckoutCard;
