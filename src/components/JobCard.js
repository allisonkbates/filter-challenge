import React, { Component } from 'react';
import StaticInfo from '../components/StaticInfo';
import TagsList from '../components/TagsList';
import Account from '../images/account.svg'; //change to bring in dynamic images
import './JobCard.css';

function WarningBanner(props) {
 if(!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

class JobCard extends Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true};
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }

  render() {
    const posting = this.props.posting;

    return (
      <div className="JobCard">
        <img src={Account} alt={posting.company} width="87" height="87"></img>
        <StaticInfo posting={posting}/>
        <TagsList posting={posting}/>
        <WarningBanner warn={this.state.showWarning}/>
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    );
  }
}

export default JobCard;