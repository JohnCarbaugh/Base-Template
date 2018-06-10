import * as React from 'react';
import styled from 'styled-components';
import { MaterialIcon } from '../MaterialIcon';

interface Props {
    className?: string;
    isActive?: string;
    icon?: string;
    text?: string;
    onClick?: () => void;
}

class SubHeaderButton extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    public render() {
        const { className, isActive, icon, text } = this.props;
        const active = isActive ? " active" : "";
        return (
            <div id={"icon-" + icon} className={className + active} onClick={this.handleClick}>
                { icon && <MaterialIcon icon={icon} /> }
                { text && <span id={text}>{text}</span> }
            </div>
        );
    }

    private handleClick() {
        if(!this.props.isActive) {
            const { onClick } = this.props;
            if (onClick) {onClick();}
        }
    }
}

export default styled(SubHeaderButton)`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    text-align: center;
    margin: 4px 12px 0px 12px;
    padding: 8px;
    user-select: none;

    &.active {
        border-bottom: 3px solid white;
        color: ${props => props.theme.primaryFont};
    }

    cursor: pointer;
    transition-duration: 0.2s;
    
    color: ${props => props.theme.secondaryHover};
    
    .material-icons {
        margin-right: 8px;
    }

    &:hover {
        cursor: pointer;
        color: ${props => props.theme.primaryFont};
    }
`