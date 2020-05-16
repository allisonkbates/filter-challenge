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
      roleTag: ['Frontend'],
      levelTag: [],
      languagesTag: [],
      toolsTag: []
    }
    this.filterRole = this.filterRole.bind(this);
    this.filterLevel = this.filterLevel.bind(this);
    this.filterLanguages = this.filterLanguages.bind(this);
    this.filterTools = this.filterTools.bind(this);
    this.filterPostings = this.filterPostings.bind(this);
  }

  filterRole(event) {
    this.setState({
      roleTag: Array.from(new Set([...this.state.roleTag, event.target.value]))
    })
  }
  filterLevel(event) {
    this.setState({
      levelTag: Array.from(new Set([...this.state.levelTag, event.target.value]))
    })
  }
  filterLanguages(event) {
    this.setState({
      languagesTag: Array.from(new Set([...this.state.languagesTag, event.target.value]))
    })
  }
  filterTools(event) {
    this.setState({
      toolsTag: Array.from(new Set([...this.state.toolsTag, event.target.value]))
    })
  }
  filterPostings(posting) {
    if (this.state.roleTag.includes(posting.role) || (this.state.levelTag.includes(posting.level)) || (this.state.languagesTag.includes(posting.languages)) || (this.state.toolsTag.includes(posting.tools))) {
      return true;
    } else {
      return false;
    }
  }
  render() {
    const filteredPostings = postingData.filter(this.filterPostings);
    const postings = filteredPostings.map((posting) =>
      <JobCard key={posting.id} posting={posting} showFilter={this.state.showFilter} 
      filterRole={this.filterRole} filterLevel={this.filterLevel} filterLanguages={this.filterLanguages} 
      filterTools={this.filterTools}/>
    );

    return (
      <div>
        <FilterBox showFilter={this.state.showFilter} roleTag={this.state.roleTag} 
        levelTag={this.state.levelTag} languagesTag={this.state.languagesTag} toolsTag={this.state.toolsTag}/>
        <div className="JobList">
          {postings}
        </div>
      </div>
    );
  }
}

export default JobList;