import React, {Component, PropTypes} from 'react';
import FilterLinkContainer from '../FilterLinkContainer'
import {
    FILTER_SHOW_ALL,
    FILTER_SHOW_COMPLETED,
    FILTER_SHOW_ACTIVE
} from '../../actions/visibilityFilter';


const FilterList = () => (
  <p>Show:
    {", "}
    <FilterLinkContainer filter={FILTER_SHOW_ALL}>
      All
    </FilterLinkContainer>
    {", "}
    <FilterLinkContainer filter={FILTER_SHOW_ACTIVE}>
      Active
    </FilterLinkContainer>
    {", "}
    <FilterLinkContainer filter={FILTER_SHOW_COMPLETED}>
      Completed
    </FilterLinkContainer>
  </p>
)

export default FilterList
