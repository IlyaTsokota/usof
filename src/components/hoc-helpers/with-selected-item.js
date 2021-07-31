import React, { Component } from 'react';

const withSelectedItem = (Wrapper) => {
    return class extends Component {
        state = {
            selectedItemId: null
        }

        onItemSelected = (id) => {
            this.setState({
                selectedItemId: id,
            })
        };

        render() {
            return (
                <Wrapper onItemSelected={this.onItemSelected} itemId={this.state.selectedItemId} />
            );
        }
    };
};

export default withSelectedItem;