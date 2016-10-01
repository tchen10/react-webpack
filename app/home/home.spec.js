import React from 'react';
import Sinon from 'sinon';
const sinon = Sinon.sandbox; //there is a better way to do this ;_;

import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import Home from './home'
import UserStore from '../userStore/userStore';

describe('<Home />', function() {

  afterEach(()=>{
    sinon.restore();
  });

  it('Should display default welcome message', function() {

    const wrapper = shallow(<Home />);
    expect(wrapper.find('#welcome').text()).to.equal("Welcome, Zordon");
  });

  it('Should display welcome message', function() {
    sinon.stub(UserStore, 'getState').returns({name: 'Alpha 5'});

    const wrapper = shallow(<Home />);
    expect(wrapper.find('#welcome').text()).to.equal("Welcome, Alpha 5");
  });

});
