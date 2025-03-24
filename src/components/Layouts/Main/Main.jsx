import React from 'react'

import Form from '../../Form/Form'
import TicketsView from '../../TicketsView/TicketsView'

import styles from './Main.module.scss'

const Main = () => {
  return (
    <main className={styles.main}>
      <Form />
      <TicketsView />
    </main>
  )
}

export default Main