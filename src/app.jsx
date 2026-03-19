import { useState } from "react";
import { Cart } from "./components/cart";
import { Header } from "./components/header";
import { ProductItem } from "./components/product-item";
import { products } from "./data";
import "./styles/app.css";
export function App() {
  // console.log(products);
  // Essa forma (key={"item-id-123"})é inválida, pois coloca os ids para todos os itens da lista.
  // Recebendo o estado dos itens da lista.

  const [filterSelected, setFilterSelected] = useState("all");

  const productsFilters = filterSelected === "all" ? products : products.filter((product) => product.category === filterSelected);

  const listaProdutosItem = productsFilters.map((product) => {
    return <ProductItem key={`${product.id}-${product.title}`} title={product.title} 
    price={product.price}
    category={product.category}
    thumbnail={product.thumbnail}
    />
  });

    function handleOnChange(event) {
      setFilterSelected(event.target.value)
      console.log(event.target.value);
    }

    return (
    <>
    <div className="content-area">
      <Header /> 
      
      <main className="products-section">
        <h1 className="section-title">Produtos</h1>
          <div className="filters">
            <div className="filters-btns">
              <button className={filterSelected === "all" ? "active" : ""} onClick={() => setFilterSelected("all")}>All</button>

              <button className={filterSelected === "fashion" ? "active" : ""} onClick={() => setFilterSelected("fashion")}>Fashion</button>

              <button className={filterSelected === "accessories" ? "active" : ""} onClick={() => setFilterSelected("accessories")}>Accessories</button>
              
              <button className={filterSelected === "security" ? "active" : ""} onClick={ () => setFilterSelected("security")}>Security</button>

              <button className={filterSelected === "home" ? "active" : ""} onClick={ () => setFilterSelected("home")}>Home</button>

              <button className={filterSelected === "electronics" ? "active" : ""} onClick={ () => setFilterSelected("electronics")}>Electronics</button>
            </div>
            <select value={filterSelected} onChange={handleOnChange}>
              <option value="all">All</option>
              <option value="electronics">Electronics</option>
              <option value="fashion">Fashion</option>
              <option value="accessories">Accessories</option>
              <option value="security">Security</option>
              <option value="home">Home</option>
            </select>
          </div>
        <div className="products-grid" id="products-list">
          {listaProdutosItem}
        </div>
      </main>
    </div>
    <Cart />
  </>
    )
}