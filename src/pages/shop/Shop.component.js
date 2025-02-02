import React from "react";
import {Route} from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collectionsOverview';
import CollectionPage from '../Collection/collection';

const ShopPage = ({match}) => (
      <div className="ShopPage">
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
      </div>
)

export default ShopPage;
