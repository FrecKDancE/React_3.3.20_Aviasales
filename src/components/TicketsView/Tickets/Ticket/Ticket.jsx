import React from 'react';
import { addMinutes, format } from 'date-fns';
import styles from './Ticket.module.scss';

const Ticket = ({ ticket }) => {
  const { price, carrier, segments } = ticket;

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.coast}>{price.toLocaleString()} Р</span>
        <img
          className={styles.logo}
          src={`//pics.avs.io/99/36/${carrier}.png`}
          alt="Логотип авиакомпании"
        />
      </div>
      {segments.map((segment, index) => (
        <TicketInfo key={index} info={segment} />
      ))}
    </div>
  );
};

const TicketInfo = ({ info }) => {
  const { origin, destination, stops, date, duration } = info;

  const stopsText = (stopsCount) => {
    if (stopsCount === 0) return 'Без пересадок';
    if (stopsCount === 1) return '1 пересадка';
    if (stopsCount >= 2 && stopsCount <= 4) return `${stopsCount} пересадки`;
    return `${stopsCount} пересадок`;
  };

  const flightTime = `${Math.floor(duration / 60)}Ч ${duration % 60}М`;
  const departureTime = format(date, 'HH.mm');
  const arrivalTime = format(addMinutes(date, duration), 'HH.mm');

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>
            {origin} – {destination}
          </th>
          <th>В пути</th>
          <th>{stopsText(stops.length)}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {departureTime} – {arrivalTime}
          </td>
          <td>{flightTime}</td>
          <td>{stops.length > 0 ? stops.join(', ') : ''}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Ticket;
