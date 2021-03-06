import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import {contactUsFormContainerStyle, contactUsFormStyle, fieldsContainerStyle, buttonStyle} from './style'
import {required, maxLength20, maxLength200, email} from './validation'
import textFieldRender from './textFieldRender'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

export class ContactUs extends Component {
  render() {
    const {handleSubmit, submitting} = this.props
    return (
      <div className={`${contactUsFormContainerStyle}`}>
        <Paper className={`${contactUsFormStyle}`} zDepth={3}>
          <form onSubmit={handleSubmit}>
            <div className={`${fieldsContainerStyle}`}>

              <Field name='name' component={textFieldRender} validate={[required, maxLength20]}
                     floatingLabelText='Name *'/>

              <Field name='email' component={textFieldRender} validate={[required, email]}
                     floatingLabelText='Email *'/>

              <Field name='message' component={textFieldRender} validate={[required, maxLength200]}
                     multiLine floatingLabelText='Message *'/>

              <RaisedButton
                className={`${buttonStyle}`}
                type='submit'
                label='Submit'
                disabled={submitting}
                labelPosition={'before'}
                fullWidth
                primary/>
            </div>
          </form>
        </Paper>
      </div>
    )
  }
}
//export default connect(null, {submit})(reduxForm({form: 'ContactUs'})(ContactUs))
export default reduxForm({form: 'ContactUs'})(ContactUs);
