import React, { Component, useState } from 'react';
import './App.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from './photo.jpg'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Visible: true,
      fullName: "mootez rhouma",
      prof: "Software Engineer",
      bio: "Student in GoMyCode",
      Status: "Hide",
      count:0
    }

  }
  ShowHide = () => {
    this.state.Status == "Hide" ? this.setState({ Status: 'Show', Visible: false }) : this.setState({ Status: 'Hide', Visible: true,count:0 })

  }
componentDidMount(){
  setInterval(() => {
    this.setState({count:(this.state.count+1)})},1000);}
  


  render() {
    return (
      <div className="App-header">
        <Button variant="primary" onClick={this.ShowHide} >{this.state.Status} </Button>

        {this.state.Visible ? <div className="fullname"> 
        <img heigth='400px' width='400px' src={image}></img> 
         <p>
          {this.state.fullName} <div className="bio"> {this.state.bio}</div> <div className="prof">{this.state.prof} </div></p>  {this.state.count}</div> : <p></p>}
        
      </div>
      

    );
  }
}


;
export default App;
