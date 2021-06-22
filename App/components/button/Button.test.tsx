import React from 'react';
import { render } from '@testing-library/react-native';
import Button from './Button';

describe('Button component', () => {
  it('Should show a button component', async () => {
    const { findByTestId } = render(<Button text="Test button" testID="TestButton" />);
    const button = await findByTestId('TestButton');

    expect(button).toBeTruthy();
  });
});
