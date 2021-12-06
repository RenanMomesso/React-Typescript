export const SHOW_INIT = "SHOW_INIT";
export const SHOW_SUCCESS = "SHOW_SUCCESS";
export const SHOW_FAILURE = "SHOW_FAILURE";

export interface IShowHome {
  name: string;
  summary: string;
  image: { original: string | any };
  loading?: boolean;
}

export interface IGetHomeShowTypeSuccess {
  type: typeof SHOW_SUCCESS;
  payload: IShowHome;
}

export interface IGetHomeShowTypeInit {
  type: typeof SHOW_INIT;
  payload: IAlertOrError;
}

export interface IGetHomeShowTypeFailure {
  type: typeof SHOW_FAILURE;
  payload: IAlertOrError;
}

export interface IAlertOrError {
  loading?: boolean;
  success?: string | string[];
  errors?: string | string[];
}

export type IShowType =
  | IGetHomeShowTypeInit
  | IGetHomeShowTypeSuccess
  | IGetHomeShowTypeFailure;
