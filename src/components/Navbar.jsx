import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const NavWrapper = styled.nav`
  background-color: white;
  box-shadow: 0px 0px 3px black;
  margin-bottom: 20px;

  .navbar-brand {
    img {
      margin-left: 20px;
    }

    .side-tag {
      color: #dadfe1;
      font-size: .7em;
      font-style: italic;
      margin-left: 10px;
    }
  }

  .cart {
    position: absolute;
    right: 5em;
    cursor: pointer;

    i {
      font-size: 2em;
      color: #d24d57;
      opacity: .9;
    }

    .badge {
      font-weight: 300;
      background-color: #d24d57;
    }
  }
`;

const Navbar = props => {
  return (
    <NavWrapper className="navbar navbar-toggleable-md navbar-light bg-faded sticky-top">
      <Link className="navbar-brand" to="/">
        <img
          src="https://i.pinimg.com/originals/3c/b7/46/3cb7466c0a25526b0ff5eb13be201179.png"
          width="80"
          height="60"
          alt=""
        />
        <span className="side-tag">Menu's to die for</span>
      </Link>

      <form className="form-inline my-2 my-lg-0">
        <Link className="cart" to="checkout">
          <i className="fa fa-shopping-cart" aria-hidden="true" />

          {props.cart.count > 0 &&
            <span className="badge badge-default badge-pill">
              {props.cart.count}
            </span>}
        </Link>
      </form>
    </NavWrapper>
  );
};

const mapStateToProps = state => ({ cart: state.cart });

export default connect(mapStateToProps)(Navbar);
