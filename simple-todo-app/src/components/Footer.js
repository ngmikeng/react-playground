import React from 'react';
import Link from './Link';

const Footer = ({filter, onClickFilter}) => (
  <div>
    Show:
    <Link active={filter === 'all'} onClick={(e) => onClickFilter('all')}>All</Link>
    <Link active={filter === 'active'} onClick={(e) => onClickFilter('active')}>Active</Link>
    <Link active={filter === 'completed'} onClick={(e) => onClickFilter('completed')}>Completed</Link>
  </div>
);

export default Footer;
