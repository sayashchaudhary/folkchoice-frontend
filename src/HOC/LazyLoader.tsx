import React, {Component} from "react";

const lazyLoader = (importComponent: () => Promise<{ default: any; }>) => {
    return class extends Component {
        state = {
            component: null
        };

        componentDidMount() {
            importComponent()
                .then((cmp: { default: any; }) => {
                    this.setState({component: cmp.default});
                })
        }

        render() {
            const CustComponent = this.state.component;
            return CustComponent ? <CustComponent {...this.props} /> : null;
        }
    }
};

export default lazyLoader;
