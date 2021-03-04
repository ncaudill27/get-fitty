import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    margin: '2rem 1rem',
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      marginBottom: theme.spacing(2),
      '@media (max-width: 357px)': {
        width: '100%'
      }
    }
  },
  input: {
    flexGrow: 2,
    '@media (min-width: 357px)': {
      marginRight: theme.spacing(2),
    }
  },
  button: {
    flexGrow: 1
  }
}))

const FittyForm = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <TextField
        className={classes.input}
        variant='outlined'
        label='New Workout Name'
        size='small'
      />
      <Button
        className={classes.button}
        variant='contained'
        color='primary'
        size='small'
      >
        Level Up
      </Button>
      
    </div>
  )
}

export default FittyForm