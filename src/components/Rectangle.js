// /** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

const useStyles = ({ width, height, color, radius, opacity, cursorType }) => ({
  rectangle: css({
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: `${color}`,
    radius: `${radius}px`,
    opacity: `${opacity}`,
    "&:hover": {
      cursor: `${cursorType}`,
    }
  })
});

const Rectangle = (width, height, color, radius, opacity, cursorType) => {

  const styles = useStyles(width, height, color, radius, opacity, cursorType);

  return (
    <div css={styles.rectangle}></div>
  )
};

export default Rectangle;