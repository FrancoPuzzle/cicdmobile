import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';
import React from 'react';
import EmptyContent from '.';
import CenterView from '../../../storybook/CenterView';
import { theme } from '../../styles';

storiesOf('EmptyContent', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('EmptyContent with text', () => (
    <EmptyContent text={text('Text', 'Example Empty Content')} />
  ))
  .add('EmptyContent with spinner', () => (
    <EmptyContent text="" spinnerColor={theme.color.puzzleOrange} />
  ));
