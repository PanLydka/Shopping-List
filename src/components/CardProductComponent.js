import React from "react";

export const CardProductComponent = ({ products, color, remove, showEdit }) => {
  return (
    <div className="row">
      {products.map((item, index) => (
        <div key={index} className={color + " card col-sm-3 m-1 p-1 btn _card"}>
          <form
            data-id={item.id}
            data-toggle="modal"
            data-target="#myModal"
            onClick={showEdit}
          >
            <p className="card-header p-1">{item.content.nameProduct}</p>
          </form>
          <button
            type="button"
            onClick={remove}
            className="close products__button--close"
            data-id={item.id}
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};
