import React from 'react';

function FilterBox(props) {
  const tagsFiltered = Array.from(new Set(props.tags));
  if (!props.showFilter) {
    return <div>no show</div>
  }
  return (
    <div className="test">{tagsFiltered}</div>
  );
}
export default FilterBox;