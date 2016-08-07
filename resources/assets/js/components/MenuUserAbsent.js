import React from 'react';
import { Link, IndexLink } from 'react-router';
import { NavItem } from 'react-bootstrap';

var MenuUserAbsent= React.createClass({

    render: function() {

        return (

            <NavItem eventKey={1} href="#">Sign in</NavItem>
        )

    }

});

module.exports = MenuUserAbsent;