import React, { Component } from 'react';
import StaticInfo from '../components/StaticInfo';
import TagsList from '../components/TagsList';
import Account from '../images/account.svg';
import './JobCard.css';

class JobCard extends Component {
  render() {
    const posting = this.props.posting;

    return (
      <div className="JobCard">
        <img src={Account} alt={posting.company} width="87" height="87"></img>
        <StaticInfo posting={posting}/>
        <TagsList posting={posting}/>
      </div>
    );
  }
}

export default JobCard;