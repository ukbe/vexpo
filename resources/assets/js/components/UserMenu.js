import React from 'react';
import { Link, IndexLink } from 'react-router';
import MenuUserExist from './MenuUserExist';
import MenuUserAbsent from './MenuUserAbsent';

var UserMenu= React.createClass({

    getInitialState: function (){
        return {
            logged_id: false,
            username: 'Ukbe Akdogan',
            user_id: 1
        }
    },

    render: function() {

        var userMenu;

        if (this.state.username != '') {
            userMenu = <MenuUserExist/>
        }
        else {
            userMenu = <MenuUserAbsent/>
        }

        return (

            <ul className="nav navbar-nav pull-right">
                <li>{userMenu}</li>
            </ul>

        )

    }

});

module.exports = UserMenu;