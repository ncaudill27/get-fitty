import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '1rem',
    height: '5rem',
    width: '100%',
    backgroundColor: theme.palette.background.dark
  }
}))

const FormHeader = () => {
  const classes = useStyles()
  
  return (
    <div className={classes.root}>
      <h1>Get Fitty</h1>
    </div>
  )
}

export default FormHeader