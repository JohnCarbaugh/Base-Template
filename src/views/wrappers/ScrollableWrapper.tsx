import * as React from "react";
import styled from "styled-components";

interface Props {
    className?: string;
    canScrollY?: boolean;
    canScrollX?: boolean;
    showXBar?: boolean;
    showYBar?: boolean;
    barPadding?: number;
}

class ScrollableWrapper extends React.Component<Props> {
    public constructor(props: Props) {
        super(props);
    }

    public render() {
        const { className } = this.props;
        return (
            <div id={"scrollable-wrapper"} className={className}>
                {this.props.children}
            </div>
        );
    }
}

export default styled(ScrollableWrapper)`
    display: flex;
    flex-direction: column;
    flex: 1;
    /* width: 100%; */
    min-width: 0px;
    align-items: center;

    overflow-x: ${(props) => props.canScrollX ? "auto" : "hidden"};
    overflow-y: ${(props) => props.canScrollY ? "auto" : "hidden" };

    padding-right: ${(props) => props.showYBar ? "0px" : String(props.barPadding) + "px" };
    padding-bottom: ${(props) => props.showXBar ? "0px" : String(props.barPadding) + "px" };
`;
