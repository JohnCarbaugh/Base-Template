// import { createSelector } from "reselect";
import { RootState } from "../../../rootReducer";

export const getSomeData = (state: RootState) => state.data.topicOne.list;

// use createSelector(...) for combining pre-existing selectors above