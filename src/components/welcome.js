import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '1rem 1rem 2rem',
    boxShadow: '2px 2px 5px 1px rgba(0, 0, 0, 0.3)',
    backgroundColor: theme.palette.primary.main
  },
  avatar: {
    width: '45px',
    height: '45px',
  },
  weather: {
    marginLeft: theme.spacing(1)
  },
  weatherIcon: {
    fontSize: '1rem',
    margin: '0 0.5em -0.1825em',
  }
}))

const Welcome = () => {
  const classes = useStyles()

  return (
    <Box component='section' className={classes.root}>
      <AccountCircleIcon className={classes.avatar} />
      <div className={classes.weather}>
        <Typography variant='caption'>
          Wed, Feb 3
        </Typography>
        <BrightnessHighIcon className={classes.weatherIcon} />
        <Typography variant='caption'>
          47&deg; F
        </Typography>
      </div>
      <Typography variant='h1'>
        Good morning, <br />
        User Person
      </Typography>
    </Box>
  )
}

export default Welcome