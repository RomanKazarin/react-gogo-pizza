const initialState = {
  items: {},
  totalPrice: 0,
  itemsCount: 0
}

const getTotalPrice = (arr) => arr.reduce((acc, current) => acc + current.price, 0)

function cart(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PIZZA_CART':
      const currentPizzaItems = state.items[action.payload.id]
        ? [...state.items[action.payload.id].items, action.payload]
        : [action.payload]

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems)
        }
      }

      const itemsCount = Object.values(newItems).flatMap(obj => obj.items)
      const totalPrice = getTotalPrice(itemsCount)

      return {
        ...state,
        items: newItems,
        itemsCount: itemsCount.length,
        totalPrice
      }

    case "REMOVE_CART_ITEM": {
      const newItems = { ...state.items }
      const currentTotalPrice = newItems[action.payload].totalPrice
      const currentItemsCount = newItems[action.payload].items.length
      delete newItems[action.payload]
      return {
        ...state.items,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        itemsCount: state.itemsCount - currentItemsCount
      }
    }

    case "PLUS_CART_ITEM": {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0]
      ]

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems)
        }
      }

      const itemsCount = Object.values(newItems).flatMap(obj => obj.items)
      const totalPrice = getTotalPrice(itemsCount)

      return {
        ...state,
        items: newItems,
        itemsCount: itemsCount.length,
        totalPrice
      }
    }

    case "MINUS_CART_ITEM": {
      const oldItems = state.items[action.payload].items
      const newObjItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems)
        }
      }

      const itemsCount = Object.values(newItems).flatMap(obj => obj.items)
      const totalPrice = getTotalPrice(itemsCount)

      return {
        ...state,
        items: newItems,
        itemsCount: itemsCount.length,
        totalPrice
      }
    }

    case "CLEAR_CART":
      return {
        items: {},
        totalPrice: 0,
        itemsCount: 0
      }

    default:
      return state
  }
}

export default cart