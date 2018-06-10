import { connectRouter, routerMiddleware } from "connected-react-router";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";
import history from './history';
import { rootEpic } from "./rootEpic";
import { rootReducer } from './rootReducer';

const composeEnhancers = composeWithDevTools({
    // various options
})

export default createStore(
    connectRouter(history)(rootReducer),
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            createEpicMiddleware(rootEpic)
        )
    ),
);