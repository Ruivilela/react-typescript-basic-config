import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);

const req = require.context('../src', true, /stories\.tsx?$/);
const loadStories = () => req.keys().forEach(req);

configure(loadStories, module);
