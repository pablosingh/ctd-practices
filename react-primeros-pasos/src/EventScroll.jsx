import React from 'react';

function EventScroll() {
  const handleScroll = (event) => {
    console.log(event.target.scrollTop);
  };
  const style = {
    height: '200px',
    overflowY: 'scroll',
  };
  return (
    <>
      <div style={style} onScroll={handleScroll}>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus tempore sunt dignissimos? Praesentium non illo minima modi consectetur dolorem unde optio, maxime delectus. Deleniti consequatur magnam sunt provident, saepe porro?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus tempore sunt dignissimos? Praesentium non illo minima modi consectetur dolorem unde optio, maxime delectus. Deleniti consequatur magnam sunt provident, saepe porro?</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus tempore sunt dignissimos? Praesentium non illo minima modi consectetur dolorem unde optio, maxime delectus. Deleniti consequatur magnam sunt provident, saepe porro?</p>
      </div>
    </>
  );
}

export default EventScroll;
