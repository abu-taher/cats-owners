import React from 'react';
import { Link } from 'react-router-dom';
import './more-info.styles.css';

const MoreInfo = ({ location }) => {
  const { moreInfo } = location.state;
  console.log(moreInfo);

  return (
    <>
      <div className="more-info-container">
        
        <img src={`https://robohash.org/${moreInfo.id}?set=set4&size=150x150`} alt="cat"/>
        <p><strong>Name:</strong> {moreInfo.name}</p>
        <p><strong>Email:</strong> {moreInfo.email}</p>
        <p><strong>Website:</strong> {moreInfo.website}</p>
        <p><strong>Company:</strong> {moreInfo.company.name}</p>
        <p><strong>Address:</strong></p>
          <ul>
            <li><strong>City:</strong> {moreInfo.address.city}</li>
            <li><strong>Street:</strong> {moreInfo.address.street}</li>
            <li><strong>Suite:</strong> {moreInfo.address.suite}</li>
            <li><strong>Zip-Code:</strong> {moreInfo.address.zipcode}</li>
          </ul>
      </div>

      <button>
        <Link to={{ pathname: '/' }}>
          Back to our cats 🐱
        </Link>
      </button>
    </>
  );
}

export default MoreInfo;