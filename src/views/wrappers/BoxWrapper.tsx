import * as React from 'react';
import styled from 'styled-components';

interface Props {
    className?: string;

    margin?: string;
    padding?: string;

    width?: string;
    minWidth?: string;
    maxWidth?: string;
}

class BoxWrapper extends React.Component<Props> {
    public render() {
        const { className } = this.props;
        return (
            <div id="box" className={className} >
                {this.props.children}
            </div>
        );
    }
}

export default styled(BoxWrapper)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    overflow: hidden;

    transition: 0.2s;

    margin: ${(props) => props.margin ? props.margin : "0" };
    padding: ${(props) => props.padding ? props.padding : "0" };

    width: ${(props) => props.width ? props.width : "auto" };
    min-width: ${(props) => props.minWidth ? props.minWidth : "auto" };
    max-width: ${(props) => props.maxWidth ? props.maxWidth : "auto" };

    color: ${props => props.theme.quaternaryFont};
    background-color: ${props => props.theme.quaternary};
`