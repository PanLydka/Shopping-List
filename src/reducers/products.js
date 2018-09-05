const initialState = {
  byId: [],
  byHash: {},
  lastId: 0
};

export const products = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const newId = state.lastId + 1;

      return {
        byId: [...state.byId, newId],
        byHash: {
          ...state.byHash,
          [newId]: {
            id: newId,
            content: action.data
          }
        },
        lastId: newId
      };
    case "REMOVE_PRODUCT":
      const { [action.id]: deletedValue, ...newStateRemove } = state.byHash;
      const idInteger = parseInt(action.id);
      return {
        byId: state.byId.filter(value => value !== idInteger),
        byHash: newStateRemove,
        lastId: state.lastId
      };
    case "EDIT_PRODUCT":
      const newStateEdit = {
        ...state.byHash,
        [action.id]: { id: action.id, content: action.data }
      };
      return {
        byId: state.byId,
        byHash: newStateEdit,
        lastId: state.lastId
      };
    default:
      return state;
  }
};
