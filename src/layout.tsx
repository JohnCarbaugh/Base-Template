import * as React from "react";
import { Redirect, Route, Switch } from "react-router";
import styled from "styled-components";

import ConnectedHeader from "./views/containers/ConnectedHeader";
import ConnectedSubheader from "./views/containers/ConnectedNavbar";

import DashboardPage from "./views/pages/DashboardPage";
import DiscussionPage from "./views/pages/DiscussionPage";
import MetricsPage from "./views/pages/MetricsPage";
import Page404 from "./views/pages/Page404";
import TeamsPage from "./views/pages/TeamsPage";

import FlexRowWrapper from "./views/wrappers/FlexRowWrapper";

import { Path } from "./constants/Path";

import './index.css';


export interface Props {
    className?: string;
}

class Layout extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    public render() {

        return (
            <div id={"app"} className={this.props.className} >
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
        );
    }
}

export default styled(Layout)`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    min-height: 100vh;
    overflow: hidden;

    background-color: ${(props) => props.theme.tertiary};
`;
