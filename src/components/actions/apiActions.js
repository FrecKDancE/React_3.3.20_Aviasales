import { getTickets } from '../api/api'

const getTicketsAC = (payload) => ({ type: 'getTickets', payload })
const toggleErrorAC = (payload) => ({ type: 'error', payload })
const toggleLoadingAC = (payload) => ({ type: 'loading', payload })

export const getTicketsTC = () => (dispatch) => {
  dispatch(toggleLoadingAC(true))
  return getTickets()
    .then((res) => {
      dispatch(toggleErrorAC(false))
      dispatch(getTicketsAC(res.tickets))
    })
    .catch((error) => {
      dispatch(toggleErrorAC(error.message || 'Произошла ошибка'))
    })
    .finally(() => {
      dispatch(toggleLoadingAC(false))
    })
}
