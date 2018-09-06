import React from "react";
import { Field } from "redux-form";

const FormProductComponent = ({ handleSubmit, initialValues }) => {
  return (
    <form onSubmit={handleSubmit} name="my-modal">
      <div className="form-group">
        <label htmlFor="nameProduct"> nazwa </label>
        <Field
          type="text"
          name="nameProduct"
          component="input"
          className="form-control form-control-lg"
        />
      </div>
      <div className="form-group">
        <label htmlFor="categoryProduct"> rodzaj produktu </label>
        <Field
          name="categoryProduct"
          component="select"
          className="form-control form-control-lg"
        >
          <option value="undefined" />
          <option value="bread">pieczywo</option>
          <option value="groceries">produkt spożywczy</option>
          <option value="sweets">słodycze</option>
          <option value="drinks">napoje</option>
          <option value="alkohols">alkohole</option>
          <option value="chemicals"> chemikalia </option>
          <option value="stationery"> Artykuł papiernicze</option>
        </Field>
      </div>
      <div className="form-group">
        <label htmlFor="extraInfo"> Dodatkowe informacje </label>
        <Field
          type="details"
          name="extraInfo"
          component="textarea"
          className="form-control form-control-lg"
        />
      </div>
      <button className="btn btn-primary mb-2" type="submit">
        Zapisz
      </button>
    </form>
  );
};

export default FormProductComponent;
