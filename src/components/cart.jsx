import { currencyFormat } from "./utils/numberFormatter";

export function Cart({ itens }) {

  const total = itens.reduce((acumulador, itemAtual) => {
    return acumulador + itemAtual.price;
  }, 0);
    return (
        <aside className="cart-section">
      <h2 className="section-title">Meu Carrinho</h2>

      <p className="cart-label">ITENS</p>

      {total === 0 && <spam className="carrinho-zerado">Nenhum produto adicionado ao carrinho!</spam>}

      <div className="cart-items" id="cart-items">
        {itens.map((item) => (
          <div className="cart-item">
          <div className="item-details">
            <h4>{item.title}</h4>
            <p>{item.category}</p>
          </div>
          <span className="item-price">{currencyFormat(item.price)}</span>
        </div>
        ))}
      </div>

      <div className="cart-divider"></div>

      <div className="cart-footer">
        <div className="total-row">
          <span>Total</span>
          <span className="total-price">{currencyFormat(total)}</span>
        </div>
        <button className="checkout-btn" disabled={total === 0}>Finalizar compra</button>
      </div>
    </aside>
    )
}