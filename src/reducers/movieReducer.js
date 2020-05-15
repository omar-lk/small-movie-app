import uuid from "react-uuid";

export const movieReducer = (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return [
        ...state,
        {
          name: action.movie.name,
          director: action.movie.director,
          id: uuid(),
        },
      ];
    case "DELETE_MOVIE":
      return state.filter((movie) => movie.id !== action.id);
    default:
      return false;
  }
};
