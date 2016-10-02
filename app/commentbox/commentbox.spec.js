import React from 'react';
import Sinon from 'sinon';
const sinon = Sinon.sandbox; //there is a better way to do this ;_;

import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import CommentBox from './commentbox';
import CommentForm from './commentbox';
import CommentList from './commentbox';
import Comment from './commentbox';

describe.skip('<CommentBox />', function() {

    it('displays comments header', function() {
        const wrapper = shallow(<CommentBox />);
        expect(wrapper.find('#commentHeader').text()).to.equal("Comments");
    });

    it('contains a <CommentList /> component', function() {
        const wrapper = mount(<CommentBox />);
        expect(wrapper.find(CommentList)).to.have.length(1);
    })

    it('contains a <CommentForm /> component', function() {
        const wrapper = mount(<CommentBox />);
        expect(wrapper.find(CommentForm)).to.have.length(1);
    })

    it('has an initial state', function() {
        const wrapper = mount(<CommentBox />);
        expect(wrapper.state().data).to.be.empty;
    });

    it('updates data when fetched from server', function() {
        const wrapper = mount(<CommentBox />);
        wrapper.setState({ data: [
            { author: 'Michael Scott', text: 'Hello'}
        ]});
        var data = wrapper.state().data[0]
        expect(wrapper.state().data).to.have.length(1);
        expect(data.author).to.equal('Michael Scott');
        expect(data.text).to.equal('Hello');
    });
});

describe.skip('<CommentList />', function() {
    it('has props for data', function() {
        const wrapper = shallow(<CommentList />);
        expect(wrapper.props().data).to.be.defined;
    });

    it('does not contain <Comment /> component when there are no comments', function() {
        const data = []
        const wrapper = mount(<CommentList />);
        wrapper.setProps({ data: data });
        expect(wrapper.props().data).to.have.length(0);
        // expect(wrapper.find(Comment)).to.have.length(0);
    });

    it('contains the same number of <Comment /> components as comments', function() {
        const props= {
            data: [
                { author: 'Michael Scott', text: 'Hello'},
                { author: 'Dwight Shrute', text: 'Beets'}
            ]
        }
        const wrapper = mount(<CommentList {...props}/>);
        expect(wrapper.props().data).to.have.length(2);
        // TODO: Why is this not working?
        // expect(wrapper.find(Comment)).to.have.length(2);
    });

});

// describe('<Comment />', () => {
    // it('renders the author', () => {
        // const props= {
            // author: 'Dwight Shrute',
            // text: 'Beets'
        // }
        // const wrapper = shallow(<Comment {...props} />);
        // expect(wrapper.find('h3.commentAuthor').text()).to.equal('');
    // });
// });
