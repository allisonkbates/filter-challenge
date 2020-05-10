import React, { Component } from 'react';
import postingData from '../data.json';
import JobCard from './JobCard';
import './JobList.css';

class JobList extends Component {
  render() {
    const postings = postingData.map((posting) =>
      <JobCard key={posting.id} posting={posting}/>
    );
    return (
      <div className="JobList">
        {postings}
      </div>
    );
  }
}

export default JobList;
