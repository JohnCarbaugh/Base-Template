import { List } from "immutable"
import { Store } from 'redux';
import { ActionsObservable } from "redux-observable";
import { AjaxResponse } from "rxjs";
import { Observable } from 'rxjs/Observable';
import { ajax } from "rxjs/observable/dom/ajax";
import { RootState } from "../../../rootReducer";

import {
    receiveData,
    RequestData,
    requestDataFail,
    TopicOneDataActions,
} from "./actions";
import { TopicOneDataActionTypes as types } from "./types";

// asynchonous requests (API)
const domainUrl = "your-endpoint-here";
const headers = { "Content-Type": "application/json" };

export const requestDataEpic = (action$: ActionsObservable<TopicOneDataActions>, store: Store<RootState>) => {
    return action$
        .ofType(types.INITIATE_DATA_REQUEST)
        .flatMap((action: RequestData) => {
            return Observable.concat(
                ajax({
                    headers,
                    method: "GET",
                    responseType: "json",
                    url: domainUrl,
                })
                .map((response: AjaxResponse) => {
                    const dataArray = response.response as string[];
                    let dataList = List<string>();
                    dataArray.forEach((item: string) => { dataList = dataList.push(item); });
                    return receiveData(dataList);
                })
                .takeUntil(action$.ofType(types.CANCEL_DATA_REQUEST))
                .catch((error) => {
                    return Observable.of(requestDataFail(error));
                })
            );
        });
};
