import React from 'react'

import data from '../imagedata'
import SingleImage from '../pages/SingleImage';

const ImageCards = () => {
  return (
    <div>
      <div className="mt-5 mx-4 mb-5 ">
        <div className="row">
          {data.map((item, i) => (
            <SingleImage key={i} photo={item.photo} description={item.description} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageCards;


