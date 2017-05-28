/* global test expect */

import {submit} from './index'
import store from 'store'
import {testData} from '../testData'

jest.mock('../dependency', () => ({
  doSomething: jest.fn()
}))
test('should submit', () => {
  return submit(testData).then(data => {
    expect(data).toBe(testData)
  })
})
