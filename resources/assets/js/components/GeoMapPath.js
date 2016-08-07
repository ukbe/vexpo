import React from 'react';
import $ from 'jquery';
import EventSpotActions from '../actions/EventSpotActions';

var GeoMapPath = React.createClass({

    getInitialState: function(){
        return {
            title: 'Argiculture Exposition',
            body: 'Details about the event'
        }
    },

    onClick: function(event) {

        EventSpotActions.updateEvent(1);

    },

    render: function() {

        return (

            <a href="#" onClick={this.onClick} title={this.props.title}><path d={this.props.data} title={this.state.title}></path></a>

        )

    }

});

module.exports = GeoMapPath;