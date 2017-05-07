import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import {Product} from './Product';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'//https://github.com/callemall/material-ui/issues/4030

const product = {
    id: 1,
    desc: 'Classic Ad',
    price: 269.99,
    amount: 0
};

const props = {
    key:product.id,
    updateAdAmount: jest.fn(),
    product:product
};

function setup() {
    const enzymeWrapper = mount(<MuiThemeProvider><Product {...props} /></MuiThemeProvider>)

    return {
        props,
        enzymeWrapper
    }
}

describe(Product, () => {
    let enzymeWrapper;
    beforeEach(() => {
        enzymeWrapper = setup().enzymeWrapper
    });

    it('should render', () => {
        expect(enzymeWrapper.text()).toContain(product.desc);
        expect(enzymeWrapper.text()).toContain('$'+product.price);
    })

    it('should trigger updateAdAmount', () => {
        const input = enzymeWrapper.find('input');
        input.simulate('change', { target: { value: 1 } });
        expect(props.updateAdAmount).toBeCalled();
    })
});