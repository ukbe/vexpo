import React from 'react';
import { Link, IndexLink } from 'react-router';

var MenuUserExist= React.createClass({

    getInitialState: function (){
        return {
            logged_id: false,
            username: 'Ukbe Akdogan'
        }
    },

    render: function() {

        return (

            <div className="btn-group">
                <button type="button" className="btn btn-default dropdown-toggle navbar-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.state.username} <span className="caret"></span>
                </button>
                <ul className="dropdown-menu">
                    <li><Link to="/logout" activeClassName="active">Logout</Link></li>
                    <li><Link to="/" activeClassName="active">Change Password</Link></li>
                </ul>
            </div>

        )

    }

});

module.exports = MenuUserExist;