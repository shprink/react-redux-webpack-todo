import { connect } from 'react-redux'
import { setVisibilityFilter } from '../todoList/actions'
import Link from '../link/index'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect( // create a container component
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink
