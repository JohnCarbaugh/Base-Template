import * as React from 'react';

import BoxWrapper from "../wrappers/BoxWrapper";
import ContentWrapper from '../wrappers/ContentWrapper';
import FlexColWrapper from '../wrappers/FlexColWrapper';
import FlexRowWrapper from '../wrappers/FlexRowWrapper';

interface Props {
    className?: string;
}

const contentPadding = "1.2%";
const boxMargin = ".8%";
const rowMargin = "0.2%";

class DashboardContent extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <ContentWrapper padding={contentPadding}>
                <FlexColWrapper>
                    <FlexRowWrapper margin={rowMargin}>
                        <BoxWrapper margin={boxMargin}>
                            <span>Graph Here</span>
                        </BoxWrapper>
                    </FlexRowWrapper>
                    <FlexRowWrapper flexWrap={"wrap"}>
                        <FlexColWrapper minWidth={200} margin={rowMargin}>
                            <FlexRowWrapper>
                                <BoxWrapper margin={boxMargin}>
                                    <span>one</span>
                                </BoxWrapper>
                                <BoxWrapper margin={boxMargin}>
                                    <span>two</span>
                                </BoxWrapper>
                            </FlexRowWrapper>
                            <FlexRowWrapper>
                                <BoxWrapper margin={boxMargin}>
                                <span>three</span>
                                </BoxWrapper>
                                <BoxWrapper margin={boxMargin}>
                                    <span>four</span>
                                </BoxWrapper>
                            </FlexRowWrapper>
                        </FlexColWrapper>
                        <FlexColWrapper minWidth={200} margin={rowMargin}>
                            <BoxWrapper margin={boxMargin}/>
                        </FlexColWrapper>
                    </FlexRowWrapper>
                </FlexColWrapper>
            </ContentWrapper>
        );
    }
}

export default DashboardContent;