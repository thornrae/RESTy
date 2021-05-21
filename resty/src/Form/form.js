import React from 'react';
import axios from 'axios';

import './form.scss';

//send axios function to be sent in as a prop
//renders url entry form (ok)
//invokes axios function call with info from submit button
//send API results back to app...


class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url: "url input",
      rest: "http input",
      // results: []
    }
  }

  //sets state with form information in the web browser
  handleUrlInput = (e) => {
    e.preventDefault();
    let url  = e.target.value;
    console.log(url);
    this.setState({url});
  }

  handleRest = (e) => {
    let rest = e.target.value;
    this.setState({rest});
  }

  // sendAppResults = (e) => {
  //   this.props.giveAppResponse(this.state.results);
  // }

  fetchData = async (e) => {
    e.preventDefault();
    const response = await axios ({
      method: this.state.rest || 'get',
      url: this.state.url,
      // data: options.body && JSON.parse(options.body)
    });

    const results = response.data;
    this.props.giveAppResponse(results);

  }

  render () {
    return (
      <>
      <form onSubmit={this.fetchData}>
        <div id="urlentry">
          <input type="text" name="url" placeholder="type url here" onChange={this.handleUrlInput}/>
        </div>
        <button type="submit" > Submit </button>

        <div id="restentry"> 
          <label>
          <input type="radio" id="get" value="get" name="rest" onClick={this.handleRest}/>
          <span>GET</span>
          </label>

          <label>
          <input type="radio" id="post" value="post" name="rest" onClick={this.handleRest} />
          <span>POST</span>
          </label>

          <label>
          <input type="radio" id="put" value="put" name="rest" onClick={this.handleRest} />
          <span>PUT</span>
          </label>

          <label>
          <input type="radio" id="delete" value="delete" name="rest" onClick={this.handleRest}/>
          <span>DELETE</span>
          </label>

        </div>
      </form>
      </>

    )
  }
}

export default Form;
