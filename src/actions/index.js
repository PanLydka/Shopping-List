export const loadProducts = data => ({
  type: "LOAD_PRODUCTS",
  data
});

export const addProduct = data => ({
  type: "ADD_PRODUCT",
  data
});

export const removeProduct = id => ({
  type: "REMOVE_PRODUCT",
  id
});

export const editProduct = (data, id) => ({
  type: "EDIT_PRODUCT",
  data,
  id
});
