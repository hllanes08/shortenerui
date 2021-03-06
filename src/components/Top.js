import React, { Component } from 'react';

class Top extends Component{
  constructor(props){
    super(props);
    this.state = {
      records: []
    }
  }

  getRecords(){
    var _instance = this;
    var response = fetch("https://shortenerguy.herokuapp.com/api/top",{
    headers: new Headers({
     'Access-Control-Allow-Origin':'*'
     })
    }).then(results => {
      return results.json();
    }).then(data => {
      if(data.success){
        this.setState({records: data.urls });
      }
    });
 
  }

  componentDidMount() {
    this.getRecords();
  }

  render(){

    let rows = this.state.records.map((item, index) => {
      return (<tr><td>{item.id}</td><td>{item.code}</td><td>{item.url}</td><td>{item.occurrences}</td></tr>)
    });
    return(
      <div>
         <table className="table">
	   <thead>
	    <tr>
	    <th scope="col">#</th>
	    <th scope="col">Code</th>
	    <th scope="col">Site</th>
	    <th scope="col">Frecuency</th>
	    </tr>
	    </thead>
	    <tbody>
	    { rows }
	    </tbody>
	  </table>
      </div>
    );
  }
}

export default Top;
