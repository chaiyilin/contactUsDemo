import React from 'react'
import {connect} from 'react-redux'

const Loading = (props) =>
  (
    <Dialog
      modal={true}
      open={props.submitting}
    >
      <CircularProgress />
    </Dialog>
  )

const mapStateToProps = state => {
  const {submitting} = state
  return {
    submitting
  }
}
export default connect(mapStateToProps)(Loading)
