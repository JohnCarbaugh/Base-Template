import { push } from 'connected-react-router';
import * as React from 'react';
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { bindActionCreators } from "redux";
import { RootState } from "../../state/rootReducer";

import Header from "../components/header/Header"

// tslint:disable no-empty-interface
export interface HeaderContainerProps {
    className?: string;
}

interface PropsFromState {}

interface PropsFromDispatch {
    push: typeof push;
}

type Props = HeaderContainerProps & PropsFromState & PropsFromDispatch;

class HeaderContainer extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
        this.handleNotificationsClick = this.handleNotificationsClick.bind(this);
        this.handleSettingsClick = this.handleSettingsClick.bind(this);
        this.handleProfileClick = this.handleProfileClick.bind(this);
    }

    public render() {
        return (
            <Header
                notificationsClick={this.handleNotificationsClick}
                settingsClick={this.handleSettingsClick}
                profileClick={this.handleProfileClick}
            />
        );
    }

    private handleNotificationsClick() {
        alert("/notifications");
    }

    private handleSettingsClick() {
        alert("/settings");
    }

    private handleProfileClick() {
        alert("/profile");
    }
}

const mapStateToProps = (state: RootState): PropsFromState => {
    return {};
};

const mapDispatchToProps = (dispatch: Dispatch<{}>): PropsFromDispatch => {
    return bindActionCreators(
        {
            push
        },dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
