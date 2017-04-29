import React from 'react';
import CropMark from './CropMark';

export default function CropMarks ({
  width = 'auto',
  height = 'auto',
  background,
  cropMarkColor,
  cropMarksVisible = true,
  border,
  children,
  style = {},
}) {

  const styles =  {
    // display: 'flex',
    position: 'relative',
    boxSizing: 'border-box',
    background,
    width,
    height,
    border,
  };
  const props = {
    color: cropMarkColor,
  };

  if (cropMarksVisible) {
    return (
      <div style={Object.assign({}, styles, style)}>
        {children}
        <CropMark { ...props } edge='topLeft' />
        <CropMark { ...props } edge='topRight' />
        <CropMark { ...props } edge='bottomLeft' />
        <CropMark { ...props } edge='bottomRight' />
      </div>
    );
  } else {
    return (
      <div style={styles}>
        {children}
      </div>
    );
  }

}
