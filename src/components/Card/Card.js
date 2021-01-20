import React from 'react';
import './Card.css';
import Subtitle from '../Subtitle/Subtitle';
import Title from '../Title/Title';
import Rating from '../Rating/Rating';
import Features from '../Features/Features';

/*
{
  {
  "id": 201844,
  "name": "Super 8 by Wyndham North Bergen NJ/NYC Area",
  "thumbnailUrl": "https://exp.cdn-hotels.com/hotels/1000000/860000/856100/856099/466cd4ad_l.jpg",
  "starRating": 2,
  "urls": {},
  "address": {
    "streetAddress": "2800 Columbia Ave",
    "extendedAddress": "",
    "locality": "North Bergen",
    "postalCode": "07047",
    "region": "NJ",
    "countryName": "United States",
    "countryCode": "us",
    "obfuscate": false
  },
  "guestReviews": {
    "unformattedRating": 7.4,
    "rating": "7.4",
    "total": 824,
    "scale": 10,
    "badge": "good",
    "badgeText": "Good"
  },
  "landmarks": [
    {
      "label": "City center",
      "distance": "3.0 miles"
    },
    {
      "label": "Times Square",
      "distance": "3.0 miles"
    }
  ],
  "geoBullets": [],
  "ratePlan": {
    "price": {
      "current": "$64",
      "exactCurrent": 63.74
    },
    "features": {
      "paymentPreference": false,
      "noCCRequired": false
    }
  },
  "neighbourhood": "North Bergen",
  "deals": {},
  "messaging": {},
  "badging": {},
  "pimmsAttributes": "DoubleStamps|TESCO",
  "coordinate": {
    "lat": 40.77487,
    "lon": -74.038477
  },
  "providerType": "MULTISOURCE",
  "supplierHotelId": 856099,
  "vrBadge": "Motel",
  "isAlternative": false
}
}
*/

const Card = ({ item }) => {
    const {
        address,
        name,
        thumbnailUrl,
        guestReviews: { badgeText, rating },
        ratePlan: { features, price: { current } }
    } = item;

    return (
        <div className="Card">
            <div className="CardImageWrapper">
                <img src={thumbnailUrl} />
            </div>

            <div className="CardDescriptionWrapper">
                <Subtitle address={address} />
                <Title text={name} />
                <Rating text={badgeText} rating={rating} />
                <Features {...features} />
                <div className="Price">{current}</div>
            </div>
        </div>
    );
}

export default Card;
