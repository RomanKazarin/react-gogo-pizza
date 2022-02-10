const initialState = {
  category: null,
  sortBy: 'popular'
}

function filters(state = initialState, action) {
  switch (action.type) {
    case 'SET_SORT':
      return { ...state, sortBy: action.payload }
    case 'SET_CATEGORY':
      return { ...state, category: action.payload }
    default:
      return state
  }
}

export default filters