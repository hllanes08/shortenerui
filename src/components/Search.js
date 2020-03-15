import React, { Component } from 'react';


class Search extends Component{
  constructor(props){
    super(props);
    this.state = {
      prefix: '',
      found: true
    }
    this.onChange = this.onChange.bind(this);
    this.onSearchSite = this.onSearchSite.bind(this);
  }

  onChange(e){
   var split_value = e.currentTarget.value.split('/')
   var value = '';
   if(split_value.length > 2){
     value = split_value[split_value.length - 1];
   }
   console.log(value);
    this.setState({
      prefix: value,
      found: true
    });
  }
  onSearchSite(e){
    var response = fetch("https://shortenerguy.herokuapp.com/api/shortener/" + this.state.prefix,{
    headers: new Headers({
     'Access-Control-Allow-Origin':'*'
     })
    }).then(results => {
      return results.json();
    }).then(data => {
      if(data.success){
        window.location = "https://" + data.url;
      }else{
        this.setState({ found: false })
      }
    });
 

  }

  render(){
    return(
      <div className="col-md-6">
	<br/>
	<form>
	 <div className="form-group row">
   	   <input className="form-control form-control-lg" type="text" onChange={this.onChange} placeholder="https://shortenerui/abcd"/>
	 </div>
	 { !this.state.found ? 
	 <div className="form-group row">
   	   <span className="badge badge-danger">Not Found</span>
	 </div> : '' }
         <div className="form-group row">
	    <button type="button" className="btn btn-outline-primary" onClick={this.onSearchSite}>Search</button>
	  </div>
	 </form>
      </div>
    );
  }
}

export default Search;
