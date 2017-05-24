/* global describe it expect */

import * as actions from './index'
import {testData} from '../testData'

describe('actions', () => {
  it('should create an action to SUBMIT', () => {
    const expectedAction = {
      type: 'SUBMIT',
      payload: testData
    }
    expect(actions.submit(expectedAction.payload)).toEqual(expectedAction)
  })
})
