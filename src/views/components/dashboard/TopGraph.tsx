import * as React from "react";
import {
    Line,
    LineChart,
    // Bar,
    // BarChart,
    // Cell,

    ResponsiveContainer,
    // Tooltip,
    XAxis,
    YAxis,
} from "recharts";
import styled from "styled-components";

interface Props {
    className?: string;
    // data: object[];
}

const data = [
    {name: 'Q1', uv: 4000, pv: 2400, amt: 2400, tc: 3000},
    {name: 'Q2', uv: 3000, pv: 1398, amt: 2210, tc: 1700},
    {name: 'Q3', uv: 2000, pv: 9800, amt: 2290, tc: 6000},
    {name: 'Q4', uv: 2780, pv: 3908, amt: 4000, tc: 1500},
];

class TopGraph extends React.Component<Props> {

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
                <ResponsiveContainer>
                <LineChart data={data}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    {/* <Tooltip/> */}
                    {/* <Legend /> */}
                    <Line type="natural" dataKey="pv" stroke={"#01C0C8"} strokeWidth={3} />
                    <Line type="natural" dataKey="uv" stroke={"#AB8CE4"} strokeWidth={3} />
                    <Line type="natural" dataKey="amt" stroke={"#00C292"} strokeWidth={3} />
                    <Line type="natural" dataKey="tc" stroke={"#FB9678"} strokeWidth={3} />
                </LineChart>
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

export default styled(TopGraph)`
    display: flex;
    flex-direction: row;
    flex: 1;
    height: 100%;
    min-width: 0px;

    .recharts-wrapper {
        color: ${(props) => props.theme.tertiary};
    }
    text.recharts-text.recharts-cartesion-axis-tick-value {
        color: ${(props) => props.theme.quaternaryFont};
    }

    text.recharts-text.recharts-cartesian-axis-tick-value {
        fill: ${(props) => props.theme.quaternaryFont};
    }
`;
