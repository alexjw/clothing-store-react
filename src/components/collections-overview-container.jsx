import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectIsCollectionFetching } from '../redux/selectors';
import WithSpinner from './with-spinner.jsx';
import CollectionsOverview from './collections-overview';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview);

// this is equal to:
/*
* connect(mapStateToProps)(WithSpinner(CollectionsOverview))
*/

export default CollectionsOverviewContainer;
