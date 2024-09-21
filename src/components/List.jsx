import cn from "classnames";
import PropTypes from "prop-types";
import { useState } from "react";

function List(props) {
  const [activeItem, setActiveItem] = useState();

  const handleClick = (item) => {
    setActiveItem(item);
    props.onItemClick(item);
  };

  return (
    <div className="list">
      {props.items.map(item => (
        <button
          className={cn("list__item list__item--action", item.id === activeItem?.id ? "active" : "")}
          key={item.id}
          onClick={() => handleClick(item)}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

List.propTypes = { items: PropTypes.array.isRequired, onItemClick: PropTypes.func.isRequired };

export default List;
