import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../redux/actions/auth';

import { Container, Title } from './Home.Styled';
import { Button, Spacing } from '../../components';
import { Navigator } from '../../navigation';

type ConnectProps = {
  logOut: Function;
};

type Props = ConnectProps;

const HomeScreen: React.FC<Props> = ({ logOut }) => {
  const { goToPage } = Navigator();
  return (
    <Container>
      <Title color="primary" variant="bold" size={14}>
        {`HOME`}
      </Title>
      <Button size="big" text="Go To FetchExample" onPress={() => goToPage('FETCH_DATA')} />
      <Spacing />
      <Button size="big" text="Log Out" onPress={() => logOut()} />
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut()),
});

export default connect(null, mapDispatchToProps)(HomeScreen);
