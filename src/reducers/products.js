const initialState = {
  byId: [0],
  byHash: {
    0: {
      id: 0,
      content: { nameProduct: "chleb", categoryProduct: "pieczywo" }
    }
  }
};

export const products = (state = initialState, action) => {
  const id = state.byId.length;
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        byId: [...state.byId, id],
        byHash: { ...state.byHash, [id]: { id: id, content: action.data } }
      };
    default:
      return state;
  }
};
