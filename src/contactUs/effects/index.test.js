import {submit} from './index'
import store from 'store'
import {testData} from '../testData'

jest.mock('store', () => ({
  set: jest.fn()
}))
test('should submit', () => {
  return submit(testData).then(data => {
      expect(data).toBe(testData)
    expect(store.set).toBeCalledWith('contactMeMessage', JSON.stringify(testData));
  })
})
