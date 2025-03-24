import React from 'react'

import styles from './ShowMore.module.scss'

const ShowMore = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Показать еще 5 билетов!
    </button>
  )
}

export default ShowMore