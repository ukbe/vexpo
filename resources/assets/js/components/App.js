import React from 'react';
import PageHeader from './PageHeader';
import PageContent from './PageContent';
import PageFooter from './PageFooter';

var App = React.createClass({

    render: function() {

        return (
            <div className="app-container">

                <PageHeader/>

                <PageContent children={this.props.children }/>

                <PageFooter/>

            </div>
        )
    }

});

module.exports = App;