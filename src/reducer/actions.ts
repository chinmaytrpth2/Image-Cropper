import { AppState } from "./types";

// Defining the Action Types ->

export enum ActionType {
  SetFile,
  Success,
  SetLoading,
  SetImagePreview,
  Error,
}

// Defining the action Type ->

export interface DispatchAction {
  type: ActionType;
  payload: Partial<AppState>;
}
