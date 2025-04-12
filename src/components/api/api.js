const _mainURL = 'https://aviasales-test-api.kata.academy/'

const fetchApi = async (url) => {
  try {
    const res = await fetch(url)
    if (!res.ok) {
      if (res.status === 500) {
        throw new Error('Ошибка сервера (500)')
      } else {
        throw new Error('Ошибка при запросе к API')
      }
    }
    return res.json()
  } catch (error) {
    console.error('Ошибка:', error)
    throw error
  }
}


export const setSearchId = async () => {
  const searchId = sessionStorage.getItem('searchId')
  if (searchId) return searchId

  try {
    const { searchId } = await fetchApi(`${_mainURL}search`)
    sessionStorage.setItem('searchId', searchId)
    return searchId
  } catch (error) {
    console.error('Ошибка при получении searchId:', error)
    throw error
  }
}

// export const getTickets = async () => {
//   try {
//     const searchId = await setSearchId() 
//     const response = await fetchApi(`${_mainURL}tickets?searchId=${searchId}`)
//     if (response.stop) sessionStorage.removeItem('searchId')
//     return response
//   } catch (error) {
//     console.error('Ошибка при загрузке билетов:', error)
//     throw error
//   }
// }

import { getTicketsAC } from '../actions/apiActions'

export const getTickets = async (dispatch) => {
  try {
    const searchId = await setSearchId()
    await fetchTicketsRecursively(searchId, [], dispatch)
  } catch (error) {
    console.error('Ошибка при загрузке билетов:', error)
    throw error
  }
}

const fetchTicketsRecursively = async (searchId, tickets, dispatch) => {
  try {
    const response = await fetchApi(`${_mainURL}tickets?searchId=${searchId}`)
    const updatedTickets = tickets.concat(response.tickets)
    const stop = response.stop

    dispatch(getTicketsAC(updatedTickets))
    console.log(updatedTickets)
    if (stop) {
      sessionStorage.removeItem('searchId')
      console.log(stop)
      return updatedTickets
    } else {
      console.log(stop)
      return fetchTicketsRecursively(searchId, updatedTickets, dispatch)
    }
  } catch (error) {
    if (error.message === 'Ошибка сервера (500)') {
      console.log(`Повторная попытка`)
      return fetchTicketsRecursively(searchId, tickets, dispatch)
    } else {
      console.log('Всё равно ошибка')
      throw error
    }
  }
}



