import { TopicTwoActionTypes as types } from "./types";

export interface SomeAction {
    type: types.SOME_ACTION;
    rowKey: string;
}

export const someAction = (rowKey: string): SomeAction => {
    return ({
        rowKey,
        type: types.SOME_ACTION,
    });
};

export type TopicTwoActions =
    SomeAction;
