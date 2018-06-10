import * as React from "react";

interface Props {
    icon: string;
    addClass?: string;
}

export class MaterialIcon extends React.PureComponent <Props, {}> {

    public constructor(props: Props) {
        super(props);
    }

    public render() {
        const className = "material-icons " + (this.props.addClass || "");
        return (
            <i className={className}>{this.props.icon}</i>
        );
    }

}
