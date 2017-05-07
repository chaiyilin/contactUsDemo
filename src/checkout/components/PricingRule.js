import React, {Component} from 'react';
import {Row, Col} from 'antd';
import {Card} from 'material-ui/Card';

class PricingRule extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {pricingRule, product} = this.props;
        return (
            <Row>
                <Col span={18}>
                            <div style={pricingRuleStyle}>
                                {pricingRule.desc}
                            </div>
                </Col>

                <Col span={6} style={alignRight}>
                            <span>
                                {product.saved > 0 ? '-$' + product.saved : ''}
                            </span>
                </Col>

            </Row>
        )
    }
}

const alignRight= {
    display: 'flex',
        justifyContent: 'flex-end',
};

const pricingRuleStyle={
    marginLeft:'90px',
    fontSize:'15px',
    color:'black'
};





export default PricingRule