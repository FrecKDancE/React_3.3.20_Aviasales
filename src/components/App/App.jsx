import React from 'react'
import Header from '../Layouts/Header/Header'
import Main from '../Layouts/Main/Main'
import styles from './App.module.scss'

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Main />
    </div>
  )
}

export default App
