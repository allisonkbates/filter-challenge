import React, { Component } from 'react';
import StaticInfo from '../components/StaticInfo';
import TagsList from '../components/TagsList';
import '../styles/JobCard.css';


class JobCard extends Component {
  render() {
    const iconPath = process.env.PUBLIC_URL;
    const posting = this.props.posting;
    return (
      <div className="card__container">
        <img 
          src={iconPath + posting.logo} 
          alt={posting.company} 
          width="87" 
          height="87"
          className="card__image">
        </img>
        <StaticInfo 
          posting={posting}
        />
        <div 
          className="card__line">
        </div>
        <TagsList 
          posting={posting} 
          handleClick={this.props.handleClick}
        />
      </div>
    )
  }
}

export default JobCard;