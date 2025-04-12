import { getTickets } from '../api/api'

export const getTicketsAC = (payload) => ({ type: 'getTickets', payload })
export const toggleErrorAC = (payload) => ({ type: 'error', payload })
export const toggleLoadingAC = (payload) => ({ type: 'loading', payload })

export const getTicketsTC = () => (dispatch) => {
  dispatch(toggleLoadingAC(true))
  return getTickets(dispatch)
    .then(() => {
      dispatch(toggleErrorAC(false))
    })
    .catch(() => {
      dispatch(toggleErrorAC(true))
    })
    .finally(() => {
      dispatch(toggleLoadingAC(false))
    })
}
