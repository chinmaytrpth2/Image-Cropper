import { ActionType } from "./actions"; //, DispatchAction -> import never used
import { AppState } from "./types";

//Defining the App State ->

export const initialState: AppState = {
  file: "",
  upload: false,
  showImageOptions: false,
  error: false,
  onSubmit: false,
  imagePreview: null,
  loading: false,
};

//Defining the AppReducer to Mutate State ->

export function AppReducer(state: AppState, action: any) {
  switch (action.type) {
    case ActionType.SetFile: {
      return {
        ...state,
        file: action.payload,
        showImageOptions: true,
        error: false,
      };
    }
    case ActionType.Success: {
      return {
        ...state,
        imagePreview: action.payload,
        loading: false,
        onSubmit: true,
        upload: false
      };
    }
    case ActionType.SetLoading: {
      return {
        ...state,
        loading: true,
        imagePreview: null,
      };
    }
    case ActionType.SetImagePreview: {
      return {
        ...state,
        imagePreview: action.payload,
        upload: true,
        showImageOptions: false,
      };
    }
    case ActionType.Error: {
      return {
        ...state,
        error: true,
        upload: false,
        imagePreview: null,
      };
    }
    default:
      return state;
  }
}
