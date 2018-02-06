import { configure, addDecorator } from '@storybook/react';


const req = require.context('../src/', true, /\.story.jsx$/);
configure(() => { req.keys().forEach(req) }, module);
