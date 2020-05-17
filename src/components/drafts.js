
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

<WarningBanner warn={this.state.showWarning}/>
<button onClick={this.handleToggleClick}>
  {this.state.showWarning ? 'Hide' : 'Show'}
</button>


this.filterRole = this.filterRole.bind(this);
this.filterLevel = this.filterLevel.bind(this);
this.filterLanguages = this.filterLanguages.bind(this);
this.filterTools = this.filterTools.bind(this);
this.filterPostings = this.filterPostings.bind(this);
this.displayFilteredJobs = this.displayFilteredJobs.bind(this);
}

filterRole(event) {
this.setState({
  roleTag: Array.from(new Set([...this.state.roleTag, event.target.value])),
  showAll: false
})
}
filterLevel(event) {
this.setState({
  levelTag: Array.from(new Set([...this.state.levelTag, event.target.value])),
  showAll: false
})
}
filterLanguages(event) {
this.setState({
  languagesTag: Array.from(new Set([...this.state.languagesTag, event.target.value])),
  showAll: false
})
}
filterTools(event) {
this.setState({
  toolsTag: Array.from(new Set([...this.state.toolsTag, event.target.value])),
  showAll: false
})
}
filterPostings(posting) {
if (this.state.roleTag.includes(posting.role) || (this.state.levelTag.includes(posting.level)) || (this.state.languagesTag.includes(posting.languages)) || (this.state.toolsTag.includes(posting.tools))) {
  return true;
} else {
  return false;
}
}
displayFilteredJobs() {
const filteredPostings = postingData.filter(this.filterPostings);
filteredPostings.map((posting) =>
  <JobCard key={posting.id} posting={posting} showAll={this.state.showFilter} 
  filterRole={this.filterRole} filterLevel={this.filterLevel} filterLanguages={this.filterLanguages} 
  filterTools={this.filterTools}/>
);
}

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

  return (
    <div className="JobCard">
    <img src={Account} alt={posting.company} width="87" height="87"></img>
    <StaticInfo posting={posting}/>
    <TagsList posting={posting} handleClick={this.props.handleClick}/>
  </div>
  )