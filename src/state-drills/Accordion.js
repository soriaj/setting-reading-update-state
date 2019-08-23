import React from 'react';
import './Accordion.css'

class Accordion extends React.Component{
   constructor(props){
      super(props)
   }
   static defaultProps = {
      sections: []
   };
   state = {
      activeSection: false,
   }
   handleButtonClick(index){
      this.setState({
         activeSection: index
      })
   }
   renderList(){
      const { sections } = this.props
      const { activeSection } = this.state
      let data = sections.map((title, index) => (
         <li className='list_item' key={index}>
            <button type='button' onClick={() => this.handleButtonClick(index)}>
               {title.title}
            </button>
            {(activeSection === index) && <p>{title.content}</p>}
         </li>
      ))
      return data
   }
   render() {
      return (
         <ul className='react_accordion'>
            {this.renderList()}
         </ul>
      )
   }
}

export default Accordion;