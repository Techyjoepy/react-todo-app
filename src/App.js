import './App.css';
import React from 'react';

//import Header from './components/header';
import Form from './components/form';
import Table from './components/table';

class App extends React.Component{
  state = {
    todosObj:[],
    err:''
  }

 sHandle = (e) =>{
    const task = e.target.elements.task.value;
    e.preventDefault();
    var tempObj = [];

    if (task === '' || task === null){
        this.setState({err:"Input a Task"})

    }else{
        if (this.state.todosObj){tempObj = this.state.todosObj;  }
              
        var sn = tempObj.length + 1
        tempObj.push({'id':sn, 'task':task});
        this.setState({todosObj:tempObj});
        tempObj = [];
        sn = null;
        
        e.target.elements.task.value = '';
        this.setState({err:""})
  } 
}

  delTodo = (e, id) =>{
    var t = this.state.todosObj;
    e.preventDefault();
    this.setState({todosObj:t.filter(s=>s.id !== id)})
    console.log(this.state.todosObj)
  }

  componentWillMount =()=>{
    const d1 = localStorage.getItem("todos");
    const d2 = JSON.parse(d1);
    this.setState({todosObj:d2});
  }

  componentDidUpdate =()=>{
    const d3 = JSON.stringify(this.state.todosObj);
    localStorage.setItem("todos", d3);
  }

  

  render() {
    return (
      <div className="container" style={{marginLeft:"200px", marginRight:"200px"}}>
        <Form saveTask={this.sHandle} errmssg={this.state.err} />
        <Table data = {this.state.todosObj ? this.state.todosObj : []} delTodo={this.delTodo}/>
      </div>
    )
  }
}

export default App;
