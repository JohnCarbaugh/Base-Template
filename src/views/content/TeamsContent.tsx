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
// const rowMargin = "0.2%";
class TeamsContent extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <ContentWrapper padding={contentPadding}>
                <FlexRowWrapper height={"100%"}>
                    <BoxWrapper
                        // minWidth={"100px"}
                        maxWidth={"20%"}
                        minWidth={"200px"}
                        width={"20%"}
                        margin={boxMargin}
                        padding={"1%"}
                    >
                        <FlexColWrapper
                            overflowY={"scroll"}
                            height={"100%"}
                        >
                            {/* Master List Here */}
                        </FlexColWrapper>
                    </BoxWrapper>
                    <BoxWrapper margin={boxMargin} padding={"1%"}>
                        <FlexRowWrapper
                            overflowX={"scroll"}
                            height={"100%"}
                        >
                            {/* Detail Content Here */}
                        </FlexRowWrapper>
                    </BoxWrapper>
                </FlexRowWrapper>
            </ContentWrapper>
        );
    }
}

export default (TeamsContent);