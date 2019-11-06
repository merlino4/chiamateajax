import React from 'react';
import './App.css';

class App extends React.Component{

  constructor(props){
   super(props);
   this.state ={
     name:'',
    names:[]
  }
  this.handlesubmit = this.handlesubmit.bind(this);
  }
  onNameChange =(evt) =>{
    this.setState({name:evt.target.value});
  }


  handlesubmit(event){
    event.preventDefault();
    //leggere
    var name = this.state.name;
    //console.log("hai scritto" + name);
    //ora che ho il dato posso aggiornato lo stato 
    //let names = this.state.names.slice();
    //names.push(name);
    let names = [...this.state.names, name];
    this.setState({names:names});
    //pulisco vecchio metodo averere ref nella form 
    //this.refs.name.value="";
    //pulisco
    this.setState({name:''});
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
        <input type="text" placeholder="il tuo nome" 
        value={this.state.name}
        onChange={this.onNameChange}/>
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
