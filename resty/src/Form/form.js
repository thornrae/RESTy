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
      http: "http input",
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
  
  //function for submit to go get information
  //takes in url state

  //this is what renders it to the page
  handleSubmit = (e) => {
    e.preventDefault();
    let result = {
      url: this.state.url, 
      rest: this.state.rest
    }
    this.setState(
      {formInput: [...this.state.formInput, result]}
    )
  }

  handleAPI = async () => {
    let url = this.state.url;
    let rest = this.state.http;
    let response = await axios.rest(url);
    let pokemon = response.data.results;
    this.setState({pokemon})
  }

  render () {
    console.log(this.state.formInput);

    return (
      <>
      <form onClick={this.handleAPI}>
        <div id="urlentry">
          <input type="text" name="url" placeholder="type url here" onChange={this.handleUrlInput}/>
          <button type="submit" > Submit </button>
        </div>
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

      {/* <div id="entered-log">
        {this.state.formInput.map((input,idx) => {
          return (
            //this key needs to generate new key each time
            <p> {input.rest} {input.url}</p>
          )
        })}
      </div> */}

      </>

    )
  }

}

export default Form;
