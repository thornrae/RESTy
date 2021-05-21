// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import Header from './Header/header.js';
import Form from './Form/form.js';
import Footer from './Footer/footer.js';
import Results from './Results/results.js';

class App extends React.Component {
  //add constructor to manage state: count & results array
  //declare class method that takes in pokemon results from form and adds it to results state in constructor so that it can be passed to results 

  constructor(props) {
    super(props);
    this.state = {
      results: [],
    }
  }

  handleState = (info) => {
    this.setState({
      results: [info]
    })
  }


  
  render() {
    return (
      <>
        <Header />
        <Form giveAppResponse={this.handleState}/>
        <Results results={this.state.results} />
        <Footer />
      </>
  );
}

}

export default App;



