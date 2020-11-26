// /** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

const useStyles = () => ({
  // rectangle: css({
  //   width: `${width}px`,
  //   height: `${height}px`,
  //   backgroundColor: `${color}`,
  //   radius: `${radius}px`,
  //   opacity: `${opacity}`,
  //   "&:hover": {
  //     cursor: `${cursorType}`,
  //   }
  // })
});

const RectanglesContainer = (rectangleData) => {

  const styles = useStyles();

  const rectangles = () => {
    // rectangleData.map(data => {
    //   console.log("Data", data);
    //   // return (
    //   //   <Rectangle />
    //   // );
    //   return;
    // }) 
    rectangleData
      .then(res => {
        console.log("Rectangle data response", res);
      })
      .catch(err => {
        console.log(err);
      })
  };

  return (
    <div>
      {rectangles()}
    </div>
  )
};

export default RectanglesContainer;