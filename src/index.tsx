import { ConnectedRouter } from "connected-react-router";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from "react-router";
import 'rxjs'; // <- DO NOT MOVE DOWN
import history from './state/history';
import store from './state/store';

import ConnectedHeader from "./views/containers/ConnectedHeader";
import ConnectedSubheader from "./views/containers/ConnectedNavbar";
import ConnectedThemeProvider from "./views/containers/ConnectedThemeProvider";

import DashboardPage from "./views/pages/DashboardPage";
import DiscussionPage from "./views/pages/DiscussionPage";
import MetricsPage from "./views/pages/MetricsPage";
import Page404 from "./views/pages/Page404";
import TeamsPage from "./views/pages/TeamsPage";

import FlexRowWrapper from "./views/wrappers/FlexRowWrapper";

import { Path } from "./constants/Path";

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedThemeProvider>
            <ConnectedRouter history={history}>
                <div className="app">
                    <ConnectedHeader />
                    <FlexRowWrapper>
                        <ConnectedSubheader />
                        <Switch>
                            <Route path={Path.dashboard} component={DashboardPage} />
                            <Route path={Path.metrics} component={MetricsPage} />
                            <Route path={Path.teams} component={TeamsPage} />
                            <Route path={Path.discussion} component={DiscussionPage} />
                            <Redirect from={Path.home} exact={true} to={Path.dashboard} />
                            <Route path={Path.other} component={Page404} />
                        </Switch>
                    </FlexRowWrapper>
                </div>
            </ConnectedRouter>
        </ConnectedThemeProvider>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
