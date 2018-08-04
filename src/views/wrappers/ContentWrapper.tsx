import * as React from "react";
import styled from "styled-components";

interface Props {
    className?: string;
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
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.theme.background};
`;
