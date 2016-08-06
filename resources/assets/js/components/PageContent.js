import React from 'react';

var PageContent = React.createClass({

    render: function() {

        return (

            <div className="container content">

                {this.props.children }

            </div>

        )

    }

});

module.exports = PageContent;