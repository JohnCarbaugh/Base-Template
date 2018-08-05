import * as React from "react";
import styled from "styled-components";

interface Props {
    className?: string;

    margin?: string;

    minWidth?: number;
    width?: string;

    minHeight?: string;
}

class FlexColWrapper extends React.Component<Props> {
    public constructor(props: Props) {
        super(props);
    }

    public render() {
        const { className } = this.props;
        return (
            <div id={"flex-col"} className={className}>
                {this.props.children}
            </div>
        );
    }
}

export default styled(FlexColWrapper)`
    flex: 1;
    display: flex;
    flex-direction: column;

    margin: ${(props) => props.margin ? props.margin : "0" };

    min-width: ${(props) => props.minWidth ? String(props.minWidth) + "px" : "0" };
    width: ${(props) => props.width ? props.width : "auto"};

    min-height: ${(props) => props.minHeight ? props.minHeight : "auto"};
`;
