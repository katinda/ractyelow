import React from 'react'
export default class Button extends React.Component{
    constructor(props){
        super(props)
        this.state={
            counter:0
        }
        
    }
    handleClick(e) {
        this.setState(state => ({ counter:state.counter + 1}))
    }
   
    render(){

        return(
            <div>
                <button onClick={this.handleClick.bind(this)} >{this.state.counter}</button>
               
            </div>
        )
    }
}
