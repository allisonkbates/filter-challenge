import React, { Component } from 'react';
import postingData from '../data.json';
import JobCard from './JobCard';
import FilterBox from './FilterBox';
import './JobList.css';

class JobList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFilter: true,
      tags: [],
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      tags: Array.from(new Set([...this.state.tags, event.target.value]))
    });
  }
  render() {
    const postings = postingData.map((posting) =>
      <JobCard key={posting.id} posting={posting} showFilter={this.state.showFilter} handleClick={this.handleClick}/>
    );

    return (
      <div>
        <FilterBox showFilter={this.state.showFilter} tags={this.state.tags}/>
        <div className="JobList">
          {postings}
        </div>
      </div>
    );
  }
}

export default JobList;
