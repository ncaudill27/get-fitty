import React from 'react'

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: theme.spacing(1),
    margin: '0',
  },
  date: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing(1),
  },
  icon: {
    width: '45px',
    height: '45px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}))

const WorkoutListItem = ({date, name, workoutType, workoutResult}) => {
  const classes = useStyles()

  const parseDate = () => {
    const [month, day] = date.split(' ')
    return {month, day}
  }

  const {month, day} = parseDate()

  return (
    <li className={classes.root}>
      <div className={classes.date}>
        {month} <br/>
        <div>{day}</div>
      </div>
      <div className={classes.name}>
        <Typography variant='h2'>
          {name}
        </Typography>
      </div>
      <div className={classes.icon}>
        HI
      </div>
      <div className={classes.icon}>
        HI
      </div>
    </li>
  )
}

export default WorkoutListItem