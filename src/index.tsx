import { ConnectedRouter } from "connected-react-router";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from "react-router";
import 'rxjs'; // <- DO NOT MOVE DOWN
import history from './state/history';
import store from './state/store';

import HeaderContainer from "./views/containers/HeaderContainer";
import SubHeaderContainer from "./views/containers/SubHeaderContainer";

import Page404 from "./views/pages/Page404";
import TopicOneContainer from "./views/pages/TopicOnePage";
import TopicTwoContainer from "./views/pages/TopicTwoPage";

import Path from "./constants/Path";

import './index.css';

ReactDOM.render(
    <Provider store={store}>
            <ConnectedRouter history={history}>
                <div className="app">
                    <HeaderContainer />
                    <SubHeaderContainer />
                    <Switch>
                        <Route path={Path.topicOne} component={TopicOneContainer} />
                        <Route path={Path.topicTwo} component={TopicTwoContainer} />
                        <Redirect from={Path.home} exact={true} to={Path.topicOne} />
                        <Route path={Path.other} component={Page404} />
                    </Switch>
                </div>
            </ConnectedRouter>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
