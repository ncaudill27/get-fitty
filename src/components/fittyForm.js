import React, { useState } from 'react'

import WorkoutTypeContainer from './workoutTypeContainer'
import LiftInputs from './inputsLift'
import InputButtonPairContainer from './pairInputButton'

const FittyForm = ({classes}) => {

  const [workoutName, setWorkoutName] = useState('')
  const [workoutType, setWorkoutType] = useState(null)
  const handleChange = setFn => e => setFn(e.target.value)
  
  const isLift = () => workoutType === 'LIFT'
  const isHiit = () => workoutType === 'HIIT'
  const isCardio = () => workoutType === 'CARDIO'
  
  return (
    <>
      <InputButtonPairContainer
        inputLabel='New Workout Name'
        inputValue={workoutName}
        buttonText='Level Up'
        handleChange={handleChange(setWorkoutName)}
      />
      <WorkoutTypeContainer
        workoutType={workoutType}
        handleChange={handleChange(setWorkoutType)}
      />
      {isLift() && <LiftInputs />}
    </>
  )
}

export default FittyForm