import * as React from 'react';

// import Section from "../components/Section";
import ContentWrapper from '../wrappers/ContentWrapper';

interface Props {
    className?: string;
}

class DiscussionContent extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <ContentWrapper>
                {/* <Section text={"1"}/>
                <Section text={"2"}/>
                <Section text={"3"}/> */}
            </ContentWrapper>
        );
    }
}

export default (DiscussionContent);