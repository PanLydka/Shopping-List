import React from "react";
import "./scss/app.scss";
import { CardProductComponent } from "./CardProductComponent";
import { groupBy, isEmpty } from "underscore";
import { connect } from "react-redux";
import { removeProduct } from "../actions/index";

const indent = {
  textIndent: "40px"
};

class ListProductsComponentContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  productsLoad = props => {
    if (isEmpty(props.products.byHash)) {
      return {};
    }

    if (props.byId === null) {
      alert("b");
    }
    const group = groupBy(
      Object.values(props.products.byHash),
      product => product.content.categoryProduct
    );

    return {
      bread: {
        data: group.bread === undefined ? null : Object.values(group.bread),
        color: "bg-primary",
        displayName: "pieczywo: "
      },
      groceries: {
        data:
          group.groceries === undefined ? null : Object.values(group.groceries),
        color: "bg-secondary",
        displayName: "artykuly spozywcze: "
      },
      sweets: {
        data: group.sweets === undefined ? null : Object.values(group.sweets),
        color: "bg-success",
        displayName: "słodycze: "
      },
      drinks: {
        data: group.drinks === undefined ? null : Object.values(group.drinks),
        color: "bg-danger",
        displayName: "napoje: "
      },
      alkohols: {
        data:
          group.alkohols === undefined ? null : Object.values(group.alkohols),
        color: "bg-warning",
        displayName: "alkohole: "
      },
      chemicals: {
        data:
          group.chemicals === undefined ? null : Object.values(group.chemicals),
        color: "bg-info",
        displayName: "chemikalia: "
      },
      stationery: {
        data:
          group.stationery === undefined
            ? null
            : Object.values(group.stationery),
        color: "bg-dark",
        displayName: "artykuły papiernicze: "
      }
    };
  };

  render() {
    const products = this.productsLoad(this.props);
    const { remove, showEdit } = this.props;
    return (
      <div className="pt-4">
        {Object.keys(products).map((item, i) => (
          <React.Fragment key={i}>
            {products[item].data !== null ? (
              <div className="row mt-3">
                <div className="col-sm-3">
                  <h3 className="categoryName">{products[item].displayName}</h3>
                </div>
                <div className="col-sm-9">
                  <CardProductComponent
                    products={products[item].data}
                    color={products[item].color}
                    remove={remove}
                    showEdit={showEdit}
                  />
                </div>
              </div>
            ) : null}
          </React.Fragment>
        ))}
        {isEmpty(this.props.products.byId) ? (
          <h3 className="pt-5" style={indent}>
            Witaj we własnym menadrzeże! Twoje produkty zapiszą się w Twojej
            przeglądarce.
          </h3>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => ({
  remove: e => {
    e.preventDefault();
    dispatch(removeProduct(e.currentTarget.dataset.id));
  }
});

export const ListProductsComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListProductsComponentContainer);
