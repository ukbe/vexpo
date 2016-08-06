import React from 'react';
import $ from 'jquery';

var GeoMapPath = React.createClass({

    getDefaultProps: function(){
        return {
            title: 'Chicago'
        }
    },

    onClick: function() {
        $('<div/>').class('eventBox').appendTo('body');
    },

    render: function() {

        return (

            <a href="#" onClick={this.onClick} title={this.props.title}><path d={this.props.data} title={this.props.title}></path></a>

        )

    }

});

module.exports = GeoMapPath;