import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { setCategory, setSort } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

import { Categories, PizzaBlock, PlaceholderPizza, SortPopup } from '../components';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',]
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'алфавиту', type: 'name' },
]

function Home() {
  const dispatch = useDispatch()
  const items = useSelector(({ pizzas, filters, cart }) => {
    return {
      pizzas: pizzas.items,
      isLoaded: pizzas.isLoaded,
      category: filters.category,
      sortBy: filters.sortBy,
      cart: cart.items
    }
  })

  const placeholderArray = Array(10).fill(<div></div>)

  useEffect(() => {
    dispatch(fetchPizzas(items.category, items.sortBy))
  }, [items.category, items.sortBy, dispatch])

  const onSelectCategory = useCallback((idx) => {
    dispatch(setCategory(idx))
  }, [dispatch])

  const onSelectSort = useCallback((type) => {
    dispatch(setSort(type))
  }, [dispatch])

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj))
  }

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={items.category} onClickCategory={onSelectCategory} items={categoryNames} />
        <SortPopup activeSortType={items.sortBy} onClickSort={onSelectSort} items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          items.isLoaded
            ? items.pizzas.map(item => {
              return (
                <PizzaBlock
                  addedCount={items.cart[item.id] && items.cart[item.id].items.length}
                  onClickAddPizza={(obj) => handleAddPizzaToCart(obj)}
                  key={item.id}
                  {...item}
                />
              )
            })
            : placeholderArray.map((item, idx) => {
              return (
                <PlaceholderPizza key={idx}>
                  {item}
                </PlaceholderPizza>
              )
            })
        }
      </div>
    </div>
  );
}

export default Home;
