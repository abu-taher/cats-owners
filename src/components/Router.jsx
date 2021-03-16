import React from 'react';
import {
  HashRouter,
  Route,
  Switch,
} from 'react-router-dom';

import App from '../App';
import MoreInfo from './more-info/more-info.component';
import NotFoundPage from './not-found-page/not-found-page.component';

const Router = () => (
  <HashRouter>
    <Switch>
      <Route path="/cats-owners" component={App} exact/>
      <Route path="/cats-owner-info/:id" component={MoreInfo}/>
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </HashRouter>
);

export default Router;