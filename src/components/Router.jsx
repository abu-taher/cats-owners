import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import App from '../App';
import MoreInfo from './more-info/more-info.component';
import NotFoundPage from './not-found-page/not-found-page.component';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/cats-owners" component={App} exact/>
      <Route path="/cats-owner-info/:id" component={MoreInfo}/>
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default Router;