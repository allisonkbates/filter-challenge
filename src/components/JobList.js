import React, { Component } from 'react';
import JobCard from './JobCard';
import './JobList.css';

class JobList extends Component {
  render() {
    return (
      <div className="JobList">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    );
  }
}

export default JobList;