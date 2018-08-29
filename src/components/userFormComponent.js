import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { addProduct } from "./../actions";

let UserFormComponent = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field type="text" name="nameProduct" component="input" />
      <Field name="categoryProduct" component="select">
        <option />
        <option value="produkt spożywczy">produkt spożywczy</option>
        <option value="pieczywo">pieczywo</option>
        <option value="słodycze">słodycze</option>
        <option value="napoje">napje</option>
        <option value="alkohole">alkohole</option>
      </Field>
      <button type="submit">Dodaj nowe</button>
    </form>
  );
};

UserFormComponent = reduxForm({
  form: "UserFormComponent"
})(UserFormComponent);

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(addProduct(data))
});

export default (UserFormComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserFormComponent));
