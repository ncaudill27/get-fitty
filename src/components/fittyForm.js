import React, { useState } from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import WorkoutTypeContainer from './workoutTypeContainer'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
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
})

const FittyForm = ({classes}) => {

  const [workoutName, setWorkoutName] = useState(null)
  const [workoutType, setWorkoutType] = useState(null)
  const handleChange = setFn => e => {
    console.log(e.target.value)
    setFn(e.target.value)
  }


  return (
    <div className={classes.root}>
      <TextField
        size='small'
        variant='outlined'
        label='New Workout Name'
        className={classes.input}
      />
      <Button // to render unique list of past workouts
        size='small'
        color='primary'
        variant='contained'
        className={classes.button}
      >
        Level Up
      </Button>
      <WorkoutTypeContainer
        workoutType={workoutType}
        handleChange={handleChange(setWorkoutType)}
      />
    </div>
  )
}

export default withStyles(styles)(FittyForm)