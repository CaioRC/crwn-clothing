import React from "react";

import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import  { createStructuredSelector} from 'reselect'

import "./Header.styles.scss";

import CartIcon from "../cartIcon/cartIcon";
import CartDropdown from "../cartDropdown/cartDropdown";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { selectCartHidden} from '../../redux/cart/cart.selectors'
import { selectCurrentUser} from '../../redux/user/userSelector'

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option">CONTACT</Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
