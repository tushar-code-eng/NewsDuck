import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import Contact from './components/contact';
import Login from './components/Login';
import {
  BrowserRouter,
  // Switch,
  Route,
  Routes,
  // Link
} from "react-router-dom";

export class App extends Component {
  state={
    Hprogress:0
  }
  setProgress=(progress)=>{
    this.setState({Hprogress:progress})
  }

  render() {
    return (
      <BrowserRouter>
      <div>
        <NavBar/>

        <LoadingBar
        color='red'
        height={3}
        progress={this.state.Hprogress}/>
        <Routes>
        <Route exact path="/" element={<News setProgress={this.setProgress}  country="in"/>}></Route>
        <Route exact path="business" element={<News setProgress={this.setProgress} country="in" category="business"/>}></Route>
        <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  country="in" category="entertainment"/>}></Route>
        <Route exact path="/general" element={<News setProgress={this.setProgress}  country="in" category="general"/>}></Route>
        <Route exact path="/health" element={<News setProgress={this.setProgress}  country="in" category="health"/>}></Route>
        <Route exact path="/science" element={<News setProgress={this.setProgress}  country="in" category="science"/>}></Route>
        <Route exact path="/sports" element={<News setProgress={this.setProgress}  country="in" category="sports"/>}></Route>
        <Route exact path="/technology" element={<News setProgress={this.setProgress}  country="in" category="technology"/>}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    )
  }
}

export default App

