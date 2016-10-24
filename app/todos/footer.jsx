import React from 'react';
import FilterLink from './filterLink.jsx';

const Footer = ({
    visibilityFilter,
    onFilterClick
}) => (
    <p>
        Show:
        {''} <FilterLink filter='SHOW_ALL' visibilityFilter={visibilityFilter} onFilterClick={onFilterClick}>All</FilterLink>
        {''} <FilterLink filter='SHOW_ACTIVE' visibilityFilter={visibilityFilter} onFilterClick={onFilterClick}>Active</FilterLink>
        {''} <FilterLink filter='SHOW_COMPLETED' visibilityFilter={visibilityFilter} onFilterClick={onFilterClick}>Completed</FilterLink>
    </p>
);

export default Footer;
