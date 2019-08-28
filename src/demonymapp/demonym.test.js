import React, { Component } from 'react';
import Demonym from './demonym';

describe('Demonym Componet', () => {
   it('Smoke Test: renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Demonym />, div);
      ReactDOM.unmountComponentAtNode(div); 
   });
})