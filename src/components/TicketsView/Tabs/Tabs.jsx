import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sortingAC } from '../../actions/sortActions'
import styles from './Tabs.module.scss'

const Tabs = () => {
  const sortValues = useSelector((state) => state.sortReducer)
  const dispatch = useDispatch()

  const handleSort = (value) => {
    dispatch(sortingAC('sort', value))
  }

  return (
    <div className={styles.wrapper}>
      {sortValues.map((item, id) => (
        <div
          key={id}
          className={`${styles.tab} ${item.checked ? styles['tab-current'] : ''}`}
          onClick={item.checked ? () => {} : () => handleSort(item.value)}
        >
          <span>{item.text}</span>
        </div>
      ))}
    </div>
  )
}

export default Tabs
