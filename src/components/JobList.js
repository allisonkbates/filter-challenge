import React, { Component } from 'react';
import postingData from '../data.json';
import JobCard from './JobCard';
import FilterBox from './FilterBox';
import './JobList.css';



class JobList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: true,
      roleTag: [],
      levelTag: [],
      languagesTag: ['CSS'],
      toolsTag: []
    }
    this.filterRole = this.filterRole.bind(this);
    this.filterLevel = this.filterLevel.bind(this);
    this.filterLanguages = this.filterLanguages.bind(this);
    this.filterTools = this.filterTools.bind(this);
    this.filterPostings = this.filterPostings.bind(this);
    this.displayFilteredJobs = this.displayFilteredJobs.bind(this);
  }

  filterRole(event) {
    this.setState({
      roleTag: Array.from(new Set([...this.state.roleTag, event.target.value])),
      showAll: false
    })
  }
  filterLevel(event) {
    this.setState({
      levelTag: Array.from(new Set([...this.state.levelTag, event.target.value])),
      showAll: false
    })
  }
  filterLanguages(event) {
    this.setState({
      languagesTag: Array.from(new Set([...this.state.languagesTag, event.target.value])),
      showAll: false
    })
  }
  filterTools(event) {
    this.setState({
      toolsTag: Array.from(new Set([...this.state.toolsTag, event.target.value])),
      showAll: false
    })
  }
  filterPostings(posting) {
    if (this.state.roleTag.includes(posting.role) || (this.state.levelTag.includes(posting.level)) || (this.state.languagesTag.includes(posting.languages)) || (this.state.toolsTag.includes(posting.tools))) {
      return true;
    } else {
      return false;
    }
  }
  displayFilteredJobs() {
    const filteredPostings = postingData.filter(this.filterPostings);
    filteredPostings.map((posting) =>
      <JobCard key={posting.id} posting={posting} showAll={this.state.showFilter} 
      filterRole={this.filterRole} filterLevel={this.filterLevel} filterLanguages={this.filterLanguages} 
      filterTools={this.filterTools}/>
    );
  }

  render() {
    const postings = postingData.map((posting) =>
    <JobCard key={posting.id} posting={posting} showAll={this.state.showAll} 
    filterRole={this.filterRole} filterLevel={this.filterLevel} filterLanguages={this.filterLanguages} 
    filterTools={this.filterTools} roleTag={this.state.roleTag} levelTag={this.state.levelTag} 
    languagesTag={this.state.languagesTag} toolsTag={this.state.toolsTag}/>
    );

    return (
      <div>
        <FilterBox roleTag={this.state.roleTag} 
        levelTag={this.state.levelTag} languagesTag={this.state.languagesTag} toolsTag={this.state.toolsTag}/>
        <div className="JobList">
          {postings}
        </div>
      </div>
    );
  }
}

export default JobList;