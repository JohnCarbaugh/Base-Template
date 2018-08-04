import * as React from "react";
import styled from "styled-components";

interface Props {
    className?: string;

    justifyContent?: string;
    alignItems?: string;
    position?: string;

    flexWrap?: string;
    
    minWidth?: number;

    height?: number;
    minHeight?: number;

    paddingTop?: number;
    paddingRight?: number;
    paddingBottom?: number;
    paddingLeft?: number;
    padding?: number;

    marginRight?: number;
    marginLeft?: number;
    margin?: string;

}

class FlexRowWrapper extends React.Component<Props> {
    public constructor(props: Props) {
        super(props);
    }

    public render() {
        const { className } = this.props;
        return (
            <div id={"flex-row-wrapper"} className={className}>
                {this.props.children}
            </div>
        );
    }
}

export default styled(FlexRowWrapper)`
    flex: 1;
    flex-wrap: ${(props) => props.flexWrap ? props.flexWrap : "nowrap" };
    display: flex;
    flex-direction: row;
    justify-content: ${(props) => props.justifyContent ? String(props.justifyContent) : "flex-start" };
    align-items: ${(props) => props.alignItems ? props.alignItems : "auto" };
    position: ${(props) => props.position ? props.position : "auto"};

    min-height: ${(props) => props.minHeight ? String(props.minHeight) + "px" : "auto" };
    height: ${(props) => props.height ? String(props.height) + "px" : "auto" };

    min-width: ${(props) => props.minWidth ? String(props.minWidth) + "px" : "0" };

    padding-top: ${(props) => props.paddingTop ? String(props.paddingTop) + "px" : "0px" };
    padding-right: ${(props) => props.paddingRight ? String(props.paddingRight) + "px" : "0px" };
    padding-bottom: ${(props) => props.paddingBottom ? String(props.paddingBottom) + "px" : "0px" };
    padding-left: ${(props) => props.paddingLeft ? String(props.paddingLeft) + "px" : "0px" };
    padding: ${(props) => props.padding ? String(props.padding) + "px" : "0px" };

    margin-right: ${(props) => props.marginRight ? String(props.marginRight) + "px" : "0px" };
    margin-left: ${(props) => props.marginLeft ? String(props.marginLeft) + "px" : "0px" };
    margin: ${(props) => props.margin ? props.margin : "0" };
`;
