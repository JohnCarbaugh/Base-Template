import { push } from 'connected-react-router';
import * as React from 'react';
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { bindActionCreators } from "redux";
import { RootState } from "../../state/rootReducer";

import Navbar from "../components/header/Navbar"

import { Path } from "../../constants/Path";

// tslint:disable no-empty-interface
export interface HeaderContainerProps {
    className?: string;
}

interface PropsFromState {
    location?: string;
}

interface PropsFromDispatch {
    push: typeof push;
}

type Props = HeaderContainerProps & PropsFromState & PropsFromDispatch;

class ConnectedNavbar extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
        this.handleDashboardNavigation = this.handleDashboardNavigation.bind(this);
        this.handleMetricsNavigation = this.handleMetricsNavigation.bind(this);
        this.handleTeamsNavigation = this.handleTeamsNavigation.bind(this);
        this.handleDiscussionNavigation = this.handleDiscussionNavigation.bind(this);
    }

    public render() {
        return (
            <Navbar
                location={this.props.location}
                onDashboardClick={this.handleDashboardNavigation}
                onMetricsClick={this.handleMetricsNavigation}
                onTeamsClick={this.handleTeamsNavigation}
                onDiscussionClick={this.handleDiscussionNavigation}
            />
        );
    }

    private handleDashboardNavigation() {
        this.props.push(Path.dashboard);
    }

    private handleMetricsNavigation() {
        this.props.push(Path.metrics);
    }

    private handleTeamsNavigation() {
        this.props.push(Path.teams);
    }

    private handleDiscussionNavigation() {
        this.props.push(Path.discussion);
    }


}

const mapStateToProps = (state: RootState): PropsFromState => {
    return {
        location: state.router.location.pathname,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<{}>): PropsFromDispatch => {
    return bindActionCreators(
        {
            push,
        },dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedNavbar);
