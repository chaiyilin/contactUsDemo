import React from 'react'
import {ContactUs} from './component'
import {submit} from '../../actions'

//Testing basic component rendering
it('should render ContactUs', () => {
  const wrapper = shallow(
    <ContactUs/>
  );
  expect(wrapper).toMatchSnapshot();
});

//Testing props
/*it('should render a document title', () => {
  const wrapper = shallow(
    <ContactUs onSubmit={submit} />
  );
  expect(wrapper.prop('onSubmit')).toEqual('submit');
});*/
