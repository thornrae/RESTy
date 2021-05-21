import React from 'react';
import JSONPretty from 'react-json-pretty';


// likely just a function and not a class
// expects count (what is count?)
// renders result header & result body as pretty JSON

class Results extends React.Component {
  render() {
    // console.log('results prop', this.props.results);
    return (
      <>
      <h2>api output</h2>
      <div>
        { 
          <JSONPretty data={this.props.results}></JSONPretty>
        }
      </div>
      </>
    )
  }
}  

export default Results;

