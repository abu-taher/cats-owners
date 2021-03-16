import React from 'react';
import { Link } from 'react-router-dom';
import './card.styles.css';

export const Card = ({ cat }) => {
  return(
    <div className="card-container">
      <Link to={{ 
        pathname: `/cats-owner-info/${cat.id}`, 
        state: {
          moreInfo: cat
        }
      }}>
        <img src={`https://robohash.org/${cat.id}?set=set4&size=150x150`} alt="cat"/>
        <h2>{cat.name}</h2>
        <p>{cat.email}</p>
      </Link>
    </div>
  );
}