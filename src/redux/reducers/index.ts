import { combineReducers } from "redux";

import serie from "./showReducer";
import episodes from "./episodeReducer";

export default combineReducers({
  serie,
  episodes,
});
