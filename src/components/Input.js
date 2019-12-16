import React from 'react'
export default class Input extends React.Component{
    constructor(props){
    
        super(props)
        this.state={
            nom:'kl',
            prenom:'ms'
           
        }
    }
        
    
    handleChange(e){

        this.setState({nom: e.target.value} )
    }
    handleChanges(e){

        this.setState({ prenom: e.target.value} )
    }
    handleClick(e){
        this.setState({ nom:'kl',prenom:'ms'})
    }
    
   
    

   render(){
       return(
           <div>
             <h4> {this.state.prenom}</h4> 
             <h4>{this.state.nom}</h4>
             <input value={this.state.prenom} onChange={this.handleChange.bind(this)}  type="text"/>
             <input value={this.state.nom} onChange={this.handleChanges.bind(this)} type="text"/>
             <button onClick={this.handleClick.bind(this)}>loio </button>

           </div>
       );
    }

}