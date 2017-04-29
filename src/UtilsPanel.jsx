import React, { Component } from 'react';
import Swatch from './Swatch';
import ButtonGroup from './ButtonGroup';
import Button from './Button';
import assign from 'object-assign';

const style = {
  font: {
    fontFamily: "-apple-system,'.SFNSText-Regular', 'San Francisco', Roboto, 'Segoe UI', 'Helvetica Neue', 'Lucida Grande', sans-serif",
    fontSize: '14px',
  },
};

const BackgroundDetail = {
  name: 'default',
  value: 'transparent',
};

const __html = `
import { storiesOf } from "@kadira/storybook";
import backgrounds from "react-storybook-addon-backgrounds";

storiesOf("First Component", module)
  .addDecorator(backgrounds([
    { name: "twitter", value: "#00aced" },
    { name: "facebook", value: "#3b5998" },
  ]))
  .add("First Button", () => &lt;button&gt;Click me&lt;/button&gt;)
  ;
`
// `.trim();

const Instructions = () => (
  <div style={assign({ padding: '20px' }, style.font)}>
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

import KEY from './key'

export default class UtilsPanel extends Component {

  state = {};

  constructor(props) {
    super(props);

    this.props.channel.on(KEY + '-set', (config) => {
      const state = this.getQueryParam(KEY);
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

    if (!config) return <Instructions />;

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
