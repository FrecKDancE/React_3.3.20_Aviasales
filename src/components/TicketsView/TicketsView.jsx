import React from 'react'

import Tabs from './Tabs/Tabs'
import Tickets from './Tickets/Tickets'
import styles from './TicketsView.module.scss'

const TicketsView = () => {
  return (
    <section className={styles.wrapper}>
      <Tabs />
      <Tickets />
    </section>
  )
}

export default TicketsView