import * as React from 'react';
import styled from 'styled-components';

interface Props {
    className?: string;
    text: string;
}

class Section extends React.Component<Props> {
    public render() {
        const { className, text } = this.props;
        return (
            <div id="box" className={className} >
                {text}
            </div>
        );
    }
}

export default styled(Section)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    transition: 0.2s;
    color: ${props => props.theme.foregroundFont};
    background-color: ${props => props.theme.foreground};
`