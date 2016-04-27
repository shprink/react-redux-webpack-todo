import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../actions/visibilityFilter'
import Link from '../Link'

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

const FilterLinkContainer = connect( // create a container component
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLinkContainer
