// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import Header from './Header/header.js';
import Form from './Form/form.js';
import Footer from './Footer/footer.js';

class App extends React.Component {

  // constructor(props){
  //   super(props);
  //   this.state = {
  //     urlInput: "url will render here",
  //     httpInput: "http will render here"
  //   };
  // }

  // functions here that update state with the values submitted from the form
   
  // urlInput = (e) => {
  //   console.log(e);
  //   let entry = e.target.value;
  
  //   this.setState({entry});
  // }

  render() {
    return (
      <>
        <Header />
        <Form />
        {/* <button onClick={this.urlInput}> Submit </button> */}

          
              {/* event listeners like on click or submit */}
              {/* but click and submit are in a different file, how would i access them here?  */}
            {/* <form>
              <div id="urlentry">
                <input type="text" name="urlinput" placeholder="type url here" onChange={this.urlInput}/>
                <button type="submit" > Submit </button>
              </div>
            
              <div id="httpentry"> 
                <input type="radio" id="get" value="get" name="http" />
                <label for="get">GET</label>

                <input type="radio" id="put" value="put" name="http" />
                <label for="put">PUT</label>

                <input type="radio" id="post" value="post" name="http" />
                <label for="post">POST</label>

                <input type="radio" id="delete" value="delete" name="http"/>
                <label for="delete">DELETE</label>
             </div>
            </form> */}
          {/* {this.state.httpInput} {this.state.urlInput}  */}
              
        
        <Footer />
      </>
  );
}

}

export default App;
