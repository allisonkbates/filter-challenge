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
      tags: ['default']
    }
    this.handleClick = this.handleClick.bind(this);
  }
  /*fix this so it's one setState call? */
  handleClick(event) {
    this.setState({
      tags: [...this.state.tags, event.target.value]
    });
  /*  this.setState(state => ({
      showFilter: !state.showFilter
    })); */
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
