import React from 'react'

class RouletteGun extends React.Component{
   constructor(props){
      super(props)
      this.state = {
         chamber: null,
         spinningTheChamber: false
      }
   }
   static defaultProps = {
     bulletInChamber: 8
   } 
   componentWillUnmount(){
      clearTimeout(this.timeout)
   }
   handleTheButtonClick = () => {
      this.setState({
         spinningTheChamber: true,
      })
      this.timeout = setTimeout(() => {
         const randomChamber = Math.ceil(Math.random() * 8)
         this.setState({
            chamber: randomChamber,
            spinningTheChamber: false
         })
      }, 4000)
   }
   displayBasedOnRules(){
      if (this.state.spinningTheChamber) {
        return 'spinning the chamber and pulling the trigger! ...'
      } else if (this.state.chamber === this.props.bulletInChamber) {
        return 'BANG!!!!!'
      } else {
        return 'You\'re safe!'
      }
   }
   render(){
      return(
         <div>
            <p>{this.displayBasedOnRules()}</p>
            <button onClick={this.handleTheButtonClick}>
               Pull the trigger!
            </button>
         </div>
      )
   }
}

export default RouletteGun;