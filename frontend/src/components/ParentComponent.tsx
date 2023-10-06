import React from 'react';
import Header from './Header';
import CreateProduct from './CreateProduct';

function ParentComponent() {
  return (
    <div>
      <Header />
      <CreateProduct />
    </div>
  );
}

export default ParentComponent;
