import React, {Component} from 'react'
import {connect} from 'react-redux'
import {submit} from '../../actions'
import ContactUs from './component'

class wrapper extends Component {
  render () {
    const {submit} = this.props
    return (
      <ContactUs onSubmit={submit} />
    )
  }
}

export default connect(null, {submit})(wrapper)
