import React from 'react'

import styles from './workouTypeButton.module.css'

const WorkoutTypeButton = ({children, workoutType, value, ...props}) => {

  return (
    <>
      <input
        {...props}
        id={value}
        type='radio'
        value={value}
        name='workoutType'
        className={styles.input}
        checked={workoutType === value}
      />
      <label
        htmlFor={workoutType}
        className={styles.label}
      >
        {children}
      </label>
    </>
  )
}

export default WorkoutTypeButton