import React from 'react';
import ReactDOM from 'react-dom';
import Stuff from './Stuff';
import Testrenderer from 'react-test-renderer';

describe('Testing Stuff Component', () => {
   it('Smoke Test: Renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Stuff />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('Test Render: renders the UI as expected', () => {
      const tree = Testrenderer
        .create(<Stuff />)
        .toJSON();
      expect(tree).toMatchSnapshot();  
    });
    
    // Additional Tests Can Go Here
})
