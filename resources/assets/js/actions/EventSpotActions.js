import Reflux from 'reflux';
import RefluxPromise from 'reflux-promise';
Reflux.use(RefluxPromise(window.Promise));
import $ from 'jquery';

var EventSpotActions = Reflux.createActions({
    'loadEvent': { children: ['completed', 'failed']},
    'updateEvent': {}
});

EventSpotActions.loadEvent.listenAndPromise(function(event_id){
    return $.ajax({
        type: "GET",
        dataType: 'json',
        url: '/event/'+event_id
    });
});

module.exports = EventSpotActions;