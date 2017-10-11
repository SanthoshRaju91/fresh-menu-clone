import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #ecf0f1;
  color: #6c7a89;

  h5 {
    letter-spacing: 2px;
    font-size: 1em;
  }

  label {
    font-size: .8em;
    font-weight: 300;
  }

  .bill-section {
    span {
      font-size: .9em;
      font-weight: 300;
      letter-spacing: 1px;
    }
  }
`;

const CheckoutForm = props => {
  return (
    <Wrapper className="card">
      <div className="card-block">
        <h5 className="text-center">Checkout</h5>

        <hr />
        <br />
        <form>
          <div className="form-group row">
            <label for="fullName" className="col-4 col-form-label">
              Full Name
            </label>
            <div className="col-8">
              <input className="form-control" type="text" />
            </div>
          </div>

          <div className="form-group row">
            <label for="email" className="col-4 col-form-label">
              Email address
            </label>
            <div className="col-8">
              <input className="form-control" type="text" />
            </div>
          </div>

          <div className="form-group row">
            <label for="number" className="col-4 col-form-label">
              Mobile Number
            </label>
            <div className="col-8">
              <input className="form-control" type="text" />
            </div>
          </div>
        </form>

        <hr />
        <br />

        <div className="bill-section">
          <div className="row">
            <div className="col-md-6">
              <span>Sub Total</span>
            </div>
            <div className="col-md-1"> - </div>
            <div className="col-md-5">
              <span>$100</span>
            </div>
          </div>

          <br />
          <div className="row">
            <div className="col-md-6">
              <span>Shipping</span>
            </div>
            <div className="col-md-1"> - </div>
            <div className="col-md-5">
              <span>$1</span>
            </div>
          </div>
          <hr />

          <div className="row">
            <div className="col-md-6">
              <span>Total</span>
            </div>
            <div className="col-md-1"> - </div>
            <div className="col-md-5">
              <span>$101</span>
            </div>
          </div>
        </div>

        <br />
        <button className="btn btn-success btn-block">Place order</button>
      </div>
    </Wrapper>
  );
};

export default CheckoutForm;
