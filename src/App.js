import React from "react";
import "./components/scss/app.scss";
import FormProduct from "./containers/FormProduct";
import { ListProducts } from "./containers/ListProducts";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="col-sm-12 header"> Lista zakupów</h1>
        <div className="row">
          <div className="col-sm-7">
            <h2> Twoja lista: </h2>
            <p>Produkty z listy możesz edytowa klikając na nie!</p>
            <ListProducts />
          </div>
          <div className="col-sm-4 offset-sm-1 ">
            <h2> Dodaj nowy product: </h2>{" "}
            <FormProduct typeAction="addProduct" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
