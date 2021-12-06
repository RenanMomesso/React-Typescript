import {
  SHOW_INIT,
  SHOW_SUCCESS,
  SHOW_FAILURE,
  IShowType,
  IShowHome,
} from "../types";

const initialState: IShowHome = {
  image: {
    original: "",
  },
  name: "",
  summary: "",
};

const serieReducer = (state: IShowHome = initialState, action: IShowType) => {
  switch (action.type) {
    case SHOW_INIT:
      return { ...state, loading: true };
    case SHOW_SUCCESS:
      return {
        ...state,
        loading: false,
        image: action.payload.image,
        name: action.payload.name,
        summary: action.payload.summary,
      };
    case SHOW_FAILURE:
      return { ...state, loading: false, error: action.payload.errors };
    default:
      return state;
  }
};

export default serieReducer;
