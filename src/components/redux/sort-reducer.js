const initialState = [
    { value: 'cheapest', text: 'Самый дешевый', checked: true },
    { value: 'fastest', text: 'Самый быстрый', checked: false },
    { value: 'optimal', text: 'Оптимальный', checked: false },
  ]
  
  const sortReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'sort':
        return state.map((el) => (el.value === action.payload ? { ...el, checked: true } : { ...el, checked: false }))
      default:
        return state
    }
  }
  
  export default sortReducer