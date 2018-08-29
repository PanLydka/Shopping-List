import React from "react";

export const ListProductsComponent = ({ products }) => {
  console.log(products);
  return (
    <ul>
      {products.byId.map((item, index) => (
        <li key={index}>
          {products.byHash[item].content.nameProduct}
          {": "}
          {products.byHash[item].content.categoryProduct}
        </li>
      ))}
    </ul>
  );
};
