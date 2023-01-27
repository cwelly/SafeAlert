import React from 'react';
import LiveCardList from './LiveCardList';
import './LiveCarousel.css';

function LiveCarousel(props) {
  const { card } = props;
  return (
    <div>
      <div className="Carousel">
        {card.map(data => (
          <LiveCardList data={data} />
        ))}
      </div>
    </div>
  );
}
export default LiveCarousel;