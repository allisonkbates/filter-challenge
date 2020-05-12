
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