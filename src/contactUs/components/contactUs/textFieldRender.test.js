import React from 'react'
import textFieldRender from './textFieldRender'

it("renders an error message for the input", () => {
  const input = { name: 'firstName', value: '' }
  const label = 'First name'
  const meta = { touched: true, error: 'Required' }
  const element = renderTextInput({ input, label, meta })
  subject = shallow(element)
  const firstNameHelpBlock = subject.find('.help-block').first()
  expect(firstNameHelpBlock).to.exist
  expect(firstNameHelpBlock.text()).to.equal('Required')
})