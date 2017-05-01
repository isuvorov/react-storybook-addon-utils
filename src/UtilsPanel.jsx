import React, { Component } from 'react';
import merge from 'deepmerge';
import Swatch from './Swatch';
import ButtonGroup from './ButtonGroup';
import Button from './Button';
import Instruction from './Instruction';
import KEY from './key'

function getConfig(config) {
  return config;
}

function getStateFromConfig(config = {}) {
  const controls = config.controls || [];
  const state = {
    controls: {},
  };
  controls.forEach((control, key) => {
    const items = (control.items || []).map((i, key) => ({...i, key}));
    const item = items.filter(i => i.enable)[0] || items[0];
    if (!item) return;
    state.controls[key] = item.key;
  })
  // console.log({config, state});
  return state;
}

export default class UtilsPanel extends Component {

  state = {};

  constructor(props) {
    super(props);

    this.props.channel.on(KEY + '-set', (rawConfig) => {
      const config = getConfig(rawConfig);
      // console.log(this.getQueryParam(KEY), getStateFromConfig(config));
      const state = merge(getStateFromConfig(config), this.getQueryParam(KEY));
      // console.log({state});
      this.setGlobalState({ config, ...state });
    });

    this.props.channel.on(KEY + '-unset', () => {
      this.resetGlobalState({});
    });
  }


  getQueryParam() {
    const state = this.props.api.getQueryParam(KEY);
    if (!state) return {};
    return JSON.parse(state);
  }
  setQueryParam() {
    const state = Object.assign({}, this.state, {config: undefined});
    this.props.api.setQueryParams({
      [KEY]: JSON.stringify(state),
    });
  }

  resetGlobalState(state) {
    console.log('resetGlobalState');
  }
  setGlobalState(state) {
    this.setState(state, () => {
      this.props.channel.emit(KEY, this.state);
      this.setQueryParam()
    })
  }



  onClick(key, val) {
    return (e) => {
      // console.log('onClick', key, val);
      const controls = Object.assign( {},  this.state.controls, {[key]: val})
      this.setGlobalState({controls})
    }
  }

  renderItems(control, superkey) {
    const items = control.items || [];
    const controlState = this.state.controls || {};
    if (control.type === 'bg') {
      return (
        <div>
          { items.filter(i => i).map( (item, key) => (
            <div key={key} style={{ display: 'inline-block', padding: '5px' }}>
              <Swatch {...item} onClick={this.onClick(superkey, key)} active={controlState[superkey] === key} />
            </div>
          ))}
        </div>
      )
    }
    return <ButtonGroup>
      { items.map( (item, key) => (
        <Button key={key} onClick={this.onClick(superkey, key)} active={controlState[superkey] === key}>
          {item.name}
        </Button>
      ))}
    </ButtonGroup>

  }

  render() {
    const config = this.state.config;

    if (!config) return <Instruction />;

    return (
      <div style={{ display: 'inline-block', padding: '15px' }}>
        {(config.controls || []).map((control, key) => (
          <div key={key}>
            <h2>{control.name || 'Control'}:</h2>
            {this.renderItems(control, key)}
          </div>
        ))}
      </div>
    );
  }
}
