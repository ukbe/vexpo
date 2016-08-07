import React from 'react';
import { MenuItem, NavDropdown } from 'react-bootstrap';

var MenuUserExist= React.createClass({

    render: function() {

        return (

            <NavDropdown eventKey={3} title={this.props.username} id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Sign out</MenuItem>
            </NavDropdown>

        )

    }

});

module.exports = MenuUserExist;