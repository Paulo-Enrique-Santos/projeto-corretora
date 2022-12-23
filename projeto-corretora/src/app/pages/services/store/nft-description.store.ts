import { 
    ActionCreator, 
    ActionReducer, 
    createAction, 
    createReducer, 
    on,
    props
} from "@ngrx/store";

export const isOpenDetails: boolean = false;

export const toggleShowDetails = createAction(
    '[isOpenDetails] Mostra ou não os detalhes'
);

export const appOpenDetailsReducer: ActionReducer<boolean> = createReducer(
    isOpenDetails,
    on(toggleShowDetails, (state: boolean) => {
        state = state ? false : true;
        return state;
    })
);