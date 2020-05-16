import React from 'react';
import './JobList.css';

function FilterBox(props) {
  const tags = [...props.roleTag, ...props.levelTag, ...props.languagesTag, ...props.toolsTag];
  console.log(tags);
  const showTag= tags.map((tag) =>
    <li className="tagFilter" key={tag}>{tag}<button className="close">&times;</button></li>
  );

  return (
    <div className="test">
      <h1>Hello</h1>
      <ul>
        {showTag}
      </ul>
    </div>
    
  );
}
export default FilterBox;

