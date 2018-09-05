import React from "react";
import { connect } from "react-redux";
import { ListProductsComponent } from "../components/ListProductsComponent";
import FormProduct from "./FormProduct";
import { Modal, Dialog, Button } from "react-bootstrap";
import "./../components/scss/modal.scss";

class ListProductsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      EditProduct: false,
      idEdit: null
    };
  }

  showComponent = e => {
    if (e === undefined) {
      this.setState((prevState, props) => {
        return {
          EditProduct: !prevState.EditProduct,
          idEdit: null
        };
      });
    } else {
      const id = e.currentTarget.dataset.id;
      this.setState((prevState, props) => {
        return {
          EditProduct: !prevState.EditProduct,
          idEdit: id
        };
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.EditProduct ? (
          <Modal.Dialog bsSize="large" dialogClassName="custom-dialog">
            <Modal.Body>
              <FormProduct
                typeAction="editProduct"
                initialValues={
                  this.props.products.byHash[this.state.idEdit].content
                }
                idEdit={this.state.idEdit}
                close={this.showComponent}
              />
            </Modal.Body>

            <Modal.Footer>
              <Button onClick={this.showComponent}>Zamknij</Button>
            </Modal.Footer>
          </Modal.Dialog>
        ) : null}
        <ListProductsComponent showEdit={this.showComponent} />
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state, props) => ({
  products: state.products
});

const mapDispatchToProps = {};

export const ListProducts = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListProductsContainer);
