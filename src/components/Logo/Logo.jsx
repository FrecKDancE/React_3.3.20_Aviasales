import React from 'react'

import aviaSalesLogo from '../assets/logo.svg'
import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={aviaSalesLogo} alt="Aviasales logo" className={styles.Logo}></img>
    </div>
  )
}

export default Logo