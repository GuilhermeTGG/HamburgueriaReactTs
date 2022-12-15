import Button from "../Button";
import * as Styled from "./styles";

const OrderDetails = () => {
  return (
    <Styled.OrderDetailsContainer>
      <Styled.OrderDetailsHeader>
        <h2>Pedido #12</h2>
        <div>
          <Button text="Comer no local" onClick={() => {}} size="small" />
          <Button
            text="P/ Viagem"
            onClick={() => {}}
            size="small"
            variant="disabled"
          />
          <Button
            text="Delivery"
            onClick={() => {}}
            size="small"
            variant="disabled"
          />
        </div>
      </Styled.OrderDetailsHeader>
      <Styled.CheckoutDetailsContainter>
        <Styled.CheckoutDetailsHeader>
          <div>
          <h3>Item</h3>
          <h3>Qtd</h3>
          </div>
          <h3>Preço</h3>
        </Styled.CheckoutDetailsHeader>
        <Styled.CheckoutCardsContainer>
          <div>Card Checkout</div>
          <div>Card Checkout</div>
          <div>Card Checkout</div>
          </Styled.CheckoutCardsContainer>
      </Styled.CheckoutDetailsContainter>
      <Styled.OrderDetailsFooter>
        <div>
          <p>Desconto</p>
          <h3>R$0.00</h3>
        </div>
        <div>
          <p>Sub total</p>
          <h3>R$0.00</h3>
        </div>
        <Button
          text="Continue para o pagamento"
          onClick={() => {}}
          size="large"
        />
      </Styled.OrderDetailsFooter>
    </Styled.OrderDetailsContainer>
  );
};

export default OrderDetails;
