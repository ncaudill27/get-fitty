import React, { useState } from 'react'

import InputButtonPairContainer from './pairInputButton'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({

}))

const LiftInputs = () => {
  const classes = useStyles()

  const [liftName, setLiftName] = useState('')
  const handleChange = e => setLiftName(e.target.value)

  return (
    <>
      <InputButtonPairContainer
        inputLabel='First Exercise'
        inputValue={liftName}
        buttonText='Add Set'
        handleChange={handleChange}
      />
    </>
  )
}

export default LiftInputs