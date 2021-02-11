import React from 'react'

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import WorkoutListItem from './workoutListItem'

const workouts = [
  {
    date: 'Jan 5',
    name: 'Chest Expander',
    workoutType: 'LIFT',
    workoutResult: 'DEAD'
  },
  {
    date: 'Jan 5',
    name: 'Chest Expander',
    workoutType: 'LIFT',
    workoutResult: 'DEAD'
  },
  {
    date: 'Jan 5',
    name: 'Chest Expander',
    workoutType: 'LIFT',
    workoutResult: 'DEAD'
  },
]

const useStyles = makeStyles(theme => ({
  header: {
    height: '3rem',
    width: '100%',
    backgroundColor: '#E2E2E2',
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '-1'
  },
  list: {
    margin: 0,
    listStyleType: 'none',
  }
}))

const WorkoutList = () => {
  const classes = useStyles()

  return (
    <>
      <div className={classes.header}>
        <Typography variant='h5' align='center'>
          Recent Workouts
        </Typography>
      </div>
      <ul className={classes.list}>
        {workouts.map((workout, idx) => (
          <WorkoutListItem key={idx} {...workout} />
        ))}
      </ul>
    </>
  )
}

export default WorkoutList