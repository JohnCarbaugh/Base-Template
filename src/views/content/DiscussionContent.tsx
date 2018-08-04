import * as React from 'react';
import styled from 'styled-components';

import Section from "../components/Section";

interface Props {
    className?: string;
}

class DiscussionContent extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        const { className } = this.props;
        return (
            <div id="topic-one-content" className={className}>
                <div className="detail" >
                    <Section text={"Dicussion"}/>
                </div>
            </div>
        );
    }
}

export default styled(DiscussionContent)`
    display: flex;
    flex-direction: row;
    flex: 1;
    transition: 0.2s;

    background-color: ${props => props.theme.foreground};

    .detail {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding: 16px;
        transition: 0.2s;

        color: ${props => props.theme.primaryFont};
        background-color: ${props => props.theme.background};
    }
`