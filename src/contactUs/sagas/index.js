import {call, put, takeEvery} from 'redux-saga/effects'
import {submit} from '../effects'

function * submitForm (action) {
  try {
    const contactMeMessage = yield call(submit, action.payload)
    yield put({type: 'SUBMIT_SUCCEEDED', payload: contactMeMessage})
  } catch (e) {
    yield put({type: 'SUBMIT_FAILED', message: e.message})
  }
}

function * saga () {
  yield takeEvery('SUBMIT', submitForm)
}

export default saga
