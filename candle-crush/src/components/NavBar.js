import React from 'react'
import {NavLink} from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Badge } from '@material-ui/core';

const NavBar = (props) => {

    return(
      <div id="navbar">
        <NavLink to='/candles' >Products</NavLink>

        {props.currentUser === null ? null : 
          props.currentUser.user_type === 'vendor' ? 
            <NavLink to='/candles/create'>Create a Candle</NavLink> 
            :
            null
        }
        <NavLink to='/cart'>
          <Badge badgeContent={props.cartLength} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </NavLink>
        {props.currentUser === null ? null : <NavLink to='/profile'>
          <AccountCircleIcon />
        </NavLink>}

        {props.currentUser === null ?
          <NavLink to='/signup'>Sign Up</NavLink>
          : 
          null
        }

        {props.currentUser === null ? 
          <NavLink to='/login'>Login</NavLink>
          : 
          <a href='/' onClick={props.logoutHandler}>Logout</a>
        }
      </div>
    )
}

export default NavBar