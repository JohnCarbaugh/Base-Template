import { push } from 'connected-react-router';
import * as React from "react"
import { connect } from "react-redux"
import { bindActionCreators, Dispatch } from "redux";
import { RootState } from "../../state/rootReducer";

import TopicOneContent from "../content/TopicOneContent";

interface BomListPageProps {
    className?: string;
}

interface PropsFromState {
    //
}

interface PropsFromDispatch {
    push: typeof push;
}

type Props = BomListPageProps & PropsFromState & PropsFromDispatch;
type State = never;

class BomListPage extends React.PureComponent<Props, State> {

    constructor(props: Props) {
        super(props);
    }

    public componentWillMount() {
        // request data
    }

    public componentWillUnmount() {
        // clear data
    }

    public render() {
        return (
            <TopicOneContent />
        )
    }

    // #region Callbacks

    // #endregion

}

const mapStateToProps = (state: RootState): PropsFromState => ({
    // TODO
})

const mapDispatchToProps = (dispatch: Dispatch<RootState>): PropsFromDispatch => bindActionCreators({
    push,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BomListPage)