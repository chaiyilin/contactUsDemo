import React from 'react'
import App from './index'

it('should render App', () => {
  const wrapper = shallow(
    <App/>
  );
  expect(wrapper).toMatchSnapshot();
});