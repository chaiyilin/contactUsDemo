import * as actions from './index'
import * as types from './actionTypes'

describe('actions', () => {
    it('should create an action to updateAdAmount', () => {
        const text = 'Finish docs'
        const expectedAction = {
            type: types.UPDATE_AD_AMOUNT,
            payload: {
                productId:1,
                amount:2
            }
        };
        expect(actions.updateAdAmount(1,2)).toEqual(expectedAction)
    })
});