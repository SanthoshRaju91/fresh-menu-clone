import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { fetchItemsAPI } from 'Redux/action-types/items';

import Navbar from './components/Navbar';
import Landing from './views/landing';
import Checkout from './views/checkout';

class App extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />

          <Switch>
            <Route
              exact
              path="/"
              render={routeProps =>
                <Landing {...routeProps} items={this.props.items} />}
            />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({ items: state.items });

const mapDispatchToProps = dispatch => ({
  fetchItems() {
    dispatch(fetchItemsAPI());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
