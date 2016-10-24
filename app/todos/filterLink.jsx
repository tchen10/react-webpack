import React from 'react';

const FilterLink = ({
    filter,
    currentFilter,
    onFilterClick,
    children
}) => {
    if (filter === currentFilter ) {
        return <span>{children}</span>
    }
    return (
        <a href='#' onClick={e => {
            e.preventDefault();
            onFilterClick(filter);
        }}>
            {children}
        </a>
    );
};

export default FilterLink;
