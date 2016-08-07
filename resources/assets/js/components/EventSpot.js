import React from 'react';
import Reflux from 'reflux';
import EventSpotActions from '../actions/EventSpotActions';
import EventSpotStore from '../stores/EventSpotStore';

import { Button, Alert } from 'react-bootstrap';

var EventSpot = React.createClass({

    mixins: [Reflux.connect(EventSpotStore, 'event')],

    render: function() {

        if (this.state.event) {
            return (

                <div className="media">

                    <div className="media-body">

                        <h4>{this.state.event.title}</h4>

                        <p>{this.state.event.body}</p>

                        <Button bsStyle="primary">Reserve</Button>

                    </div>

                </div>

            )
        }
        else if (this.state.loadError) {
            return (

                <Alert bsStyle="warning">

                    {this.state.loadError}

                </Alert>
            )
        }
        else {
            return (

                <span>loading</span>

            )
        }

    }

});

module.exports = EventSpot;