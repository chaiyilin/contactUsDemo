import React, {Component} from 'react';
import {connect} from 'react-redux';
import ContactUs from './ContactUs';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {currentUser} = this.props;
        const app = (
            <div >
                <ContactUs/>
            </div>
        );

        return app
    }
}

const mapStateToProps = state => {
    const {currentUser} = state;
    return {
        currentUser
    }
};

const centre = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

};

export default connect(mapStateToProps)(App);
