import React, { Component } from 'react';
import logo from '../images/account.svg';
import './JobCard.css';

class JobCard extends Component {
  render() {
    // const imgSrc = "." + this.props.posting.logo;
    return (
      <div className="JobCard">
        <img src={logo} alt={this.props.posting.company} width="87" height="87"></img>
        <div className="static-info">
          <div className="top-row">
            <p className="company">{this.props.posting.company}</p>
            <p className="new">{this.props.posting.new}NEW!</p>
            <p className="featured">{this.props.posting.featured}FEATURED</p>
          </div>
          <h3 className="position">{this.props.posting.position}</h3>
          <div className="bottom-row">
            <p>{this.props.posting.postedAt}</p>
            <span>&middot;</span>
            <p>{this.props.posting.contract}</p>
            <span>&middot;</span>
            <p>{this.props.posting.location}</p>
          </div>
        </div>
        <div className="tagList">
          <p className="tags">Senior</p>
          <p className="tags">Frontend</p>
          <p className="tags">JavaScript</p>
          <p className="tags">CSS</p>
          <p className="tags">HTML</p>
        </div>
      </div>
    );
  }
}

export default JobCard;
/*
const posting = {
  "id": 5,
  "company": "Photosnap",
  "logo": "./images/loop-studios.svg",
  "new": false,
  "featured": false,
  "position": "Senior Frontend Developer",
  "role": "FullStack",
  "level": "Midweight",
  "postedAt": "1w ago",
  "contract": "Full Time",
  "location": "Worldwide",
  "languages": ["JavaScript"],
  "tools": ["Ruby", "Sass"]
} 


class JobCard extends Component {
  render() {
    return (
      <div className="JobCard">
        <img src={logo} alt="loop-studios" width="87" height="87"></img>
        <div className="static-info">
          <div className="top-row">
            <p className="company">{posting.company}</p>
            <p className="new">{posting.new}NEW!</p>
            <p className="featured">{posting.featured}FEATURED</p>
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
        <div className="tagList">
          <p className="tags">Senior</p>
          <p className="tags">Frontend</p>
          <p className="tags">JavaScript</p>
          <p className="tags">CSS</p>
          <p className="tags">HTML</p>
        </div>
      </div>
    );
  }
}


export default JobCard;*/