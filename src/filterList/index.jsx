import React, {Component, PropTypes} from 'react';
import FilterLink from '../filterLink/container'

export const FILTER_SHOW_ALL = 'SHOW_ALL'
export const FILTER_SHOW_COMPLETED = 'SHOW_COMPLETED'
export const FILTER_SHOW_ACTIVE = 'SHOW_ACTIVE'

const FilterList = () => (
  <p>
    Show:
    {" "}
    <FilterLink filter={FILTER_SHOW_ALL}>
      All
    </FilterLink>
    {", "}
    <FilterLink filter={FILTER_SHOW_ACTIVE}>
      Active
    </FilterLink>
    {", "}
    <FilterLink filter={FILTER_SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </p>
)

export default FilterList
