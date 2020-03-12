import React from 'react';
import Banner from '../Banner/Banner';


const Pages = props => {
    
    return (
      <div>
          <Banner bannerName={props.match.params.slug} />
      </div>
    );
  };

export default Pages;