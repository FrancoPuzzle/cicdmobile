// REACT
import * as React from 'react';

// COMPONENTS
import { ViewStyle } from 'react-native';
import { _Container } from './Container.Styled';

interface Props {
  children: React.ReactNode | React.ReactNodeArray;
  style: ViewStyle;
  testID?: string;
}

const Container = ({ children, ...props }: Props) => {
  return <_Container {...props}>{children}</_Container>;
};

Container.defaultProps = {
  style: {},
};

export default Container;
