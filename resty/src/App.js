// import logo from './logo.svg';
// import './App.css';

import React from 'react';
import Header from './Header/header.js';
import Form from './Form/form.js';
import Footer from './Footer/footer.js';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Form />
        <Footer />
      </>
  );
}

}

export default App;
