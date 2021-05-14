import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      url: "url input",
      http: "http input",
      formInput:[]
    }
  }

  //sets state with form information in the web browser
  handleUrlInput = (e) => {
    // console.log(e);
    e.preventDefault();
    let url  = e.target.value;
    // let http = e.target.name;
    console.log(url);
    this.setState({url});
    // this.setState({http});
  }

  //make function for the radio buttons

  handleRest = (e) => {
    let http = e.target.value;
    this.setState({http});
  }
  
  


  //function for submit to go get information
  //takes in url state

  //this is what renders it to the page
  handleSubmit = (e) => {
    e.preventDefault();
    let result = {
      url: this.state.url, 
      http: this.state.http
    }
    this.setState(
      {formInput: [...this.state.formInput, result]}
    )
    // this.setState(
    //   {...this.state.formInput, formInput:result}
    // )
  }


  render () {
    console.log(this.state.formInput);

    return (
      <>
      <form onSubmit={this.handleSubmit}>
        <div id="urlentry">
          <input type="text" name="url" placeholder="type url here" onChange={this.handleUrlInput}/>
          <button type="submit" > Submit </button>
        </div>
        <div id="httpentry"> 
          <label>
          <input type="radio" id="get" value="get" name="http" onClick={this.handleRest}/>
          <span>GET</span>
          </label>

          <label>
          <input type="radio" id="post" value="post" name="http" onClick={this.handleRest} />
          <span>POST</span>
          </label>

          <label>
          <input type="radio" id="put" value="put" name="http" onClick={this.handleRest} />
          <span>PUT</span>
          </label>

          <label>
          <input type="radio" id="delete" value="delete" name="http" onClick={this.handleRest}/>
          <span>DELETE</span>
          </label>

        </div>
      </form>

      <div>
        {this.state.formInput.map((input, i) => {
          return (
            //this key needs to generate new key each time
            <p key={i}> {input.http} {input.url}</p>
          )
        })}
      </div>

      </>

    )
  }

}

export default Form;
