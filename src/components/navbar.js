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
  },
  mainButton: {
    minWidth: '160px',
    marginLeft: theme.spacing(1),
    flexGrow: '2',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
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
    <nav position='fixed' className={classes.root} style={{backgroundColor: `var(--accent-color, #E2E2E2)`}}>
      <div className={classes.mainButton}>
        <Link to='/workout'>
          <Fab
            aria-label='add'
            variant='extended'
            size='large'
            style={{backgroundColor: `var(--accent-color, #00FFD1)`}}>
            <AddIcon className={classes.buttonIcon} />
              Get Fitty
          </Fab>
        </Link>
      </div>
      <div className={classes.barItem}>3</div>
      <div className={classes.barItem}>4</div>
    </nav>
  )
}

export default Navbar