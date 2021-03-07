import React from 'react'

import styles from './workoutTypeButton.module.css'

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
        htmlFor={value}
        className={styles.label}
      >
        {children}
      </label>
    </>
  )
}

export default WorkoutTypeButton