import * as Styled from "./styles";

const OrderDetails = () => {
  return (
    <Styled.OrderDetailsContainer>
      <Styled.OrderDetailsHeader>
        <h2>Pedido #12</h2>
        <div>
          <button>Comer no Local</button>
          <button>P/ Viagem</button>
          <button>Delivery</button>
        </div>
        </Styled.OrderDetailsHeader>
      <div>
        <div>
          <h3>Item</h3>
          <h3>Qtd</h3>
          <h3>Preço</h3>
        </div>
        <div className="checkout-cards-container">
          <div>Card Checkout</div>
          <div>Card Checkout</div>
          <div>Card Checkout</div>
        </div>
      </div>
      <div>
        <div>
          <p>Desconto</p>
          <p>R$0.00</p>
        </div>
        <div>
          <p>Sub total</p>
          <p>R$0.00</p>
        </div>
        <button>Continuar para o pagamento</button>
      </div>
      </Styled.OrderDetailsContainer>
  );
};

export default OrderDetails;
