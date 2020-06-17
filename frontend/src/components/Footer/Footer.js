import React from 'react';
import { NavLink } from 'react-router-dom';

import AuthContext from '../../context/auth-context';
import './Footer.css';

const footer = props => (
  <AuthContext.Consumer>
    {context => {
      return (
        <footer className ="footer">
         <p>Made with ❤ for AN by Neeraj | AbilityNet.org.uk</p>
        </footer>
      );
    }}
  </AuthContext.Consumer>
);

export default footer;
