import React, {Component} from 'react';
import {Row, Col} from 'antd';
import Paper from 'material-ui/Paper';
import _ from 'lodash';
import {connect} from 'react-redux';
import {productTotalMargin} from './style';
import RaisedButton from 'material-ui/RaisedButton';

class Total extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={productTotalMargin}>
                <Row>
                    <Col span={16} offset={4}>
                        <Row>
                            <Col span={18} style={alignRight}>
                            </Col>

                            <Col span={6} style={alignRight}>
                                <RaisedButton label='Checkout'
                                              labelPosition={'before'}
                                              fullWidth={true}
                                              primary={true}
                                              buttonStyle={{height: '50px'}}
                                              labelStyle={{fontSize: '25px'}}
                                              />
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}


const alignRight= {
    display: 'flex',
        justifyContent: 'flex-end',
};

const mapStateToProps = state => {
    const {products} = state;
    return {
        products
    }
};

export default connect(mapStateToProps)(Total);