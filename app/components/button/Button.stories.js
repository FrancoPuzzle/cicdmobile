import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import Button from '.';
import CenterView from '../../../storybook/CenterView';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Primary Button', () => (
    <Button onPress={action('button-clicked')} text={text('Label', 'Example Button')} />
  ))
  .add('Secondary Button', () => (
    <Button
      onPress={action('button-clicked')}
      type="secondary"
      text={text('Label', 'Example Button')}
    />
  ));
