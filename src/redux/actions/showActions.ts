import { Dispatch } from "redux";
import { getAPI } from "../../utils/fetchData";
import {
  SHOW_INIT,
  SHOW_FAILURE,
  SHOW_SUCCESS,
  IGetHomeShowTypeFailure,
  IGetHomeShowTypeInit,
  IGetHomeShowTypeSuccess,
} from "../types";

export const getHomeShow =
  () =>
  async (
    dispatch: Dispatch<
      IGetHomeShowTypeSuccess | IGetHomeShowTypeInit | IGetHomeShowTypeFailure
    >
  ) => {
    try {
      dispatch({ type: SHOW_INIT, payload: { loading: true } });

      const res = await getAPI("shows/6771");

      dispatch({
        type: SHOW_SUCCESS,
        payload: {
          image: { original: res.data.image.original },
          name: res.data.name,
          summary: res.data.summary,
        },
      });
    } catch (error: any) {
      dispatch({ type: SHOW_FAILURE, payload: { errors: error } });
    }
  };
