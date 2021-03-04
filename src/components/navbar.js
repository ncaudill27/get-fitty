import React from 'react'
import { Link } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    width: '100%',
    top: 'auto',
    bottom: "0",
    height: "5rem",
    padding: '0',
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: theme.palette.background.medium,
  },
  buttonContainer: {
    minWidth: '160px',
    marginLeft: theme.spacing(1),
    flexGrow: '2',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonIcon: {
    marginRight: theme.spacing(1),
  },
  barItem: {
    display: 'flex',
    width: '5rem',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: '1',
    height: '100%',
  }
}))

const Navbar = () => {
  const classes = useStyles()
  
  return (
    <nav position='fixed' className={classes.root}>
      <div className={classes.buttonContainer}>
          <Fab
            color='primary'
            component={Link}
            to='/workout'
            variant='extended'
            size='large'
          >
            <AddIcon
              className={classes.buttonIcon}
            />
              Get Fitty
          </Fab>
      </div>
      <div className={classes.barItem}>3</div>
      <div className={classes.barItem}>4</div>
    </nav>
  )
}

export default Navbar