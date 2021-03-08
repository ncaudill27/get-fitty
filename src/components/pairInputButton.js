import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    margin: '2rem 1rem 1rem',
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

const InputButtonPairContainer = (
  {
    inputLabel,
    inputValue,
    buttonText,
    handleClick,
    handleChange,
  }
) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <TextField
        size='small'
        variant='outlined'
        value={inputValue}
        label={inputLabel}
        onChange={handleChange}
        className={classes.input}
      />
      <Button
        size='small'
        color='primary'
        variant='contained'
        onClick={handleClick}
        className={classes.button}
      >{buttonText}</Button>
    </div>
  )
}

export default InputButtonPairContainer