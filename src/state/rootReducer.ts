import { RouterState } from "connected-react-router";
import { combineReducers } from "redux";

import { TopicOneControlReducer, TopicOneControlState } from "./ducks/control/topicOne/reducers";
import { TopicOneDataReducer, TopicOneDataState } from "./ducks/data/topicOne/reducers";
import { themeReducer, ThemeState } from './ducks/session/theme/reducers';

export interface RootState {
    control: {
        topicOne: TopicOneControlState,
    }
    data: {
        topicOne: TopicOneDataState
    },
    session: {
        theme: ThemeState
    }
    router: RouterState;
}

export const rootReducer = combineReducers({
    control: combineReducers({
        topicOne: TopicOneControlReducer,
    }),
    data: combineReducers({
        topicOne: TopicOneDataReducer,
    }),
    router: combineReducers({
        //
    }),
    session: combineReducers({
        theme: themeReducer,
    }),
});