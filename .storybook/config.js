import { configure, addDecorator } from '@kadira/storybook';


const req = require.context('../src/', true, /\.story.jsx$/);
configure(() => { req.keys().forEach(req) }, module);
