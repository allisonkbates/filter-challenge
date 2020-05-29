import React, { Component } from 'react';
import StaticInfo from '../components/StaticInfo';
import TagsList from '../components/TagsList';
import './JobCard.css';


class JobCard extends Component {
  render() {
    const iconPath = process.env.PUBLIC_URL;
    const posting = this.props.posting;
    return (
      <div className="JobCard">
        <img src={iconPath + posting.logo} alt={posting.company} width="87" height="87"></img>
        <StaticInfo posting={posting}/>
        <TagsList posting={posting} handleClick={this.props.handleClick}/>
      </div>
    )
  }
}

export default JobCard;