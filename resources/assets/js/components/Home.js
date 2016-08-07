import React from 'react';
import GeoMap from './GeoMap';
import EventSpot from './EventSpot';

var Home = React.createClass({

    getInitialState: function(){
        return {
            id: 1
        }
    },

    render: function() {

        return (

            <div>

                <GeoMap geomap_id={this.state.id}/>

                <EventSpot/>

            </div>

        )

    }

});

module.exports = Home;