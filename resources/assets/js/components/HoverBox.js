import React from 'react';
import { Link, IndexLink } from 'react-router';
import $ from 'jquery';

var HoverBox = React.createClass({

    getInitialState: function() {
        return {
            children: []
        }
    },

    showBox: function(event) {
        $(this).removeClass('hidden');
    },

    hideBox: function(event) {
        $(this).addClass('hidden');
    },

    removeBox: function(event) {
        ReactDOM.unmountComponentAtNode(this.parent);
    },

    componentDidMount: function() {
        this.hideBox(null);
    },

    componentWillUnmount: function() {
        this.hideBox();
    },

    render: function() {

        return (

            <div className="hover-box">
                <button type="button" className="close" aria-label="Close" onClick={this.hideBox}><span aria-hidden="true">&times;</span></button>
                <div className="content">{this.state.children | 'No Content' }</div>
            </div>

        )

    }

});

module.exports = HoverBox;