import * as React from 'react';
import styled from 'styled-components';
import SubHeaderButton from './SubHeaderButton';

import { Path } from "../../../constants/Path";

interface Props {
    className?: string;
    location?: string;

    topicOneClick: () => void;
    topicTwoClick: () => void;
}

class SubHeader extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.onTopicOneClick = this.onTopicOneClick.bind(this);
        this.onTopicTwoClick = this.onTopicTwoClick.bind(this);
    }

    public render() {

        const { location } = this.props;

        return (
            <div id="subheader" className={this.props.className} >
                <ul>
                    <SubHeaderButton
                        isActive={location === Path.topicOne ? Path.topicOne : ""}
                        text={"Topic One"}
                        // icon={"description"}
                        onClick={this.onTopicOneClick}
                    />
                    <SubHeaderButton
                        isActive={location === Path.topicTwo ? Path.topicTwo : ""}
                        text={"Topic Two"}
                        // icon={"note_add"}
                        onClick={this.onTopicTwoClick}
                    />
                </ul>
            </div>
        );
    }

    private onTopicOneClick() {
        const { topicOneClick } = this.props;
        if (topicOneClick) {topicOneClick();}
    }

    private onTopicTwoClick() {
        const { topicTwoClick } = this.props;
        if (topicTwoClick) {topicTwoClick();}
    }
}

export default styled(SubHeader)`
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 24px 0px 8px;
    padding-left: 5px;
    font-weight: bold;
    font-size: 125%;
    overflow: hidden;
    background-color: ${props => props.theme.secondary};

    transition-duration: 0.2s;

    ul {
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`