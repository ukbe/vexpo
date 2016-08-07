import React from 'react';
import Navigation from './Navigation';
import PageContent from './PageContent';
import PageFooter from './PageFooter';

var App = React.createClass({

    render: function() {

        return (
            <div className="app-container">

                <Navigation/>

                <PageContent children={this.props.children }/>

                <PageFooter/>

            </div>
        )
    }

});

module.exports = App;