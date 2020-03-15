import React, { Component } from 'react';


class Search extends Component{

  render(){
    return(
      <div>
        <form>
	 <input className="form-control form-control-lg" type="text" placeholder="Paster short url">
         <button type="button" className="btn btn-outline-primary">Search</button>	
       </form>
      </div>
    )
  }
}

export default Search;
