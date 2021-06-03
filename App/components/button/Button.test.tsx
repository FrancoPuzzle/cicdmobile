import React from 'react';
import { render } from '@testing-library/react-native';
import Button from './Button';

describe('Button component', () => {
  it('Should show a button component', async () => {
    const { findByTestId, findByText } = render(<Button text="Test button" testID="TestButton" />);
    const button = await findByTestId('TestButton');
    const buttonByText = await findByText('Test button');

    expect(button).toBeTruthy();
    expect(buttonByText).toBeTruthy();
  });
});
