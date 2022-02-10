import axios from 'axios'

export function isLoaded(payload) {
  return {
    type: 'IS_LOADED',
    payload
  }
}

export function fetchPizzas(category, sortBy) {
  return function (dispatch) {
    dispatch(isLoaded(false))
    axios.get(`/pizzas/?${category !== null ? `category=${category}&` : ''}_sort=${sortBy}&_order=asc`).then(({ data }) => {
      dispatch(setPizzas(data))
    })
  }
}

export function setPizzas(pizzas) {
  return {
    type: 'SET_PIZZAS',
    payload: pizzas
  }
}