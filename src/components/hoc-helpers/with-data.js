import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorBoundry from '../error-boundry';

const withData = (View) => {
    return class extends Component {
        state = {
            data: null,
            loading: true
        }

        componentDidUpdate(prevProps) {
            if (this.props.getData !== prevProps.getData) {
                this.update();
            }
        }

        componentDidMount() {
            this.update();
        }

        onItemsLoaded = (data) => {
            this.setState({
                data,
                loading: false
            });
        };

        update = () => {
            this.props.getData()
                .then(this.onItemsLoaded);
        }

        render() {
            const { loading, data } = this.state;

            const content = loading
                ? <Spinner />
                : (
                    <ErrorBoundry>
                        <View {...this.props} data={data} />
                    </ErrorBoundry>
                );

            return content;
        }
    };
};

export default withData;