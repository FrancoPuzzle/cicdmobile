import * as React from 'react';
import { _Spacing } from './Spacing.Styled';
import { rs } from '../../styles';

const Spacing = ({ size, isHorizontal }: { size: number; isHorizontal: boolean }) => {
  return <_Spacing size={rs(size)} isHorizontal={isHorizontal} />;
};

Spacing.defaultProps = {
  size: 20,
  isHorizontal: false,
};

export default Spacing;
