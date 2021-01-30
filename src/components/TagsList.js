import React, { Component } from 'react';
import '../styles/TagsList.css';

class TagsList extends Component {
  render() {
    const posting = this.props.posting;
    let tags = posting.tags;
    let tagsArr = tags.map((tag) =>
      <button className="tags" onClick={this.props.handleClick} value={tag} key={tag}>{tag}</button>
    );
    return (
      <div className="tagsList">
        {tagsArr}
      </div>
    );
  }
}

export default TagsList;
