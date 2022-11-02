import "./index.css";
import "./App.css";
import Product from "./Product";
import products from "./products.json";

function App() {
  return (
    <div className={"container"}>
      <main className={"main"}>
        <h1>E-commerce with React</h1>

        <div className={""}>{products}</div>
      </main>
    </div>
  );
}

export default App;
