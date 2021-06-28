import { storiesOf } from '@storybook/react-native';
import { text, number, select, object } from '@storybook/addon-knobs';
import React from 'react';
import Typography from '.';
import CenterView from '../../../storybook/CenterView';

storiesOf('Typography', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Typography with regular text', () => (
    <Typography
      variant={select('Variant', ['regular', 'bold', 'extraBold', 'light'], 'regular')}
      color={select('Color', ['white', 'black', 'primary'], 'primary')}
      size={number('Size', 12)}
      textAlign={select('Text Alignment', ['right', 'center', 'left'], 'left')}
      style={object('Styles', {})}
    >
      {text('Text', 'Text Example')}
    </Typography>
  ));
