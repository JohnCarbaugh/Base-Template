import { ConnectedRouter } from "connected-react-router";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';;
import 'rxjs'; // <- DO NOT MOVE DOWN
import history from './state/history';
import store from './state/store';

import Layout from "./layout";

import ConnectedThemeProvider from "./views/containers/ConnectedThemeProvider";

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedThemeProvider>
            <ConnectedRouter history={history}>
                <Layout />
            </ConnectedRouter>
        </ConnectedThemeProvider>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
