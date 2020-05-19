import React, { Component } from 'react';
import postingData from '../data.json';
import JobCard from './JobCard';
import FilterBox from './FilterBox';
import './JobList.css';

class JobList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredTags: [],
      showFilterBox: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.closeButton = this.closeButton.bind(this);
  }

  handleClick(event) {
    console.log('clicked!');
    this.setState({
      filteredTags: Array.from(new Set([...this.state.filteredTags, event.target.value])),
      showFilterBox: true
    });
  }

  closeButton(event) {
    this.setState({
      filteredTags: this.state.filteredTags.filter(tag => tag !== event.target.value),
    });
    if (this.state.filteredTags.length === 0) {
      this.setState({
        showFilterBox: false
      })
    }
  }

  render() {
    const postingsWithTags = postingData.map((posting) => {
      if (posting.languages) {
        posting.tags = [...posting.languages, posting.role, posting.level];
        if(posting.tools) {
          posting.tags = [...posting.tags, ...posting.tools]
        } return posting;
      } else if (posting.tools) {
        posting.tags = [...posting.tools, posting.role, posting.level];
        if (posting.languages) {
          posting.tags = [...posting.tags, ...posting.languages]
        } return posting;
      } else {
        posting.tags = [posting.role, posting.level]
        return posting;
      }
    });

    function compare(arr1, arr2) {
      return arr1.every((element) => {
        return arr2.includes(element);
      })
    }

    const postings = postingsWithTags.map((posting) => {
      if (compare(this.state.filteredTags, posting.tags) === true || this.state.showFilterBox === false) {
        return <JobCard key={posting.id} posting={posting} showFilterBox={this.state.showFilterBox} 
        filteredTags={this.state.filteredTags} handleClick={this.handleClick}/>
      } else {
        return null;
      }
    });

    let filterBox;
    if (this.state.showFilterBox) {
      filterBox = <FilterBox showFilterBox={this.state.showFilterBox} filteredTags={this.state.filteredTags} 
      handleClick={this.handleClick} closeButton={this.closeButton}/>
    } else {
      filterBox = null;
    }

    return (
      <div>
        {filterBox}
        <div className="JobList">
          {postings}
        </div>
      </div>
    );
  }
}

export default JobList;