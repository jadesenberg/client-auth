import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signout extends Component {
    componentWillMount() {
        this.props.signoutUser(); //auth action creator
    }

    render () {
        return (
            <div>Sign out!!</div>
        );
    }
}

export default connect(null, actions)(Signout);