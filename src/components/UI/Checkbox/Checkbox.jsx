import React from 'react'

import CheckboxOn from '../../assets/checkbox-on.svg'
import CheckboxOff from '../../assets/checkbox-off.svg'

import styles from './Checkbox.module.scss'

const Checkbox = ({ label, toggleFilter, value, checked }) => {
  const checkboxView = checked ? <img src={CheckboxOn} /> : <img src={CheckboxOff} />
  return (
    <div className={styles.wrapper} onClick={() => toggleFilter(!checked, value)}>
      <input className="visually-hidden" type="checkbox" />
      <div className={styles.marker}>{checkboxView}</div>
      <label className={styles.label}>{label}</label>
    </div>
  )
}

export default Checkbox