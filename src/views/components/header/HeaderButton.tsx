import * as React from 'react';
import styled from 'styled-components';
import { MaterialIcon } from '../MaterialIcon';

interface Props {
    className?: string;
    icon: string;
    tooltip: string;
    onClick: () => void;
}

class HeaderButton extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    public render() {
        const { className, icon, /*tooltip*/ } = this.props;
        return (
            <div id={"icon-" + icon} className={className} onClick={this.handleClick}>
                { icon && <MaterialIcon icon={icon} /> }
                {/* { text && <span id={text}>{text}</span> } */}
            </div>
        );
    }

    private handleClick() {
        const { onClick } = this.props;
        if (onClick) {onClick();}
    }
}

export default styled(HeaderButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin: 4px 6px 4px 6px;
    padding: 8px;
    border-radius: 4px;
    
    cursor: pointer;
    transition-duration: 0.2s;
    
    color: ${props => props.theme.primaryFont};

    &:hover {
        cursor: pointer;
        color: ${props => props.theme.primaryHoverFont};
        background-color: ${props => props.theme.primaryHover};
    }
`