import React from 'react';

const Link = ({active, children, onClick}) => (
  <button disabled={active} onClick={onClick} style={{marginLeft: '5px'}}>
    {children}
  </button>
);

export default Link;
