import React from 'react';
import SadCat from './sad-cat.png';
import './not-found-page.css';

const NotFoundPage = () => (
  <div className="not-found-container">
    <h1>This page is not exist</h1>
    <img src={SadCat} alt="sad cat"/>
  </div>
);

export default NotFoundPage;