import React from 'react'; // tslint:disable-line
import addons from '@kadira/storybook-addons';

import UtilsPanel from './UtilsPanel';

const ADDON_ID = 'storybook-addon-utils';
const PANEL_ID = `${ADDON_ID}/utils-panel`;

addons.register(ADDON_ID, (api) => {
  const channel = addons.getChannel();
  addons.addPanel(PANEL_ID, {
    title: 'Utils',
    render: () => (
      <UtilsPanel channel={channel} api={api} />
    ),
  });
});
