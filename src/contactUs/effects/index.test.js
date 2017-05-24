/* global test expect */

import {submit} from './index'
import {testData} from '../testData'

test('should submit', () => {
  return submit(testData).then(data => {
    expect(data).toBe(testData)
  })
})
