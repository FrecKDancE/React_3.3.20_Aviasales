const initialState = {
    tickets: [],
    error: false,
    isLoading: true,
  }
  
  const apiReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'getTickets':
        return {
          ...state,
          tickets: action.payload,
        }
      case 'error':
        return {
          ...state,
          error: action.payload,
        }
      case 'loading':
        return {
          ...state,
          isLoading: action.payload,
        }
      default:
        return state
    }
  }
  
  export default apiReducer