import { Dispatch } from "redux";
import { getAPI } from "../../utils/fetchData";
import { IEpisodeListType } from "../types";
import {
  EPISODES_LIST_FAILURE,
  EPISODES_LIST_INIT,
  EPISODES_LIST_SUCCESS,
} from "../types";
import {
  EPISODE_CLEAR,
  EPISODE_FAILURE,
  EPISODE_INIT,
  EPISODE_SUCCESS,
  IEpisodeClearType,
  IEpisodeType,
} from "../types/episodeTypes";

export const getEpisode =
  (season: number, episode: number) =>
  async (dispatch: Dispatch<IEpisodeType>) => {
    try {
      dispatch({ type: EPISODE_INIT, payload: { loading: true } });

      const res = await getAPI(
        `shows/6771/episodebynumber?season=${season}&number=${episode}`
      );

      dispatch({
        type: EPISODE_SUCCESS,
        payload: {
          image: { original: res.data.image ? res.data.image.original : '' },
          name: res.data.name,
          summary: res.data.summary,
        },
      });
    } catch (error: any) {
      dispatch({ type: EPISODE_FAILURE, payload: { errors: error } });
    }
  };

export const getEpisodesList =
  () => async (dispatch: Dispatch<IEpisodeListType | IEpisodeClearType>) => {
    try {
      dispatch({ type: EPISODES_LIST_INIT, payload: { loading: true } });
      dispatch({ type: EPISODE_CLEAR });

      const res = await getAPI("shows/6771/episodes");

      dispatch({
        type: EPISODES_LIST_SUCCESS,
        payload: {
          data: res.data,
        },
      });
    } catch (error: any) {
      dispatch({ type: EPISODES_LIST_FAILURE, payload: { errors: error } });
    }
  };
