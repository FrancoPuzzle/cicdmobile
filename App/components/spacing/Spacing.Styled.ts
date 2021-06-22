import styled from 'styled-components';
import { View } from 'react-native';

type StyledSpaceProps = {
  isHorizontal: boolean;
  size: number;
};

export const _Spacing = styled(View)(({ isHorizontal, size }: StyledSpaceProps) => ({
  height: !isHorizontal ? size : 'auto',
  width: isHorizontal ? size : 'auto',
}));
