import * as React from 'react';
import styled from 'styled-components';

import HeaderButton from './HeaderButton';
import HeaderTitle from './HeaderTitle';

interface Props {
    className?: string;
    notificationsClick: () => void;
    settingsClick: () => void;
    profileClick: () => void;
}

class HeaderBar extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.callNotifications = this.callNotifications.bind(this);
        this.callSettings = this.callSettings.bind(this);
        this.callProfile = this.callProfile.bind(this);
    }

    public render() {
        return (
            <div id="header" className={this.props.className} >
                <HeaderTitle />
                <ul>
                    <HeaderButton
                        icon={"notifications"}
                        tooltip={"Notifications"}
                        onClick={this.callNotifications}
                    />
                    <HeaderButton
                        icon={"settings"}
                        tooltip={"Settings"}
                        onClick={this.callSettings}
                    />
                    <HeaderButton
                        icon={"person"} 
                        tooltip={"Profile"}
                        onClick={this.callProfile}
                    />
                </ul>
            </div>
        );
    }

    private callNotifications() {
        const { notificationsClick } = this.props;
        if (notificationsClick) {notificationsClick();}
    }

    private callSettings() {
        const { settingsClick } = this.props;
        if (settingsClick) {settingsClick();}
    }

    private callProfile() {
        const { profileClick } = this.props;
        if (profileClick) {profileClick();}
    }
}

const StyledNavbar = styled(HeaderBar)`
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px 24px 0px 8px;
    padding-left: 5px;
    font-weight: bold;
    font-size: 110%;
    overflow: hidden;
    background-color: ${props => props.theme.primary};

    transition-duration: 0.2s;

    ul {
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`

export default StyledNavbar;