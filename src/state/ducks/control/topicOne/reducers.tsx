import { Record } from "immutable";
import { TopicOneControlActions } from "./actions";
import { TopicOneControlActionTypes as types } from "./types";

const TopicOneControlStateRecord = Record({
    selectedRowId: "",
});

export class TopicOneControlState extends TopicOneControlStateRecord {
    public selectedRowId: string;
}

export const TopicOneControlReducer = (
    state = new TopicOneControlState(),
    action: TopicOneControlActions,
) => {

    switch (action.type) {

        case (types.SET_SELECTED_ROW):
            return state
                .set("selectedRowId", action.id);

        case (types.SOME_ACTION):
            return state;
                // change state here..etc.

        default:
            return state;
    }
};
