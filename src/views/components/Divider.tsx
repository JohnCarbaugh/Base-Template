import * as React from "react";
import styled from "styled-components";

interface Props {
    className?: string;
    margin?: number;
    isVertical?: boolean;

    marginTop?: number;
    marginBottom?: number;
    marginRight?: number;
    marginLeft?: number;

    minHeight?: number;
}

const Divider: React.SFC<Props> = (props: Props) => (
    <hr className={props.className} />
);

export default styled(Divider)`

    width: ${(props) => props.isVertical ? "1px" : "auto" };
    height: ${(props) => props.isVertical ? "auto" : "1px" };
    min-height: ${(props) => props.minHeight ? String(props.minHeight) + "px" : "0px"};


    margin-top: ${(props) => props.marginTop ? String(props.marginTop) + "px" : "0px" };
    margin-bottom: ${(props) => props.marginBottom ? String(props.marginBottom) + "px" : "0px" };
    margin-right: ${(props) => props.marginRight ? String(props.marginRight) + "px" : "0px" };
    margin-left: ${(props) => props.marginLeft ? String(props.marginLeft) + "px" : "0px" };

    border: 0;
    background: ${(props) => props.theme.primaryDivider};
`;
