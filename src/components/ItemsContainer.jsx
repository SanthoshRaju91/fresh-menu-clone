import React from 'react';
import Item from './Item';

const ItemsContainer = props => {
  return (
    <div className="container-fluid">
      <div className="row">
        {props.items.map(current => {
          return (
            <div key={current.id} className="col-md-4">
              <Item item={current} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemsContainer;
