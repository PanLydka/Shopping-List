import FormProductComponent from "../components/FormProductComponent";
import { reduxForm, reset } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import { addProduct, editProduct } from "./../actions/index";

const FormProductComponentContainer = ({ typeAction, idEdit, close }) => {
  return <FormProductComponent onSubmit={props.onSubmit} />;
};

const mapStateToProps = (dispatch, ownProps, state) => {
  return {
    onSubmit: e => {
      var callbacks = {
        addProduct: addProduct(e),
        editProduct: editProduct(e, ownProps.idEdit)
      };

      dispatch(callbacks[ownProps.typeAction]);
      dispatch(reset("FormProductComponent"));

      if (typeof ownProps.close === "function") ownProps.close();
    }
  };
};

const decorate = compose(
  connect(
    null,
    mapStateToProps
  ),
  reduxForm({
    form: "FormProductComponent"
  })
);

export default decorate(FormProductComponent);
