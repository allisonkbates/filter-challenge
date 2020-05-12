import React, { Component } from 'react';
import postingData from '../data.json';
import JobCard from './JobCard';
import './JobList.css';

function FilterBox(props) {
  if (!props.showFilter) {
    return null
  }
  return (
    <div className="test"></div>
  );
}

class JobList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFilter: false,
      tags: ['default']
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    /*this.setState({
      tags: event.target.value
    });*/
    this.setState({
      showFilter: !this.state.showFilter,
      tags: [...this.state.tags, event.target.value]
    });
  }

  render() {
    const postings = postingData.map((posting) =>
      <JobCard key={posting.id} posting={posting} showFilter={this.state.showFilter} handleClick={this.handleClick}/>
    );

    return (
      <div>
        <FilterBox showFilter={this.state.showFilter}/>
        <div className="JobList">
          {postings}
        </div>
      </div>
    );
  }
}

export default JobList;
