import React, { Component } from "react";
import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { fetchSmurfs } from "./actions";
import { connect } from 'react-redux'


import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
// import { render } from "@testing-library/react";



class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchSmurfs)
  }
  render() {
    return (
      <div className="App">
        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
      );
  }
}

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.

export default connect(null, {fetchSmurfs})(App)