import React from 'react';

class Bomb extends React.Component{
   constructor(props){
      super(props)
      this.state = {
         count: 0,
         value: 'start'
      }
   }
   componentDidMount(){
      this.interval = setInterval(() => {
         if(this.state.count >= 8){
            this.setState({
               value: 'BOOM!'
            })
            this.componentWillUnmount()
         } else if (this.state.count % 2 === 0){
            this.setState({
               value: 'tick'
            })
         } else if (this.state.count % 2 !== 0){
            this.setState({
               value: 'tock'
            })
         }
         this.setState({
            count: this.state.count + 1
         })
      }, 1000)
   }
   componentWillUnmount() {
      clearInterval(this.interval)
   }
   render(){
      return(
         <div>
            <p>Current Count is {this.state.count}: {this.state.value}</p>
         </div>
      )
   }
}

export default Bomb;