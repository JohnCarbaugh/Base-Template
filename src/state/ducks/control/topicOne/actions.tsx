import { TopicOneControlActionTypes as types } from "./types";

export interface SetSelectedRow {
    type: types.SET_SELECTED_ROW;
    id: string;
}

export interface SomeAction {
    type: types.SOME_ACTION;
    // potential data here
}

export const setSelectedRow = (id: string): SetSelectedRow => {
    return ({
        id,
        type: types.SET_SELECTED_ROW,
    });
};

export const someAction = (): SomeAction => {
    return ({
        type: types.SOME_ACTION,
        // data if needed (parameter)
    });
};

export type TopicOneControlActions =
    SetSelectedRow |
    SomeAction;
