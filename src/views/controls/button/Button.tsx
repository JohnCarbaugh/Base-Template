import * as React from "react";
import styled from "styled-components";
import { ColorType } from "./constants/ColorType";

interface Props {
    className?: string;
    id?: string;

    isPressed?: boolean;

    colorType: ColorType;
    colorPressed?: ColorType;

    isDisabled?: boolean;
    icon?: string;
    text?: string | JSX.Element | JSX.Element[];
    tooltip?: string;

    height?: number;
    width?: number;
    borderRadius?: number;

    marginTop?: number;
    marginBottom?: number;
    marginRight?: number;
    marginLeft?: number;

    paddingTop?: number;
    paddingBottom?: number;
    paddingRight?: number;
    paddingLeft?: number;

    onClick?: (event: React.SyntheticEvent<{}>) => void;
    form?: string;
}

class Button extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    public render() {

        const {
            className,
            id,
            isDisabled,
            icon,
            onClick,
            text,
            form,
            tooltip,
        } = this.props;

        return (
            <button
                className={className}
                id={id}
                disabled={isDisabled}
                onClick={onClick}
                form={form}
                title={tooltip}
            >
                {icon &&
                    <i className="icon material-icons">{icon}</i>
                }
                <span>
                    {text}
                </span>
            </button>
        );
    }

}

export default styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 100ms ease, color 100ms ease;

    color: ${(props) =>
    props.isPressed ?
    (props.colorPressed ?
        props.theme[props.colorPressed + "PressedFont"] :
        props.theme[props.colorType + "PressedFont"]) :
    props.theme[props.colorType + "Font"] };

    background-color: ${(props) =>
    props.isPressed ?
    (props.colorPressed ? props.theme[props.colorPressed] : props.theme[props.colorType + "Pressed"]) :
    props.theme[props.colorType]};

    &:hover {

        span, i {
            color: ${(props) =>
            props.isPressed ?
            (props.colorPressed ? props.theme[props.colorPressed] : props.theme[props.colorType + "PressedFont"]) :
            props.theme[props.colorType + "HoverFont"] };
        }

        background-color: ${(props) =>
        props.isPressed ?
        (props.colorPressed ? props.theme[props.colorPressed] : props.theme[props.colorType + "Pressed"]) :
        props.theme[props.colorType + "Hover"] };
    }

    height: ${(props) => props.height ? String(props.height) + "px" : "0px" };
    width: ${(props) => props.width ? String(props.width) + "px" : "0px" };

    border: none;
    border-radius: ${(props) => props.borderRadius ? String(props.borderRadius) + "px" : "0px"};

    margin-top: ${(props) => props.marginTop ? String(props.marginTop) + "px" : "0px" };
    margin-right: ${(props) => props.marginRight ? String(props.marginRight) + "px" : "0px" };
    margin-bottom: ${(props) => props.marginBottom ? String(props.marginBottom) + "px" : "0px" };
    margin-left: ${(props) => props.marginLeft ? String(props.marginLeft) + "px" : "0px" };

    opacity: ${(props) => props.isDisabled ? 0.5 : 1};
    cursor: ${(props) => props.isDisabled ? "default" : "pointer"};

    span, i {
        pointer-events: none;
        color: ${(props) =>
        props.isPressed ?
        (props.colorPressed ?
            props.theme[props.colorPressed + "PressedFont"] :
            props.theme[props.colorType + "PressedFont"]) :
        props.theme[props.colorType + "Font"] };
    }
`;
