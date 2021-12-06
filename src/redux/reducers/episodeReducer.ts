import {
  IEpisode,
  IEpisodeListItem,
  IEpisodeListType,
  IEpisodeType,
  EPISODES_LIST_INIT,
  EPISODES_LIST_SUCCESS,
  EPISODES_LIST_FAILURE,
  EPISODE_INIT,
  EPISODE_SUCCESS,
  EPISODE_FAILURE,
  EPISODE_CLEAR,
} from "../types";

const initialState = {
  data: [],
  loading: false,
  image: { original: "" },
  name: "",
  summary: "",
};

const serieReducer = (
  state: IEpisode & IEpisodeListItem = initialState,
  action: IEpisodeListType | IEpisodeType
) => {
  switch (action.type) {
    case EPISODES_LIST_INIT:
      return { ...state, loading: true };
    case EPISODES_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case EPISODES_LIST_FAILURE:
      return { ...state, loading: false, error: action.payload.errors };
    case EPISODE_INIT:
      return { ...state, loading: true };
    case EPISODE_SUCCESS:
      return {
        ...state,
        loading: false,
        image: action.payload.image,
        name: action.payload.name,
        summary: action.payload.summary,
      };
    case EPISODE_FAILURE:
      return { ...state, loading: false, error: action.payload.errors };
    case EPISODE_CLEAR:
      return {
        ...state,
        loading: false,
        image: { original: "" },
        name: "",
        summary: "",
      };
    default:
      return state;
  }
};

export default serieReducer;
