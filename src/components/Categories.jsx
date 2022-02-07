import { useState } from 'react';


const Categories = ({ items, onClickItem }) => {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectedItem = (idx) => {
    setActiveItem(idx)
  }

  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? "active" : ''}
          onClick={() => setActiveItem(null)}
        >
          Все
        </li>
        {
          items && items.map((item, idx) => {
            return (
              <li
                className={activeItem === idx ? "active" : ''}
                onClick={() => onSelectedItem(idx)}
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

export default Categories;
