import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  deleteItemFromCart,
  incrementItemQuantity,
  decrementItemQuantity
} from 'Redux/action-types/cart';
import Lists from '../components/Lists';
import CheckoutForm from '../components/checkout-form';

const Wrapper = styled.div`
  margin-top: 40px;

  .lead {
    color: #95a5a6;
    font-size: 1em;
    letter-spacing: 1px;
    margin-left: 30px;
  }

  .menu-btn {
    margin-left: 50px;
  }
`;

const Checkout = props => {
  return (
    <Wrapper className="container-fluid">
      <div className="row">
        <div className="col-md-8">
          <p className="lead">
            Your cart items - {props.cart.count}
            {props.cart.count === 0 &&
              <Link to="/" className="btn btn-primary btn-sm menu-btn">
                Go to menu
              </Link>}
          </p>

          {props.cart.items.map(current =>
            <Lists
              item={current}
              key={current.id}
              incrementQuantity={props.incrementQuantity}
              decrementQuantity={props.decrementQuantity}
              deleteItem={props.deleteItem}
            />
          )}
        </div>
        <div className="col-md-4">
          <CheckoutForm />
        </div>
      </div>
    </Wrapper>
  );
};

const mapStateToProps = state => ({ cart: state.cart });

const mapDispatchToProps = dispatch => ({
  deleteItem(item) {
    dispatch(deleteItemFromCart(item));
  },
  decrementQuantity(item) {
    dispatch(decrementItemQuantity(item));
  },
  incrementQuantity(item) {
    dispatch(incrementItemQuantity(item));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
