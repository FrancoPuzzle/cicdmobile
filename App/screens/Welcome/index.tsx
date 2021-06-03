import React from 'react';
import { Navigator } from '../../navigation';
import { Button } from '../../components';
import { PuzzleLogo } from '../../assets/images';
import { Container, WelcomeImage, Title } from './styles';

const Welcome = () => {
  const { goToPage } = Navigator();
  return (
    <Container testID="welcome_screen">
      <WelcomeImage source={PuzzleLogo} testID="puzzle_logo" />
      <Title color="primary" variant="bold" size={14}>
        {`REACT NATIVE TYPESCRIPT\nPUZZLE v0.63.4 JANUARY 2021`}
      </Title>
      <Button
        testID="go_to_signin_button"
        size="big"
        text="Go To Sign In"
        onPress={() => goToPage('SIGNIN')}
      />
    </Container>
  );
};

export default Welcome;
