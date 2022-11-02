import "./index.css";
import "./App.css";
import Product from "./Product";
import products from "./products.json";

function App() {
  return (
    <div className={"container"}>
      <main className={"main"}>
        <h1>E-commerce with React</h1>

        <div className={"grid"}>
          {products.map((product, i) => (
            <Product {...product} key={i} />
          ))}
        </div>
      </main>
      <div
        id="snipcart"
        data-api-key="MmExOThjN2YtMGU2Ny00NTYwLTk1YzEtZWM0NTUwNGY2MDE0NjM4MDI4MTkyMjUyMzk1NDk4"
        hidden></div>
    </div>
  );
}

export default App;
