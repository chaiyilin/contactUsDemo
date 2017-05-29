/* global describe it expect */

import {saved} from './index'
import {testData} from '../testData'

describe('SUBMIT_SUCCEEDED reducer', () => {
  it('should set saved to true', () => {
    const action = {
      type: 'SUBMIT_SUCCEEDED',
      payload: testData
    }
    expect(saved(undefined, action)).toEqual({saved: true})
  })
})
