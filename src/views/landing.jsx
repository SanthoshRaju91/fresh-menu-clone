import React from 'react';
import ItemsContainer from '../components/ItemsContainer';

const Landing = props => {
  return (
    <div>
      <ItemsContainer items={props.items} />
    </div>
  );
};

export default Landing;
