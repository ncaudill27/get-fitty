import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import WorkoutTypeButton from './workoutTypeButton'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '85px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: '1fr',
    justifyItems: 'center',
    alignItems: 'center'
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