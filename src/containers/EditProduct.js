import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import FormProductComponent from "../components/FormProductComponent";
import "../components/scss/app.scss";
import { submit } from "redux-form";

import { editProduct } from "../actions/index";

const EditProduct = ({ initialValues, edit }) => {
  return (
    <div className="">
      <FormProductComponent initialValues={initialValues} onSubmit={edit} />
    </div>
  );
};

const decorate = compose(
  connect(
    (state, props) => ({
      initialValues: state.products.byHash[props.idEdit].content
    }),
    dispatch => ({
      edit: e => {
        console.log("b");
        e.preventDefault();
        dispatch(editProduct());
      }
    })
  ),
  reduxForm({
    form: "FormProductComponent",
    enableReinitialize: true
  })
);

export default decorate(EditProduct);
