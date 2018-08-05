import * as React from "react";
import {
    // Cell,
    // Pie,
    // PieChart,
    // Bar,
    // BarChart,
    // CartesianGrid,

    ResponsiveContainer,
    Scatter,
    ScatterChart,
    // Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import styled from "styled-components";
// import { allData } from "../../../constants/TopGraphMockData";

interface Props {
    className?: string;
    data: object[];
}

const data01 = [
    {x: 100, y: 200, z: 200},
    {x: 120, y: 100, z: 260},
    {x: 170, y: 300, z: 400},
    {x: 140, y: 250, z: 280},
    {x: 150, y: 400, z: 500},
    {x: 110, y: 280, z: 200},
  ];
  const data02 = [
    {x: 300, y: 300, z: 200},
    {x: 400, y: 500, z: 260},
    {x: 200, y: 700, z: 400},
    {x: 340, y: 350, z: 280},
    {x: 560, y: 500, z: 500},
    {x: 230, y: 720, z: 200},
    {x: 500, y: 400, z: 200},
    {x: 300, y: 500, z: 260},
    {x: 240, y: 300, z: 400},
    {x: 320, y: 550, z: 280},
    {x: 500, y: 400, z: 500},
    {x: 420, y: 280, z: 200},
  ];

  const data03 = [
    {x: 90, y: 175, z: 156},
    {x: 114, y: 112, z: 242},
    {x: 190, y: 245, z: 320},
    {x: 56, y: 275, z: 230},
    {x: 142, y: 390, z: 476},
    {x: 100, y: 234, z: 250},
  ];
  const data04 = [
    {x: 300, y: 300, z: 200},
    {x: 400, y: 500, z: 260},
    {x: 200, y: 700, z: 400},
    {x: 340, y: 350, z: 280},
    {x: 560, y: 500, z: 500},
    {x: 230, y: 750, z: 200},
    {x: 500, y: 400, z: 200},
    {x: 300, y: 500, z: 260},
    {x: 240, y: 300, z: 400},
    {x: 320, y: 550, z: 280},
    {x: 500, y: 400, z: 500},
    {x: 420, y: 280, z: 200},
  ];

class BottomGraph extends React.Component<Props> {

    constructor(props: Props) {
        super(props);

        this.handleArrivalChartClick = this.handleArrivalChartClick.bind(this);
        this.handleArrivalBarClick = this.handleArrivalBarClick.bind(this);
        this.handleArrivalFilterClick = this.handleArrivalFilterClick.bind(this);
    }

    public render() {
        const {
            className,
        } = this.props;


        return (
            <div className={className}>
                {/* <FilterBar
                    title="VIEW BY:"
                    filters={defaultFilters}
                    activeFilter={this.props.arrivalFilter}
                    onClick={this.handleArrivalFilterClick}
                /> */}
                <ResponsiveContainer height={"100%"} width="100%">
                    <ScatterChart>
                        <XAxis type="number" dataKey={'x'} name='stature' unit='cm'/>
                        <YAxis yAxisId="right" type="number" dataKey="y" name='weight' unit='kg' orientation="right" hide={true}/>
                        <Scatter yAxisId="right" name='A school' data={data01} fill='#01C0C8'/>
                        <Scatter yAxisId="right" name='A school' data={data02} fill='#AB8CE4'/>
                        <Scatter yAxisId="right" name='A school' data={data03} fill='#00C292'/>
                        <Scatter yAxisId="right" name='A school' data={data04} fill='#FB9678'/>
                    </ScatterChart>
            </ResponsiveContainer>
            </div>
        );
    }

    // tslint:disable:no-any
    private handleArrivalChartClick(object: any) {
        // let payload: ArrivalShape = {} as ArrivalShape;
        // if (object && object.activePayload) {
        //     object.activePayload.forEach((item: any, index: number) => {
        //         payload = item.payload;
        //     });

        //     const handler = this.props.arrivalClick;
        //     if (handler && payload) {
        //         handler(payload);
        //     }
        // }
    }

    private handleArrivalBarClick(object: any) {
        // console.log(object);
    }

    private handleArrivalFilterClick() {
        // const handler = this.props.arrivalFilterClick;
        // if (handler) {
        //     handler(filter);
        // }
    }
}

export default styled(BottomGraph)`
    display: flex;
    flex-direction: row;
    flex: 1;
    height: 100%;
    min-width: 0px;

    /* path.recharts-rectangle {
        fill: red;
    } */

    .recharts-layer.recharts-bar-rectangle {
        fill: ${(props) => props.theme.quinary}
    }

    .recharts-text.recharts-cartesian-axis-tick-value {
        fill: ${(props) => props.theme.quaternaryFont};
    }

`;
