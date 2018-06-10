import { List } from "immutable";
import { TopicOneDataActionTypes as types } from "./types";

export interface InitiateDataRequest {
    type: types.INITIATE_DATA_REQUEST;
}

export interface CancelDataRequest {
    type: types.CANCEL_DATA_REQUEST;
}

export interface RequestData {
    type: types.REQUEST_DATA;
}

export interface RequestDataFail {
    error: object | string | number | boolean | void | undefined;
    type: types.REQUEST_DATA_FAIL;
}

export interface ReceiveData {
    type: types.RECEIVE_DATA;
    list: List<string>,
}

export interface ClearData {
    type: types.CLEAR_DATA;
}

export const initiateDataRequest = (): InitiateDataRequest => {
    return ({
        type: types.INITIATE_DATA_REQUEST,
    });
};

export const CancelDataRequest = (): CancelDataRequest => {
    return ({
        type: types.CANCEL_DATA_REQUEST,
    });
};

export const requestData = (): RequestData => {
    return ({
        type: types.REQUEST_DATA,
    });
};

export const requestDataFail = (error: object | string | number | boolean | void | undefined):
RequestDataFail => {
    return ({
        error,
        type: types.REQUEST_DATA_FAIL,
    });
};

export const receiveData = (list: List<string>): ReceiveData => {
    return ({
        list,
        type: types.RECEIVE_DATA,
    });
};
export type TopicOneDataActions =
    InitiateDataRequest |
    CancelDataRequest |
    RequestData |
    RequestDataFail |
    ReceiveData |
    ClearData;
