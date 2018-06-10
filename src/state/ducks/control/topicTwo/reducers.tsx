import { Record } from "immutable";
import { TopicTwoActions } from "./actions";
import { TopicTwoActionTypes as types } from "./types";

const TopicTwoControlStateRecord = Record({
    someValue: "",
});

export class TopicTwoControlState extends TopicTwoControlStateRecord {
    public someValue?: string;
}

export const BomListControlReducer = (
    state = new TopicTwoControlState(),
    action: TopicTwoActions,
) => {

    switch (action.type) {

        case (types.SOME_ACTION):
            return state;

        default:
            return state;
    }
};
