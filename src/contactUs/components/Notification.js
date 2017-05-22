import React, {Component} from 'react'
import Snackbar from 'material-ui/Snackbar';
import {connect} from 'react-redux';

const Notification = (props)=>
    (
        <Snackbar
            message={'Saved'}
            open={props.saved}
            autoHideDuration={3000}
        />
    )

const mapStateToProps = state => {
    const {saved} = state;
    return {
        saved
    }
};
export default connect(mapStateToProps)(Notification);