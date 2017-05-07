import React, {Component} from 'react';
import {connect} from 'react-redux';
import HeadBar from './headbar';
import Login from './login';
import Products from './Products';

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {currentUser} = this.props;
        const app = (
            <div >
                <HeadBar/>
                <Products/>
            </div>
        );

        return (
            currentUser ? app : (<Login/>)
        )
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
};

export default connect(mapStateToProps)(App);
