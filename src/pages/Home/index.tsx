import { SearchIcon } from "../../assets/icons";
import Menu from "../../components/Menu";
import * as Styled from "./styles";

const Home = () => {
  return (
    <Styled.HomeContainer>
      <Menu path="home" />
      <Styled.HomeContentContainer>
        <Styled.HomeContentHeader>
          <div>
            <h1>Burguer Fresh</h1>
            <p>{Date.now()}</p>
          </div>
          <div>
            <SearchIcon />
            <input />
          </div>
        </Styled.HomeContentHeader>
        <section>
          <div>
            <p>Lanches</p>
          </div>
          <div>
            <h2>Ecolha seu Lanche</h2>
            <select>
              <option value="1">1</option>
            </select>
          </div>
          <div className="list">
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
            <div>Card</div>
          </div>
        </section>
      </Styled.HomeContentContainer>
      <aside>
        <header>
          <h2>Pedido 12</h2>
          <div>
            <button>Comer no Local</button>
            <button>P/ Viagem</button>
            <button>Delivery</button>
          </div>
        </header>
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
      </aside>
    </Styled.HomeContainer>
  );
};
export default Home;
