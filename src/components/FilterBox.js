import React from 'react';
import './JobList.css';

function FilterBox(props) {
  const showTag = props.tags.map((tag) => 
    <li className="tags" key={tag}>{tag}<button className="close">&times;</button></li>
  );
  if (props.tags.length === 0) {
    return null;
  }
  return (
    <div className="test">
      <ul>
        {showTag}
      </ul>
    </div>
    
  );
}
export default FilterBox;

