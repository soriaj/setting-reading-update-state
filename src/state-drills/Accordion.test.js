import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './Accordion';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe('Accordion Component', () => {
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

   it('Snapshot Test 01: component renders an empy li when sections prop not supplied.', () => {
      const wrapper = shallow(<Accordion />)
      expect(toJson(wrapper)).toMatchSnapshot()
   })
   
   it('Snapshot Test 02: renders no section as active by default.', () => {
      const div = document.createElement('div');
      const wrapper = shallow(<Accordion />, div)
      expect(toJson(wrapper)).toMatchSnapshot()
      
   })

   it('Snapshot Test 03: component opens a clicked section.', () => {
      const wrapper = shallow(<Accordion sections={sections} />)
      wrapper.find('button').at(2).simulate('click')
      expect(toJson(wrapper)).toMatchSnapshot()
   })
   
   it('Snapshot Test 04: component opens last section when multiple sections have been clicked.', () => {
      const wrapper = shallow(<Accordion sections={sections} />)
      wrapper.find('button').at(0).simulate('click')
      wrapper.find('button').at(1).simulate('click')
      expect(toJson(wrapper)).toMatchSnapshot()
   })
})