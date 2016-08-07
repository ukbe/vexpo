import React from 'react';
import { Link, IndexLink } from 'react-router';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import MenuUserExist from './MenuUserExist';
import MenuUserAbsent from './MenuUserAbsent';

var Navigation = React.createClass({

    getInitialState: function (){
        return {
            logged_in: true,
            username: 'Ukbe Akdogan',
            user_id: 1
        }
    },

    render: function() {

        var userMenu;

        if (this.state.logged_in) {
            userMenu = <MenuUserExist username={this.state.username}/>
        }
        else {
            userMenu = <MenuUserAbsent/>
        }

        return (

            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <IndexLink to="/" activeClassName="active" onlyActiveOnIndex="true">vExpo</IndexLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to={{ pathname: '/' }} onlyActiveOnIndex>
                            <NavItem eventKey={1}>Home</NavItem>
                        </LinkContainer>

                        <NavDropdown eventKey={2} title="Manage" id="basic-nav-dropdown">
                            <LinkContainer to={{ pathname: '/geomaps' }} onlyActiveOnIndex>
                                <NavItem eventKey={2.1}>GeoMaps</NavItem>
                            </LinkContainer>
                            <LinkContainer to={{ pathname: '/venues' }}>
                                <NavItem eventKey={2.1}>Venues</NavItem>
                            </LinkContainer>
                            <LinkContainer to={{ pathname: '/events' }}>
                                <NavItem eventKey={2.1}>Events</NavItem>
                            </LinkContainer>
                            <LinkContainer to={{ pathname: '/reservations' }}>
                                <NavItem eventKey={2.1}>Reservations</NavItem>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        {userMenu}
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        )

    }

});

module.exports = Navigation;