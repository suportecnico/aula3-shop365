export function ProductItem({ title, category, price, thumbnail, onAddCarrinho }) {
  // Podemos acessar os ítens da lista por porps, exemplo: props.title.
  // Ou por desestruturação, exemplo: ProductItem({ title })

    const priceFormat = new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL"
    }).format(price);

    return (<>
    <div className="product-card">
        <div className="product-image">
               <img
                src={thumbnail}
                alt="Produto"
                />
        </div>
        <div className="product-info">
              <h3 className="product-title">{title}</h3>
              <p className="product-brand">{category}</p>
              <div className="product-footer">
                <span className="product-price">{priceFormat}</span>
                <button className="add-cart-btn" onClick={onAddCarrinho}>
                  <i className="fas fa-cart-plus"></i>
                </button>
              </div>
        </div>
    </div>
    </>)
}