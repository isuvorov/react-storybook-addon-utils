import React, { Component } from 'react';
import UtilsDecorator from './UtilsDecorator';

export default config => story => (
  <UtilsDecorator story={story} config={config} />
);
