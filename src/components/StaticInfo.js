import React, { Component } from 'react';
import '../styles/StaticInfo.css';

class StaticInfo extends Component {
  render() {
    const posting = this.props.posting;
    const newJob = posting.new;
    
    let newBadge;
    if (newJob) {
      newBadge = <p className="new">NEW!</p>
    }
    
    let featuredBadge;
    const featuredJob = posting.featured;
    if (featuredJob) {
      featuredBadge = <p className="featured">FEATURED</p>
    }
    
    return (
      <div className="static-info">
        <div className="top-row">
          <p className="company">{posting.company}</p>
          {newBadge}
          {featuredBadge}
        </div>
        <h3 className="position">{posting.position}</h3>
        <div className="bottom-row">
          <p>{posting.postedAt}</p>
          <span>&middot;</span>
          <p>{posting.contract}</p>
          <span>&middot;</span>
          <p>{posting.location}</p>
        </div>
      </div>
    );
  }
}

export default StaticInfo;