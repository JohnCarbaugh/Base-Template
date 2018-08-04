import * as React from 'react';

import Section from "../components/Section";
import ContentWrapper from '../wrappers/ContentWrapper';
import FlexColWrapper from '../wrappers/FlexColWrapper';
import FlexRowWrapper from '../wrappers/FlexRowWrapper';

interface Props {
    className?: string;
}

const contentPadding = "0.8%";
const sectionMargin = "0.4%";
const rowMargin = "0.1%";

class DashboardContent extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <ContentWrapper padding={contentPadding}>
                <FlexColWrapper>
                    <FlexRowWrapper margin={rowMargin}>
                        <Section text={"one"} margin={sectionMargin}/>
                        <Section text={"two"} margin={sectionMargin}/>
                    </FlexRowWrapper>
                    <FlexRowWrapper margin={rowMargin}>
                        <Section text={"three"} margin={sectionMargin}/>
                        <Section text={"four"} margin={sectionMargin}/>
                    </FlexRowWrapper>
                </FlexColWrapper>
            </ContentWrapper>
        );
    }
}

export default DashboardContent;