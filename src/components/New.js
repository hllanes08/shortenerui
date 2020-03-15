import React, { Component } from 'react';


class New extends Component{
  constructor(props){
    super(props);
    this.state = {
      url: '',
      code: '',
      errors: [],
      show: false,
      save: false
    }
    this.onChangeCode = this.onChangeCode.bind(this);
    this.onChangeUrl = this.onChangeUrl.bind(this);
    this.onCreate = this.onCreate.bind(this);
  }

  onChangeCode(e){
    var code = e.currentTarget.value;
    this.setState({
      code: code
    });
  }

  onChangeUrl(e){
    var url = e.currentTarget.value;
    this.setState({
      url: url,
    });
  }

  onCreate(e){
   var dataPost = {
     shortcode: {
       url: this.state.url,
       code: this.state.code
     }
   };

   fetch('https://shortenerguy.herokuapp.com/api/shortener', {
     method: 'POST',
     body: JSON.stringify(dataPost),
     headers: { "Content-Type": "application/json" }
   }).then(results => {
      return results.json();
    }).then(data => {
      console.log(data);
      if(data.success){
        this.setState({ save: true});
      }else{
        this.setState({ errors: data.errors}); 
      }
    });
   
  }

  render(){
    return(
      <div className="col-md-6">
	<br/>
	<form>
	 <div className="form-group row">
	   { !this.state.save ? 
   	   <input className="form-control form-control-lg" type="text" onChange={this.onChangeCode} placeholder="Code"/>
: 
	   <span className="badge badge-primary">{this.state.code}</span>
	   }
	 </div>
	 <div className="form-group row">
	   { !this.state.save ? 
   	   <input className="form-control form-control-lg" type="text" onChange={this.onChangeUrl} placeholder="URL"/> : 
	    <span className="badge badge-primary">{this.state.url }</span> }

	 </div>

	 { this.state.errors.count != 0 ? 
	 <div className="form-group row">
          
   	   <span className="badge badge-danger">{ this.state.errors }</span>
	 </div> : '' }
         <div className="form-group row">
	    <button type="button" className="btn btn-outline-primary" onClick={this.onCreate} disabled={this.state.code === '' || this.state.url === '' }>Create</button>
	  </div>
	 </form>
      </div>

    );
  }
}

export default New;
