import React from 'react';
import './JobList.css';

function FilterBox(props) {
  const showTag= props.filteredTags.map((tag) =>
    <li className="tagFilter" key={tag}>{tag}<button className="close" onClick={props.closeButton} value={tag}>&times;</button></li>
  );

  return (
    <div className="test">
      <ul>
        {showTag}
      </ul>
    </div>
    
  );
}
export default FilterBox;

