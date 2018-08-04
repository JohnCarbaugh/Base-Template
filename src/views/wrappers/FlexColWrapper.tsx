import * as React from "react";
import styled from "styled-components";

interface Props {
    className?: string;
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
`;
