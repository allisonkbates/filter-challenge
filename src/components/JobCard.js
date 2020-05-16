import React, { Component } from 'react';
import StaticInfo from '../components/StaticInfo';
import TagsList from '../components/TagsList';
import Account from '../images/account.svg'; //change to bring in dynamic images
import './JobList.css';


class JobCard extends Component {
  render() {
    const posting = this.props.posting;
    const languages = posting.languages;
    let filteredLanguages;
    if (posting.language) {
      filteredLanguages = languages.filter((language) => !this.props.languagesTag.includes(language));
      console.log({filteredLanguages});
    }
   
    if (this.props.showAll) {
      return (
        <div className="JobCard">
          <img src={Account} alt={posting.company} width="87" height="87"></img>
          <StaticInfo posting={posting}/>
          <TagsList posting={posting} filterRole={this.props.filterRole} 
          filterLevel={this.props.filterLevel} filterLanguages={this.props.filterLanguages} 
          filterTools={this.props.filterTools}/>
        </div>
      )
    } else if (filteredLanguages !== null) {
      return (
        <div className="JobCard">
        <img src={Account} alt={posting.company} width="87" height="87"></img>
        <StaticInfo posting={posting}/>
        <TagsList posting={posting} filterRole={this.props.filterRole} 
        filterLevel={this.props.filterLevel} filterLanguages={this.props.filterLanguages} 
        filterTools={this.props.filterTools}/>
      </div>
      )
    }
   /* else if (this.props.roleTag.includes(posting.role) || (this.props.levelTag.includes(posting.level)) || (this.props.languagesTag.includes(posting.languages)) || (this.props.toolsTag.includes(posting.tools))) {
      return (
      <div className="JobCard">
        <img src={Account} alt={posting.company} width="87" height="87"></img>
        <StaticInfo posting={posting}/>
        <TagsList posting={posting} filterRole={this.props.filterRole} 
        filterLevel={this.props.filterLevel} filterLanguages={this.props.filterLanguages} 
        filterTools={this.props.filterTools}/>
      </div>
      )
    } */ else {
        return <h1>None of the above applies</h1>
    }
  }
}

export default JobCard;