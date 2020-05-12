import React from 'react';

function FilterBox(props) {
  
  if (!props.showFilter) {
    return <div>no show</div>
  }
  return (
    <div className="test">{props.tags}</div>
  );
}
export default FilterBox;