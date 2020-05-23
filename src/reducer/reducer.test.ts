import { AppState } from "./types";
import { ActionType } from "./actions";
import { AppReducer } from './reducer';

export const initialState: AppState = {
    file: "",
    upload: false,
    showImageOptions: false,
    error: false,
    onSubmit: false,
    imagePreview: null,
    loading: false,
  };


describe("#Reducer Function", () => {
    it('Should return default state', () => {
        const newState = AppReducer(initialState, {});
        expect(newState).toEqual(initialState);
    })

    it('Should return new State on action TYPE SetFile', () => {
        const data = "URL to Image";
        const newState = AppReducer(initialState, {
            type: ActionType.SetFile,
            payload: data
        })
        expect(newState).toEqual({
            ...initialState,
            file: data,
            showImageOptions: true,
            error: false,
        });
    })

    it('Should return new State on action TYPE Success', () => {
        const data = "Returned Image URL from server";
        const newState = AppReducer(initialState, {
            type: ActionType.Success,
            payload: data
        })
        expect(newState).toEqual({
            ...initialState,
            imagePreview: data,
            loading: false,
            onSubmit: true,
        });
    })

    it('Should return new State on action TYPE SetLoading', () => {
        const newState = AppReducer(initialState, {
            type: ActionType.SetLoading,
        })
        expect(newState).toEqual({
            ...initialState,
            loading: true,
            imagePreview: null,
            upload: false
        });
    })

    it('Should return new State on action TYPE SetImagePreview', () => {
        const data = "URL to Image";
        const newState = AppReducer(initialState, {
            type: ActionType.SetImagePreview,
            payload: data
        })
        expect(newState).toEqual({
            ...initialState,
            imagePreview: data,
            upload: true,
            showImageOptions: false,
        });
    })

    it('Should return new State on action TYPE Error', () => {
        const newState = AppReducer(initialState, {
            type: ActionType.Error,
        })
        expect(newState).toEqual({
            ...initialState,
            error: true,
            upload: false,
            imagePreview: null,
        });
    })

})