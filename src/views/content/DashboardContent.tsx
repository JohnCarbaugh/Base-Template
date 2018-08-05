import * as React from 'react';

import BoxWrapper from "../wrappers/BoxWrapper";
import ContentWrapper from '../wrappers/ContentWrapper';
import FlexColWrapper from '../wrappers/FlexColWrapper';
import FlexRowWrapper from '../wrappers/FlexRowWrapper';

import { allData } from "../../constants/TopGraphMockData";
import BottomGraph from "../components/dashboard/BottomGraph";
import TopGraph from "../components/dashboard/TopGraph";

import Button from "../controls/button/Button";
import { ColorType } from "../controls/button/constants/ColorType";

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
                <FlexColWrapper width={"100%"}>
                    <FlexRowWrapper maxHeight={"40%"} margin={rowMargin}>
                        <BoxWrapper margin={boxMargin} padding={"1%"}>
                            <TopGraph/>
                        </BoxWrapper>
                    </FlexRowWrapper>
                    <FlexRowWrapper flexWrap={"wrap"} margin={rowMargin}>
                        <FlexColWrapper minHeight={"50%"} minWidth={260} margin={rowMargin}>
                            <FlexRowWrapper margin={rowMargin}>
                                <BoxWrapper margin={boxMargin}>
                                    <Button
                                        colorType={ColorType.Secondary}
                                        colorHeader={ColorType.Quinary}
                                        justifyContent={"flex-start"}
                                        height={"100%"}
                                        width={"100%"}
                                        // icon={"markunread"}
                                    />
                                </BoxWrapper>
                                <BoxWrapper margin={boxMargin}>
                                    <Button
                                        colorType={ColorType.Secondary}
                                        colorHeader={ColorType.Senary}
                                        justifyContent={"flex-start"}
                                        height={"100%"}
                                        width={"100%"}
                                        // icon={"keyboard_voice"}
                                    />
                                </BoxWrapper>
                            </FlexRowWrapper>
                            <FlexRowWrapper margin={rowMargin}>
                                <BoxWrapper margin={boxMargin}>
                                    <Button
                                        colorType={ColorType.Secondary}
                                        colorHeader={ColorType.Septenary}
                                        justifyContent={"flex-start"}
                                        height={"100%"}
                                        width={"100%"}
                                        // icon={"commute"}
                                    />
                                </BoxWrapper>
                                <BoxWrapper margin={boxMargin}>
                                    <Button
                                        colorType={ColorType.Secondary}
                                        colorHeader={ColorType.Octonary}
                                        justifyContent={"flex-start"}
                                        height={"100%"}
                                        width={"100%"}
                                        // icon={"style"}
                                    />
                                </BoxWrapper>
                            </FlexRowWrapper>
                        </FlexColWrapper>
                        <FlexColWrapper minHeight={"50%"} minWidth={260} margin={rowMargin}>
                            <BoxWrapper margin={boxMargin}>
                                <BottomGraph data={allData}/>
                            </BoxWrapper>
                        </FlexColWrapper>
                    </FlexRowWrapper>
                </FlexColWrapper>
            </ContentWrapper>
        );
    }
}

export default DashboardContent;