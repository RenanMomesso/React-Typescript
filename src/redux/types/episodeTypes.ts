import { IAlertOrError } from ".";

export const EPISODE_INIT = "EPISODE_INIT";
export const EPISODE_SUCCESS = "EPISODE_SUCCESS";
export const EPISODE_FAILURE = "EPISODE_FAILURE";
export const EPISODE_CLEAR = "EPISODE_CLEAR";

export const EPISODES_LIST_INIT = "EPISODES_LIST_INIT";
export const EPISODES_LIST_SUCCESS = "EPISODES_LIST_SUCCESS";
export const EPISODES_LIST_FAILURE = "EPISODES_LIST_FAILURE";

export interface IEpisode {
  name: string;
  summary: string;
  image: { original: string | any };
  loading?: boolean;
}

export interface IGetEpisodeTypeInit {
  type: typeof EPISODE_INIT;
  payload: IAlertOrError;
}
export interface IGetEpisodeTypeSuccess {
  type: typeof EPISODE_SUCCESS;
  payload: IEpisode;
}

export interface IGetEpisodeTypeFailure {
  type: typeof EPISODE_FAILURE;
  payload: IAlertOrError;
}

export interface IEpisodeClearType {
  type: typeof EPISODE_CLEAR;
}

export type IEpisodeType =
  | IGetEpisodeTypeInit
  | IGetEpisodeTypeSuccess
  | IGetEpisodeTypeFailure
  | IEpisodeClearType;

export interface IEpisodeListItem {
  data: IEpisodeList[];
  loading?: boolean;
}
export interface IEpisodeList {
  season: number;
  serieDate: string;
  serieName: string;
  serieNumber: number;
}

export interface IEpisode {
  name: string;
  summary: string;
  image: { original: string | any };
}

export interface IGetEpisodeShowListTypeSuccess {
  type: typeof EPISODES_LIST_SUCCESS;
  payload: IEpisodeListItem;
}

export interface IGetEpisodeShowListTypeInit {
  type: typeof EPISODES_LIST_INIT;
  payload: IAlertOrError;
}

export interface IGetEpisodeShowListTypeFailure {
  type: typeof EPISODES_LIST_FAILURE;
  payload: IAlertOrError;
}

export type IEpisodeListType =
  | IGetEpisodeShowListTypeInit
  | IGetEpisodeShowListTypeSuccess
  | IGetEpisodeShowListTypeFailure;
