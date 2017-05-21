import React from 'react'
import TextField from 'material-ui/TextField'

export default ({input, meta: {touched, error}, ...passedIn}) => {
    return (
        <div>
            <TextField
                {...input}
                {...passedIn}
                errorText={touched && error}
            />
        </div>
    )
}