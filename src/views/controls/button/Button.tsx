import * as React from "react";
import styled from "styled-components";
import { ColorType } from "./constants/ColorType";

interface Props {
    className?: string;
    id?: string;

    isPressed?: boolean;

    colorType: ColorType;
    colorPressed?: ColorType;
    colorHeader?: ColorType;

    isDisabled?: boolean;
    icon?: string;
    text?: string | JSX.Element | JSX.Element[];
    tooltip?: string;

    justifyContent?: string;

    height?: string;
    width?: string;
    borderRadius?: number;

    marginTop?: number;
    marginBottom?: number;
    marginRight?: number;
    marginLeft?: number;
    margin?: string;

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
            // isDisabled,
            icon,
            colorHeader,
            onClick,
            text,
            // form,
            tooltip,
        } = this.props;

        return (
            <div
                className={className}
                id={id}
                onClick={onClick}
                title={tooltip}
            >
                { colorHeader && <div className={"btn-header"}/>}
                { icon && <i className="icon material-icons">{icon}</i> }
                <span>
                    {text}
                </span>
            </div>
        );
    }

}

export default styled(Button)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${(props) => props.justifyContent ? props.justifyContent : "center"};

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

        .btn-header {
            background-color: ${(props) => props.colorHeader ? props.theme[props.colorHeader + "Hover"] : "transparent"};
        }

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

    height: ${(props) => props.height ? props.height : "0px" };
    width: ${(props) => props.width ? props.width : "0px" };

    border: none;
    border-radius: ${(props) => props.borderRadius ? String(props.borderRadius) + "px" : "0px"};

    margin-top: ${(props) => props.marginTop ? String(props.marginTop) + "px" : "0px" };
    margin-right: ${(props) => props.marginRight ? String(props.marginRight) + "px" : "0px" };
    margin-bottom: ${(props) => props.marginBottom ? String(props.marginBottom) + "px" : "0px" };
    margin-left: ${(props) => props.marginLeft ? String(props.marginLeft) + "px" : "0px" };
    margin: ${(props) => props.margin ? props.margin : "0px"}

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

    .btn-header {
        width: 100%;
        height: 20%;
        min-height: 20%;
        max-height: 20%;
        background-color: ${(props) => props.colorHeader ? props.theme[props.colorHeader] : "transparent"};
    }
`;
