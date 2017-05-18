import reducer from './index';
import {UPDATE_AD_AMOUNT} from '../actions/actionTypes';
import {AUTH_LOGIN} from '../actions/actionTypes';
import preloadedState from './preloadedState';
import _ from 'lodash';

describe('root reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual(preloadedState)
    });
    describe('AUTH_LOGIN then UPDATE_AD_AMOUNT', () => {
        const loginState = reducer(preloadedState, {
            type: AUTH_LOGIN,
            payload: {
                username: 'ford',
                password: 'a'
            }
        });
        it('should handle AUTH_LOGIN', () => {
            expect(loginState.currentUser.username).toEqual('Ford');
            _.forEach(loginState.products, product => {
                expect(product.pricingRule.productId).toEqual(product.id);
            })
        });

        it('should handle UPDATE_AD_AMOUNT', () => {
            const updateAdAmountState = reducer(loginState, {
                type: UPDATE_AD_AMOUNT,
                payload: {
                    amount: 5,
                    productId: 1
                }
            });
            expect(updateAdAmountState.products[0].amount).toEqual(5);
            expect(updateAdAmountState.products[0].subtotal).toEqual(1349.95);
            expect(updateAdAmountState.products[0].saved).toEqual(269.99);
        })
    })
})