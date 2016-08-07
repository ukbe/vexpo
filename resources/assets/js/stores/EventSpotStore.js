import Reflux from 'reflux';
import RefluxPromise from 'reflux-promise';
import EventSpotActions from '../actions/EventSpotActions';

var EventSpotStore = Reflux.createStore({

    listenables: EventSpotActions,

    data: {},

    init: function() {
        EventSpotActions.loadEvent(1);
    },

    onLoadEvent: function(event_id) {

        this.data.event = null;
        this.data.loadError = null;

        this.trigger(this.data);

    },

    onLoadEventCompleted: function(result) {
        this.data.title = result.title;
        this.data.body = result.body;
        this.data.loadError = result.error;

        this.trigger(this.data);

    },

    onLoadEventFailed: function() {

        this.data.loadError = 'Error occured while loading event.';

        this.trigger(this.data);

    },

    onUpdateEvent: function(event_id) {

        EventSpotActions.loadEvent(event_id);

    }

});

module.exports = EventSpotStore;