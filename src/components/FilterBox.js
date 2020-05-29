import React from 'react';
import './FilterBox.css';

function FilterBox(props) {
  const showTag= props.filteredTags.map((tag) =>
    <li className="filter-list__item" key={tag}><span className="filter-list__item-name">{tag}</span><button className="filter-list__close" onClick={props.closeButton} value={tag}>&times;</button></li>
  );

  return (
    <div className="filter-box">
      <ul className="filter-list">
        {showTag}
      </ul>
      <button className="clear" onClick={props.clearButton}>Clear</button>
    </div>
    
  );
}
export default FilterBox;

