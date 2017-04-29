import React from 'react';

export default function CropMark({
  edge,
  length,
  offset = 5,
  color = 'rgba(0, 0, 0, 0.15)',
  size = 20,
}) {
  let base;
  let xAxis;
  let yAxis;
  // const s = -(size - 1);
  const s = -(size - 1);
  switch (edge) {
    case 'topLeft':
      base = {
        top: s,
        right: 'auto',
        bottom: 'auto',
        left: s
      };
      xAxis = {
        top: 'null',
        right: offset,
        bottom: 0,
        left: 0,
      };
      yAxis = {
        top: 0,
        right: 0,
        bottom: offset,
        left: 'auto',
        // top: 'null',
        // right: 0,
        // bottom: offset,
        // left: 'auto',
      };
      break;

    case 'topRight':
      base = {
        top: s,
        right: s,
        bottom: 'auto',
        left: 'auto',
      };
      xAxis = {
        top: 'auto',
        right: 0,
        bottom: 0,
        left: offset,
      };
      yAxis = {
        top: 0,
        right: 'auto',
        bottom: offset,
        left: 0,
      };
      break;

    case 'bottomLeft':
      base = {
        top: 'auto',
        right: 'auto',
        bottom: s,
        left: s,
      };
      xAxis = {
        top: 0,
        right: offset,
        bottom: 'auto',
        left: 0,
      };
      yAxis = {
        top: offset,
        right: 0,
        bottom: 0,
        left: 'auto',
      };
      break;

    case 'bottomRight':
      base = {
        top: 'null',
        right: s,
        bottom: s,
        left: 'auto',
      };
      xAxis = {
        top: 0,
        right: 0,
        bottom: 'auto',
        left: offset,
      };
      yAxis = {
        top: offset,
        right: 'auto',
        bottom: 0,
        left: 0,
      };
      break;

    default: // Ignore.
  }

  base.position = 'absolute';
  xAxis.position = 'absolute';
  yAxis.position = 'absolute';
  base.width = size;
  base.height = size;
  xAxis.borderBottom = `solid 1px ${ color }`;
  yAxis.borderRight = `solid 1px ${ color }`;
  const styles = { base, xAxis, yAxis };


  let el;
  if (size > 0) {
    el = (
      <div style={ styles.base }>
        <div style={ styles.xAxis } />
        <div style={ styles.yAxis } />
      </div>
    );
  }
  return el;

}
