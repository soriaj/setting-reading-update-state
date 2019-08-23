import React from 'react'

class Stuff extends React.Component{
   constructor(props){
      super(props)
      this.state = {
         firstName: 'Javier',
         lastName: 'Soria',
         test: null
      }
   }
   handleClick = () => {
      this.timeout = setTimeout(() => {
         this.setState({
            firstName: 'JAVIER',
            lastName: 'SORIA',
            test: 'test'
         })
      }, 2000)
   }
   fullName(){
      return `Hello my name is ${this.state.firstName} ${this.state.lastName} ${this.state.test}`
   }
   componentWillUnmount(){
      clearTimeout(this.timeout)
   }
   render(){
      return(
         <div>
            <p>{this.fullName()}</p>
            <button 
               onClick={this.handleClick}>
               Click Here!
            </button>
         </div>
      )
   }
}

export default Stuff;