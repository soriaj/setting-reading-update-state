import React from 'react';
import ReactDOM from 'react-dom';
import RenderTest from 'react-test-renderer';
import TheDate from './TheDate';

describe(`TheDate Component`, () => {
   it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<TheDate />, div);
      ReactDOM.unmountComponentAtNode(div);
   });

   it.skip('renders the UI as expected', () => {
      expect(RenderTest.create(<TheDate />).toJSON()).toMatchSnapshot()
   })
})