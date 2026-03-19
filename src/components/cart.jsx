export function Cart() {
    return (
        <aside className="cart-section">
      <h2 className="section-title">Meu Carrinho</h2>

      <p className="cart-label">ITENS</p>

      <div className="cart-items" id="cart-items">
        <div className="cart-item">
          <div className="item-details">
            <h4>MacBook Pro 13" Big Discount</h4>
            <p>Eshop Spot</p>
          </div>
          <span className="item-price">$1,999.00</span>
        </div>

        <div className="cart-item">
          <div className="item-details">
            <h4>MacBook Pro 13" Big Discount</h4>
            <p>Eshop Spot</p>
          </div>
          <span className="item-price">$1,999.00</span>
        </div>
      </div>

      <div className="cart-divider"></div>

      <div className="cart-footer">
        <div className="total-row">
          <span>Total</span>
          <span className="total-price">R$ 500</span>
        </div>
        <button className="checkout-btn" disabled>Finalizar compra</button>
      </div>
    </aside>
    )
}