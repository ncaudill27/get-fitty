import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  label: {
    width: '75px',
    height: '75px',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    border: `3px solid ${theme.palette.primary.main}`,
    transition: 'all ease-in-out 500ms',
    borderRadius: '50%',
  },
  input: {
    '&:checked + label': {
      width: '85px',
      height: '85px',
      backgroundColor: theme.palette.primary.main,
    }
  }
}))

const WorkoutTypeButton = ({children, workoutType, value, ...props}) => {
  const classes = useStyles()

  return (
    <>
      <input
        {...props}
        id={value}
        type='radio'
        value={value}
        name='workoutType'
        className={classes.input}
        checked={workoutType === value}
      />
      <label
        htmlFor={value}
        className={classes.label}
      >
        {children}
      </label>
    </>
  )
}

export default WorkoutTypeButton