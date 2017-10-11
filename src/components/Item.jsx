import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addItemToCart } from 'Redux/action-types/cart';

const ItemWrapper = styled.div`
  margin: 10px;

  img {
    width: 375px;
    height: 250px;
  }

  .card-title {
    font-size: 18px;
    line-height: 2;
    color: #343534;
    margin: 0 0 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 600;
  }

  .card-text {
    font-size: .7em;
    color: #6c7a89;
    font-style: italic;
  }

  .product-info {
    float: left;
  }

  .btn-custom {
    float: right;
    padding: 5px;
    background-color: #d64541;
    border-color: #d64541;
    color: white !important;
    font-size: .8em;
    font-weight: 300;
    letter-spacing: .5px;
    cursor: pointer;

    &:hover {
      background-color: #c0392b;
    }
  }
`;

const ProductWrapper = styled.div`
  .fa-dot-circle-o {
    color: ${props => (props.food == 'veg' ? 'green' : 'red')};
  }

  .type {
    margin-left: 5px;
    font-size: .8em;
    font-weight: 300;
  }
  .price {
    letter-spacing: 1px;
    font-size: .9em;
    font-weight: 300;
  }
`;

const Item = props => {
  return (
    <ItemWrapper className="card">
      <img className="card-img-top" src={props.item.img} alt="Card image cap" />
      <div className="card-block">
        <h4 className="card-title">
          {props.item.title}
        </h4>
        <p className="card-text">
          {props.item.shortDesc}
        </p>
        <div>
          <ProductWrapper className="product-info" food={props.item.type}>
            <i className="fa fa-dot-circle-o" aria-hidden="true" />
            <span className="type">
              {props.item.type === 'veg' ? 'Veg' : 'Non Veg'}
            </span>
            <br />
            <span className="price">
              {props.item.price}
            </span>
          </ProductWrapper>
          <button
            className="btn btn-primary btn-custom"
            onClick={() => props.addToCart(props.item)}>
            Add to cart
          </button>
        </div>
      </div>
    </ItemWrapper>
  );
};

const mapDispatchToProps = dispatch => ({
  addToCart(item) {
    dispatch(addItemToCart(item));
  }
});

export default connect(state => state, mapDispatchToProps)(Item);
