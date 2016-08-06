import React from 'react';
import { Link, IndexLink } from 'react-router';

var Navigation = React.createClass({

    render: function() {

        return (

            <ul className="nav navbar-nav">
                <li><IndexLink to="/" activeClassName="active" onlyActiveOnIndex="true">Home</IndexLink></li>
                <li><Link to="/manage" activeClassName="active">Manage</Link></li>
            </ul>

        )

    }

});

module.exports = Navigation;