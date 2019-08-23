import React from 'react';

class HelloWorld extends React.Component{
   constructor(props){
      super(props)
      this.state = {
         who: 'world'
      }
   }
   handleWorldButtonClick = () => {
      // console.log('You clicked the World Button')
      this.setState({
         who: 'world!'
      })
   }
   handleFriendButtonClick = () => {
      // console.log('You clicked the Friend Button')
      this.setState({
         who: 'friend!'
      })
   }
   handleReactButtonClick = () => {
      // console.log('You clicked the React Button')
      this.setState({
         who: 'React!'
      })
   }
   render(){
      return(
         <div>
            <p>Hello, {this.state.who}</p>
            <button
               onClick={this.handleWorldButtonClick}
            > World
            </button>
            <button
               onClick={this.handleFriendButtonClick}
            >Friend
            </button>
            <button
               onClick={this.handleReactButtonClick}
            >React
            </button>
         </div>
      )
   }
}

export default HelloWorld;