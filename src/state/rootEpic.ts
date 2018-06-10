import { Action } from "redux";
import { combineEpics } from "redux-observable";
import { RootState } from "./rootReducer";

import {
    requestDataEpic,
} from "./ducks/data/topicOne/operations";

export const rootEpic = combineEpics<Action, RootState, {}>(
    requestDataEpic,
)