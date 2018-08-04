import { push } from 'connected-react-router';
import * as React from 'react';
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { bindActionCreators } from "redux";
import { RootState } from "../../state/rootReducer";

import SubHeader from "../components/header/SubHeader"

import { Path } from "../../constants/Path";

// tslint:disable no-empty-interface
export interface HeaderContainerProps {
    className?: string;
}

interface PropsFromState {
    location?: string;
}

interface PropsFromDispatch {
    push: typeof push;
}

type Props = HeaderContainerProps & PropsFromState & PropsFromDispatch;

class SubHeaderContainer extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
        this.handleTopicOneClick = this.handleTopicOneClick.bind(this);
        this.handleTopicTwoClick = this.handleTopicTwoClick.bind(this);
    }

    public render() {
        return (
            <SubHeader
                location={this.props.location}
                topicOneClick={this.handleTopicOneClick}
                topicTwoClick={this.handleTopicTwoClick}
            />
        );
    }

    private handleTopicOneClick() {
        this.props.push(Path.topicOne);
    }

    private handleTopicTwoClick() {
        this.props.push(Path.topicTwo);
    }

}

const mapStateToProps = (state: RootState): PropsFromState => {
    return {
        location: state.router.location.pathname,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<{}>): PropsFromDispatch => {
    return bindActionCreators(
        {
            push,
        },dispatch,
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(SubHeaderContainer);
