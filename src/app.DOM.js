import React from 'react';
import './App.css';

class App extends React.Component{

  constructor(props){
   super(props);
   this.state ={
    names:[]
  }
  this.handlesubmit = this.handlesubmit.bind(this);
  }
  handlesubmit(event){
    event.preventDefault();
    var name = this.refs.name.value;
    console.log("hai scritto" + name);
    //ora che ho il dato posso aggiornato lo stato 
    let names = this.state.names.slice();
    names.push(name);
    this.setState({names:names});
    //pulisco
    this.refs.name.value="";
  }

  render(){
    let listanomi = this.state.names.map((name, index) =>{
      return (
        <li key={index}>{name}</li>
      );
    });
    return(
    <div>
      <h1>esercicccccio</h1>
      <form onSubmit={this.handlesubmit}>
        <input type="text" placeholder="il tuo nome" ref="name"/>
          <input type="submit" value="invia"/>
      </form>
      <div>
        <h2>nomi gia iscritti:</h2>
        <ol>{listanomi}</ol>
      </div>
    </div>
    )
  }
}


export default App;
