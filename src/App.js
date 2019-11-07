import React from 'react';
import './App.css';

class App extends React.Component{

  constructor(props){
   super(props);
   this.state ={
     fields:{
       name:'',
     surname:'',
    
  },
  names:[]
                }
  this.handlesubmit = this.handlesubmit.bind(this);
  //this.handlesubmit = this.onInputChange.bind(this);
  //this.onSurnameChange = this.onSurnameChange.bind(this);
  //meglio fare senza arrow function 
  }
  //onNameChange =(evt) =>{
  //  this.setState({name:evt.target.value});
  //}
  //onSurnameChange =(evt) =>{
  //  this.setState({surname:evt.target.value});
  //}




  onInputChange =(evt) =>{
    const fields = this.state.fields;
    fields[evt.target.name] = evt.target.value;
    this.setState({fields:fields});
  }

  objectManager = (o , action) => {
    for(var key in o){
      if (o.hasOwnProperty(key)) {
        action(key)
      }
    }
  }

  handlesubmit(event){
    event.preventDefault();
    //leggere
   this.objectManager(this.state.fields, (key) => console.log (this.state.fields[key]))
    
    //ora che ho il dato posso aggiornato lo stato 
    //let names = this.state.names.slice();
    //names.push(name);
    const emptyfield = {...this.state.fields}
    this.objectManager(emptyfield,(key) => {emptyfield[key]=''})
    this.setState({fields:emptyfield})


    let names = [...this.state.names, this.state.fields ];
    this.setState({names:names});
    //pulisco vecchio metodo averere ref nella form 
    //this.refs.name.value="";
    //pulisco
    //this.setState({name:''});
    //this.setState({surname:''});
    // const emptyfield = {...this.state.fields};
    // for(var key in emptyfield){
    //   if (emptyfield.hasOwnProperty(key)) {
    //     emptyfield[key]=''
    //   }
    // }
    }
  
  //object.keys(emptyfield).forEach(i => emptyfield[i]='');
    

  

  render(){
    let listanomi = this.state.names.map((item, index) =>{
      return (
        <li key={index}>{item.surname},{item.name}</li>
      );
    });
    return(
    <div>
      <h1>esercicccccio</h1>
      <form onSubmit={this.handlesubmit}>
        <input type="text" 
              placeholder="il tuo nome" 
              name='name'
              value={this.state.fields.name}
              onChange={this.onInputChange}/>
            <input type="text" 
              placeholder="il tuo cognome" 
              name='surname'
              value={this.state.fields.surname}
              onChange={this.onInputChange}/>
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
