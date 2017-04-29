import React from 'react';
const style = {
  "display": "inline-block",
  "fontWeight": "400",
  "lineHeight": "1.25",
  "textAlign": "center",
  "whiteSpace": "nowrap",
  "verticalAlign": "middle",
  "userSelect": "none",
  "border": "1px solid transparent",
  "padding": ".5rem 1rem",
  "fontSize": "1rem",
  "borderRadius": ".25rem",
  "transition": "all .2s ease-in-out",
  "color": "#fff",

  "backgroundColor": "#0275d8",
  "borderColor": "#0275d8",

  outline: 'none',
};

const styleActive = {
  "backgroundColor": "#025aa5",
  "borderColor": "#01549b"
}

export default function Button (props) {
  return (
    <button onClick={props.onClick} style={Object.assign({}, style, props.active ? styleActive : {}, props.style || {},)}>
      {props.children}
    </button>
  )
}
