import React from 'react'

import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'block',
    padding: '1rem',
    width: '100%',
    backgroundColor: theme.palette.background.dark
  },
  title: {
    margin: `1em 0 0`,
    fontWeight: 'bold'
  }
}))

const FormHeader = () => {
  const classes = useStyles()
  
  return (
    <div className={classes.root}>
      <Typography
        className={classes.title}
        variant='h1'
      >
        Get Fitty
      </Typography>
    </div>
  )
}

export default FormHeader