//https://wetainment.com/testing-indexjs/
import Index from './index.js';

it('renders without crashing', () => {
  expect(JSON.stringify(
    Object.assign({}, Index, { _reactInternalInstance: 'censored' })
  )).toMatchSnapshot();
});