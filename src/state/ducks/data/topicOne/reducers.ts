import { List, Record } from "immutable";
import { TopicOneDataActions } from "./actions";
import { TopicOneDataActionTypes as types } from "./types";

const TopicOneDataStateRecord = Record({
    someData: List<string>(),
});

export class TopicOneDataState extends TopicOneDataStateRecord {
    public list: List<string>;
}

export const TopicOneDataReducer = (
    state = new TopicOneDataState(),
    action: TopicOneDataActions,
) => {

    switch (action.type) {

        case (types.INITIATE_DATA_REQUEST):
            return state;
            // depending on how your requirements you may or may not
            // need to do anything within reducer here; normally initiating
            // an API request will be received by your async solution (epic, thunk, promise..etc)

        case (types.CANCEL_DATA_REQUEST):
            return state;
            // same scenario as above case
            // you can cancel epics via ".takeuntil(/yourActionType/)" method

        case (types.REQUEST_DATA):
            return state;
            // same scenario as above case

        case (types.REQUEST_DATA_FAIL):
            return state;
            // same scenario as above case

        case (types.RECEIVE_DATA):
            return state
                .set("list", action.list);

        case (types.CLEAR_DATA):
            return state
                .set("list", List<string>())
            // this is not referring to clearing the data on backend;
            // this is meant for clear data on frontend only, reset to initial state

        default:
            return state;
    }
};
