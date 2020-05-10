import React, { Component } from 'react';

class TagsList extends Component {
  render() {
    const posting = this.props.posting;
    const tools = posting.tools;
    const languages = posting.languages;

    let toolsArr;
    if (tools) {
      toolsArr = tools.map((tool) => 
        <p className="tags">{tool}</p>
      );
    }
    let langArr;
    if (languages) {
      langArr = languages.map((lang) => 
        <p className="tags">{lang}</p>
      );
    }

    return (
      <div className="TagsList">
        {toolsArr}
        {langArr}
        <p className="tags">{posting.level}</p>
        <p className="tags">{posting.role}</p>
      </div>
    );
  }
}

export default TagsList;