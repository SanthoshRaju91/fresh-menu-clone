import React from 'react';
import styled from 'styled-components';

const ListWrapper = styled.div`
  margin-bottom: 20px;

  .title {
    font-size: .9em;
    color: #6c7a89;
    letter-spacing: 1px;
  }

  .desc {
    font-size: .8em;
    color: #6c7a89;
    letter-spacing: .5px;
  }

  .actions {
    margin-top: 25px;

    .fa {
      font-weight: 300;
      padding: 10px;
      color: #c0392b;
      cursor: pointer;
    }
    h4 {
      font-size: .9em;
      color: #6c7a89;
    }

    h5 {
      font-size: .8em;
      color: #6c7a89;
      letter-spacing: 1px;
    }

    .btn-del {
      margin-top: 20px;

      padding: 5px 10px;
      font-size: .8em;
      font-weight: 300;
      letter-spacing: 1px;
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
    float: right;
    margin-right: 40px;
    letter-spacing: 1px;
    font-size: .9em;
    font-weight: bolder;
  }
`;

const List = props => {
  return (
    <ListWrapper className="card">
      <div className="card-block">
        <div className="row">
          <div className="col-md-2">
            <img src={props.item.img} alt="Img" width="80" height="80" />
          </div>
          <div className="col-md-8">
            <h5 className="title">
              {props.item.title}
            </h5>
            <hr />
            <p className="desc">
              {props.item.desc}
            </p>

            <span>
              <ProductWrapper className="product-info" food={props.item.type}>
                <i className="fa fa-dot-circle-o" aria-hidden="true" />
                <span className="type">
                  {props.item.type === 'veg' ? 'Veg' : 'Non Veg'}
                </span>
                <span className="price">
                  {props.item.price}
                </span>
              </ProductWrapper>
            </span>
          </div>
          <div className="col-md-2 actions">
            <h4 className="text-center">
              <i
                className="fa fa-plus"
                aria-hidden="true"
                onClick={() => props.incrementQuantity(props.item)}
              />
              {props.item.quantity}
              <i
                className="fa fa-minus"
                aria-hidden="true"
                onClick={() => props.decrementQuantity(props.item)}
              />
            </h4>
            <h5 className="text-center">Quantity</h5>

            <div className="text-center">
              <button
                className="btn btn-danger btn-del"
                onClick={() => props.deleteItem(props.item)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </ListWrapper>
  );
};

export default List;
