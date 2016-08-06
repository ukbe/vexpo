import React from 'react';
import { Link, IndexLink } from 'react-router';
import Navigation from './Navigation';
import UserMenu from './UserMenu';

var PageHeader = React.createClass({

    render: function() {

        return (

            <nav className="navbar navbar-default navbar-static-top">

                <div className="container">
                    <div className="navbar-header">
                        <IndexLink to="/" className="navbar-brand" activeClassName="active" onlyActiveOnIndex="true">vExpo</IndexLink>
                    </div>

                    <div className="navbar-collapse collapse">

                        <Navigation/>


                        <UserMenu/>

                    </div>

                </div>

            </nav>

        )

    }

});

module.exports = PageHeader;