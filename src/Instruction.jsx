import React, { Component } from 'react';
import addons from '@storybook/addons';
import CropMarks from './CropMarks';
import config from './config';

const __html = `
import { storiesOf } from "@storybook/react";
import utils from "react-storybook-addon-utils";

storiesOf("First Component", module)
  .addDecorator(utils(${JSON.stringify(config, null, 4)}))
  .add("First Button", () => &lt;button&gt;Click me&lt;/button&gt;)
  ;
`
// `.trim();

export default () => (
  <div style={{
    padding: '20px',
    fontFamily: "-apple-system,'.SFNSText-Regular', 'San Francisco', Roboto, 'Segoe UI', 'Helvetica Neue', 'Lucida Grande', sans-serif",
    fontSize: '14px',
  }}>
    <h5 style={{ fontSize: '16px' }}>Setup Instructions</h5>
    <p>Please add the background decorator definition to your story.
    The background decorate accepts an array of items, which should include a
    name for your color (preferably the css class name) and the corresponding color / image value.</p>
    <p>Below is an example of how to add the background decorator to your story definition.</p>
    <pre
      style={{
        padding: '30px',
        display: 'block',
        background: 'rgba(19,19,19,0.9)',
        color: 'rgba(255,255,255,0.95)',
        marginTop: '15px',
        lineHeight: '1.75em',
      }}
    ><code dangerouslySetInnerHTML={{ __html }} /></pre>
  </div>
);
