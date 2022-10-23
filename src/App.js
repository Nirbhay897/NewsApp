import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize=5;
  // apikey= process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0,
  }
  setProgress = (progress) =>{
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
        />
     
        {/* <News setProgress={this.setProgress} apikey={this.apikey} pageSize={this.pageSize} country="us" category="Science"/> */}
        <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apikey} key="general" pageSize={this.pageSize} country="us" category="general"/>}></Route>
          <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apikey} key="general" pageSize={this.pageSize} country="us" category="general"/>}></Route>
          <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apikey} key="health" pageSize={this.pageSize} country="us" category="health"/>}></Route>
          <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apikey} key="sports" pageSize={this.pageSize} country="us" category="sports"/>}></Route>
          <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apikey} key="technology" pageSize={this.pageSize} country="us" category="technology"/>}></Route>
          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apikey} key="entertainment" pageSize={this.pageSize} country="us" category="entertainment"/>}></Route>
          <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apikey} key="business" pageSize={this.pageSize} country="us" category="business"/>}></Route>
          <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apikey} key="science" pageSize={this.pageSize} country="us" category="science"/>}></Route>
        </Routes>
        </Router>
      </div>

    )
  }
}

