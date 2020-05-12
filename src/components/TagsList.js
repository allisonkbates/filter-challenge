import React, { Component } from 'react';

class TagsList extends Component {
  render() {
    const posting = this.props.posting;
    const tools = posting.tools;
    const languages = posting.languages;

    let toolsArr;
    if (tools) {
      toolsArr = tools.map((tool) => 
        <button className="tags" onClick={this.props.handleClick} value={tool} key={tool}>{tool}</button>
      );
    }
    let langArr;
    if (languages) {
      langArr = languages.map((lang) => 
        <button className="tags" onClick={this.props.handleClick} value={lang} key={lang}>{lang}</button>
      );
    }

    return (
      <div className="TagsList">
        {toolsArr}
        {langArr}
        <button className="tags" onClick={this.props.handleClick} value={posting.level}>{posting.level}</button>
        <button className="tags" onClick={this.props.handleClick} value={posting.role}>{posting.role}</button>
      </div>
    );
  }
}

export default TagsList;