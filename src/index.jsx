import React, { Component } from 'react';
import addons from '@kadira/storybook-addons';
import assign from 'object-assign';
import CropMarks from './CropMarks';

const style = {
  wrapper: {
    overflow: 'scroll',
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    transition: 'background 0.25s ease-in-out',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    background: 'transparent',
  },
};

import config from './config';

import KEY from './key'

export class UtilsDecorator extends Component {


  state = {  };

  constructor(props) {
    super(props);

    // A channel is explicitly passed in for testing
    if (this.props.channel) {
      this.channel = this.props.channel;
    } else {
      this.channel = addons.getChannel();
    }

    this.story = this.props.story();
  }

  componentWillMount() {
    this.channel.on(KEY, this.onChange);
    this.channel.emit(KEY + '-set', this.props.config);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.story !== this.props.story) {
      this.story = nextProps.story();
    }
  }

  componentWillUnmount() {
    this.channel.removeListener(KEY, this.onChange);
    this.channel.emit(KEY + '-unset');
  }

  onChange = state => this.setState(state)

  render() {
    const config = this.props.config;
    const controls = this.state.controls || {};

    const styles = {
      marks: config.default.marks,
      root: Object.assign({}, config.default.root),
      wrap: Object.assign({}, config.default.wrap),
      content: Object.assign({}, config.default.content),
    };
    for(let key in controls) {
      const item = config.controls[key].items[controls[key]];
      // console.log({item});
      if (item.marks != null) styles.marks = item.marks;
      styles.root = Object.assign(styles.root, item.root);
      styles.wrap = Object.assign(styles.wrap, item.wrap);
      styles.content = Object.assign(styles.content, item.content);
    }


    document.body.style.margin = 0;

    const Root = 'div';
    const Wrap = styles.marks ? CropMarks : 'div';
    const Content = 'div';
    return (
      <Root style={assign({}, styles.root)}>
        <Wrap style={assign({}, styles.wrap)}>
          <Content style={assign({}, styles.content)}>
            {this.story}
          </Content>
        </Wrap>
      </Root>
    );


  }
}

export default config => story => (
  <UtilsDecorator story={story} config={config} />
);
