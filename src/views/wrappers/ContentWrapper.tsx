import * as React from "react";
import styled from "styled-components";

interface Props {
    className?: string;

    padding?: string;
}

class ContentWrapper extends React.Component<Props> {
    public constructor(props: Props) {
        super(props);
    }

    public render() {
        const { className } = this.props;
        return (
            <div id={"content-wrapper"} className={className}>
                {this.props.children}
            </div>
        );
    }
}

export default styled(ContentWrapper)`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: ${(props) => props.padding ? props.padding : "0"};

    background-color: ${(props) => props.theme.tertiary};
`;
