/* global describe it expect */

import * as rules from './validation'

it('should required', () => {
  expect(rules.required('a')).toBeUndefined()
  expect(rules.required(null)).toEqual('Required')
})

it('should maxLength', () => {
  expect(rules.maxLength(1)('a')).toBeUndefined()
  expect(rules.maxLength(1)('aa')).toEqual('Must be 1 characters or less')
})

it('should maxLength20', () => {
  expect(rules.maxLength20.toString()).toEqual(rules.maxLength(20).toString())
})

it('should maxLength200', () => {
  expect(rules.maxLength200.toString()).toEqual(rules.maxLength(200).toString())
})

it('should email', () => {
  expect(rules.email('a@a.com')).toBeUndefined()
  expect(rules.email('a')).toEqual('Invalid email address')
})