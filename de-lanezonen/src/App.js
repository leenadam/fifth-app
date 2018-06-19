// de Lanezonen
// App.js

import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { push } from 'redux-first-routing'
import { activateInfo, closeInfo } from './actionsReducerStore';
import Nav from './Components/Nav';
import { match } from './router'
import overAndOut from './Images/overAndOut.jpg' // relative path to image 

class App extends Component {
  render() {

    const { route, params } = match(this.props.location.pathname)
    const Page = route.page;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to de Lanezonen</h1>
        </header>
        <p className="App-page">
          <h1>{this.props.paginaInfo.title}</h1>

          {this.props.paginaInfo.title ?
            <button onClick={this.props.closeInfo}><br />
              muziek uit <br /><br />
            </button> :
            <img src={overAndOut} alt={"Over And Out"} height={105} width={300} onClick={() => this.props.activateInfo({ title: 'Over and out' })} />
          }<br /><br />
          <Nav />
          <br />
          <hr />
          <Page {...params} />
          <hr />
        </p>
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = (state, ownProps) => ({
  paginaInfo: state.paginaInfoReducer,
  location: state.location,
  state,
});

const mapDispatchToProps = {
  activateInfo,
  closeInfo,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;