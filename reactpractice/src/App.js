import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      name:'',
      data:[],
      isLoading:false
    }
    console.log("cons");
  }
  componentDidMount() {
    this.getData();
  }
  getData=(page,keyword)=>{
    axios.get("https://jsonplaceholder.typicode.com/todos/1").then((res)=>{
        console.log(res)
        this.setState({name:'rohit', data:res.data});
    }).catch((error)=>{

    })
  }
  render() {
    console.log("render");
    return (<div>
      <h1>{this.state.name}</h1>
      <p>{this.state.data.title}</p>
      </div>
    );
  }
}

export default App;
   