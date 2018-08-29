import React from "react";
import "./components/scss/app.scss";
import { connect } from "react-redux";
import UserFormComponent from "./components/userFormComponent";
import { ListProductsComponent } from "./components/ListProductsComponent";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="col-sm-6 col-sm-offset-3 header"> Lista zakupów</h1>
        <div className="row foodUserContainer">
          <div className="foodList col-sm-8">
            Twoja lista:
            <ListProductsComponent products={this.props.products} />
          </div>
          <div className="userPanel col-sm-4 value">
            Dodaj nowe:
            <UserFormComponent onSubmit={this.submit} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {};

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
