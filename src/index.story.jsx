import React from 'react'; // tslint:disable-line
import { storiesOf } from '@kadira/storybook';
// import centered from '@kadira/react-storybook-decorator-centered';

import config from './config';
import backgrounds from './index';

storiesOf('First Component', module)
  // .addDecorator(centered)
  .add('First Button', () => <button>Click me</button>)
  ;


storiesOf('Second Component', module)
//   // .addDecorator(centered)
  .addDecorator(backgrounds(config))
  .add('Second Button', () => <button>Click me</button> )
  .add('Div', () => <div style={{width: 100, border: '1px red solid'}}>Click me</div> )
//   ;
