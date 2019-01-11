import React,{Component}  from 'react';
import  '../setup.Tests'
import {shallow, mount, render} from 'enzyme';
import Registration from '../src/components/Registration/Registration'

/// describe what we are testing
describe('Registration Component', () =>{

    /// make our assertion and what we expect to happen
    it('should render without throughing any error',()=>{
        expect(shallow(<Registration/>).find('form.registration').exists()).toBe(true)
    })

    it('renders a email input',()=>{
        expect(shallow(<Registration/>).find('#email').length).toEqual(1);
    })

    it('renders the name input',()=>{
        expect(shallow(<Registration/>).find('#name').length).toEqual(1);
    })

    it('renders the password input',()=>{
        expect(shallow(<Registration/>).find('#password').length).toEqual(1);
    })
})

describe('Email input',()=>{
    it('should respond to change event and change the state of the Registration component',() => {
        const wrapper = shallow(<Registration/>);
        wrapper.find('#email').simulate('change',{target:{name:'email', value:'blah@gmail.com'}});

        expect(wrapper.state('email')).toEqual('balh@gmail.com');
    })
})

describe('Name Input',()=>{
    it('should respond to change event and change the state of the Registration component',() => {
        const wrapper = shallow(<Registration/>);
        wrapper.find('#name').simulate('change' , {target:{name:'name', value:'cats'}});
        expect(wrapper.state('name')).toEqual('cats');
    })
})

describe('Password input',()=>{
    it('should respond to change event and change the state of the Registration component',() => {
        const wrapper = shallow(<Registration/>);
        wrapper.find('#password').simulate('change',{target:{name:'password', value:'catspass'}});
        expect(wrapper.state('password')).toEqual('catspass');
    })
})