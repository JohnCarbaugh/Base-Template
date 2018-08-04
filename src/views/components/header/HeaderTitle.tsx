import * as React from 'react';
import styled from 'styled-components';

interface Props {
    className?: string;
}

class HeaderTitle extends React.Component<Props> {
  public render() {
    return (
        <div className={this.props.className} >
            {/* <img src={logo} /> */}
            <span>Company</span>
        </div>
    );
  }
}

export default styled(HeaderTitle)`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 220px;
    min-width: 220px;
    margin-right: 12px;

    transition-duration: 0.2s;

    img {
        height: 30px;
        width: 30px;
        margin-right: 12px;
    }

    span {
        color: white;
        min-width: 0px;
    }
`