import React from 'react'
import { useStyles } from '@material-ui/core/styles'

import WorkoutTypeButton from './workoutTypeButton'

const useStyles = useStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    justifyItems: 'center'
  }
}))

const WorkoutTypeContainer = ({handleChange, workoutType}) => {
  const classes = useStyles()
  
  return (
    <div className={classes.root}>
      <WorkoutTypeButton
        value='LIFT'
        workoutType={workoutType}
        onChange={handleChange}
      />
      <WorkoutTypeButton
        value='HIIT'
        workoutType={workoutType}
        onChange={handleChange}
      />
      <WorkoutTypeButton
        value='CARDIO'
        workoutType={workoutType}
        onChange={handleChange}
      />
    </div>
  )
}

export default WorkoutTypeContainer