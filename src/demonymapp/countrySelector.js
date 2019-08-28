import React, { Component } from 'react';
import './countrySelector.css';

class CountrySelector extends Component{
   static defaultProps = {
      countries: []
   }
   changeSelection(value){
      if(value === 'None'){
         this.props.changeHandler(null);
      } else {
         const country = this.props.countries.find(country => country.name === value);
         this.props.changeHandler(country);
      }
   }
   render(){
      const options = this
            .props
            .countries
            .map(
               (country, i) => <option value={country.name} key={i}>{country.name}</option>
            );
      const allowSelection = this.props.countries.length === 0
      ? <div className="lds-facebook"><div></div><div></div><div></div></div>
      : <select 
         id='country' 
         name='country' 
         onChange={e => this.changeSelection(e.target.value)}>
            <option value='None'>
               Select one...
            </option>
            {options}
         </select>
      return(
         <div className='country_selector'>
            <form>
               <label htmlFor='country'>Select a country:</label>
               {allowSelection}
            </form>
         </div>
      );
   }
}

export default CountrySelector;