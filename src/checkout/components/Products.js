import React, {Component} from 'react';
import { connect } from 'react-redux';
import ProductsHeader from './ProductsHeader';
import ProductsList from './ProductsList';
import Total from './Total';
import CheckoutButton from './CheckoutButton';

class Products extends Component {
    render() {
        return (
            <div style={productsStyle}>
                <ProductsHeader/>
                <ProductsList products={this.props.products}></ProductsList>
                <Total/>
                <CheckoutButton/>
            </div>
        )
    }
}

const productsStyle={
    marginTop:'20px',
    fontSize:'20px'
}
const mapStateToProps = state => {
    const {products} = state;
    return {
        products
    }
};
export default connect(mapStateToProps)(Products);