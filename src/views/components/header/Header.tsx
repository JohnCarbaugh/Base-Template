import * as React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';

import Button from '../../controls/button/Button';
import { ColorType } from '../../controls/button/constants/ColorType';

import FlexRowWrapper from '../../wrappers/FlexRowWrapper';
import Divider from '../Divider';

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
                <FlexRowWrapper justifyContent={"flex-start"}>
                    <div style={{width: "49px", height:"100%"}}/>
                    <Divider
                        isVertical={true}
                        // marginTop={6}
                        // marginBottom={6}
                        // marginRight={6}
                        // marginLeft={0}
                    />
                    <MediaQuery query="(max-width: 700px)">
                        <Button
                            colorType={ColorType.Primary}
                            icon={"menu"}
                            height={"100%"}
                            width={"50px"}
                        />
                    </MediaQuery>
                </FlexRowWrapper>
                <FlexRowWrapper justifyContent={"flex-end"} >
                    {/* <ConnectedThemePicker /> */}
                    <Divider
                        isVertical={true}
                        marginTop={6}
                        marginRight={6}
                        marginBottom={6}
                        marginLeft={6}
                    />
                    <span>John Smith</span>
                    <Divider
                        isVertical={true}
                        marginTop={6}
                        marginRight={6}
                        marginBottom={6}
                        marginLeft={6}
                    />
                </FlexRowWrapper>
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    height: 50px;
    min-height: 50px;

    background-color: ${(props) => props.theme.primary};
`

export default StyledNavbar;