import React from 'react'
import TextField from 'material-ui/TextField'
import {fieldStyle} from './style'

export default ({input, meta: {touched, error}, ...passedIn}) => {
    return (
        <TextField className={`${fieldStyle}`} style={{width:'100%'}}
                   {...input}
                   {...passedIn}
                   errorText={touched && error}
        />
    )
}