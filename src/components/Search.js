import React, { Component } from 'react';


class Search extends Component{
  constructor(props){
    super(props);
    this.state = {
      prefix: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSearchSite = this.onSearchSite.bind(this);
  }

  onChange(e){
    this.setState({
      prefix: e.currentTarget.value
    });
  }
  onSearchSite(e){
    console.log('Searching code' + this.state.prefix); 
  }

  render(){
    return(
      <div className="col-md-6">
	<br/>
	<form>
	 <div className="form-group row">
   	   <input className="form-control form-control-lg" type="text" onChange={this.onChange} placeholder="Paste short url"/>
	 </div>
         <div className="form-group row">
	    <button type="button" className="btn btn-outline-primary" onClick={this.onSearchSite}>Search</button>
	  </div>
	 </form>
      </div>
    );
  }
}

export default Search;
