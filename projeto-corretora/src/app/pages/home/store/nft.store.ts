import { createReducer } from "@ngrx/store";

export const initialOpenDetails: boolean = false;

export const appReducer = createReducer(
    initialOpenDetails
);