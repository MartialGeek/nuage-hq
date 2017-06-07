import React from 'react';
import { NavLink } from 'react-router-dom';

const FilterLink = ({ filter, children }) => (
  <NavLink
    to={filter === 'all' ? '' : `/${filter}`}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
    isActive={(match, location) => {
      if (match !== null) {
        if (match.params.filter === undefined && match.url === '/') {
          return true;
        }

        return match.url === match.path
      }

      return false;
    }}
  >
    {children}
  </NavLink>
);

export default FilterLink;
