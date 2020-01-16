import React from 'react';
import {connect} from 'react-redux';
import { createStructuredSelector} from 'reselect'

import PreviewCollection from '../preview-collection/PreviewCollection'
import {selectCollectionsForPreview} from '../../redux/shop/shopSelector'

import './collectionsOverview.styles.scss';

const CollectionsOverview = ({collections}) =>(
    <div className = 'collections-overview'>
        {collections.map(({id, ...otherCollectionsProps}) => (
        <PreviewCollection key={id} {...otherCollectionsProps}/>
        ))}
    </div>
);

const matStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
  })
  
export default connect(matStateToProps)(CollectionsOverview);