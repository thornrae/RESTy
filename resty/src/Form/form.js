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
    console.log(url);
    this.setState({url});
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
          <button type="submit"> Submit </button>
        </div>
        {/* <div id="httpentry"> 
          <label for="get">GET<input type="radio" id="get" value="get" name="http" /></label>
        </div> */}
      </form>

      <div>
        {/* {this.state.url} {this.state.http} */}
        {/* loop thru the array to render it?  */}

        {this.state.formInput.map((input ) => {
          return (
            <p>{input.url}</p>
          )
        })}
      </div>

      </>

    )
  }

}

export default Form;
