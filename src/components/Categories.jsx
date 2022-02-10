import React from 'react'

const Categories = ({ activeCategory, items, onClickCategory, }) => {

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? "active" : ''}
          onClick={() => onClickCategory(null)}
        >
          Все
        </li>
        {
          items && items.map((item, idx) => {
            return (
              <li
                className={activeCategory === idx ? "active" : ''}
                onClick={() => onClickCategory(idx)}
                key={item}
              >
                {item}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default React.memo(Categories);
