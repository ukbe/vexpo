import React from 'react';
import GeoMap from './GeoMap';

var Home = React.createClass({

    getInitialState: function(){
        return {
            id: ''
        }
    },

    render: function() {

        return (

            <GeoMap id={this.state.id}/>

        )

    }

});

module.exports = Home;