import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Checkbox from '../UI/Checkbox/Checkbox'
import * as actions from '../actions/filterActions'
import styles from './Form.module.scss'

const Form = () => {
  const checkboxList = useSelector((state) => state.filterReducer)
  const dispatch = useDispatch()

  const toggleFilter = (checked, value) => {
    const all = { ...checkboxList[0] }
    const points = checkboxList.slice(1)

    if (value === 'all') {
      dispatch(actions.filterAllAC(checked))
    } else {
      if (all.checked && !checked) {
        dispatch(actions.filterAC('all'))
      } else if (points.filter((item) => item.checked).length === 3 && !all.checked && checked) {
        dispatch(actions.filterAC('all'))
      }
      dispatch(actions.filterAC(value))
    }
  }

  return (
    <form className={styles.form}>
      <fieldset className={styles.fieldset}>
        <legend>Количество пересадок</legend>
        <div className={styles.wrapper}>
          {checkboxList.map(({ label, value, checked }, id) => (
            <Checkbox key={id} value={value} label={label} checked={checked} toggleFilter={toggleFilter} />
          ))}
        </div>
      </fieldset>
    </form>
  )
}

export default Form
