import React, { Component } from 'react';
// import Messages from './Messages';
// import TheDate from './state/TheDate';
// import Counter from './state/Counter';
// import Tabs from './state/Tabs';
import Accordion from './state-drills/Accordion';
import './App.css';


const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
];

// const tabsProp = [
//   { name: 'First tab',
//     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
//   { name: 'Second tab',
//     content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
//   { name: 'Third tab',
//     content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
// ];

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Accordion sections={sections}/>
        {/* <Tabs tabs={tabsProp}/> */}
        {/* <h1>YOUR APPLICATION NAME!</h1>
        <Messages name='Messages' unread={0} />
        <Messages name='Notifications' unread={10} />
        <TheDate />
        <Counter count={123} step={10} /> */}
      </div>
    );
  }
}

export default App;