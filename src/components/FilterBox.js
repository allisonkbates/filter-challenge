import React from 'react';
import '../styles/FilterBox.css';

function FilterBox(props) {
  const showFilter = props.showFilterBox ? '' : 'hide-filter';
  

  const showTag= props.filteredTags.map((tag) =>
    <li className="filter-list__item" key={tag}><span className="filter-list__item-name">{tag}</span><button className="filter-list__close" onClick={props.closeButton} value={tag}>&times;</button></li>
  );

  return (
    <div className={`filter-box ${showFilter}`}>
      {console.log(showFilter)}
      <ul className="filter-list">
        {showTag}
      </ul>
      <button className="clear" onClick={props.clearButton}>Clear</button>
    </div>
    
  );
}
export default FilterBox;

