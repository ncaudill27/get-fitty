import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import WorkoutTypeButton from './workoutTypeButton'

import Dumbbell from '../images/svg/dumbell-icon.svg'
import Kettlebell from '../images/svg/kettlebell-icon.svg'
import Runner from '../images/svg/runner-icon.svg'

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
      >
        <Dumbbell />
      </WorkoutTypeButton>
      <WorkoutTypeButton
        value='HIIT'
        workoutType={workoutType}
        onChange={handleChange}
      >
        <Kettlebell />
      </WorkoutTypeButton>
      <WorkoutTypeButton
        value='CARDIO'
        workoutType={workoutType}
        onChange={handleChange}
      >
        <Runner />
      </WorkoutTypeButton>
    </div>
  )
}

export default WorkoutTypeContainer