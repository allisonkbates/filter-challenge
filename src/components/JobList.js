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
      tags: ['JavaScript', 'Ruby']
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      tags: Array.from(new Set([...this.state.tags, event.target.value]))
    })
  }


  render() {
    let tags = this.state.tags;
    let languages = posting.languages;
    let langs = [];
    languages.forEach((language) => {
      if (tags.includes(language)) {
        langs.push(language);
      }
    });
    console.log(langs);
    function filterPostings(posting) {
      
      /*if (tags.includes(posting.role) || (tags.includes(posting.level)) || (tags.includes(posting.languages)) || (tags.includes(posting.tools))) {
        return true;
      } else {
        return false;
      }*/
    }
    const filteredPostings = postingData.filter(filterPostings);
    const postings = filteredPostings.map((posting) =>
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

/*
var fruits = ["apple", "orange", "cherry"];
var moreFruits = ["apple", "grapes", "cherry"];
var tags = [];
fruits.forEach((item) => {
	if(moreFruits.includes(item) {
	tags.push(item);
  }
});*/