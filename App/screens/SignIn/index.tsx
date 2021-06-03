import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Alert } from 'react-native';
import { connect } from 'react-redux';
import { logIn } from '../../redux/actions/auth';
import { Button, Typography } from '../../components';
import { BackButton } from '../../navigation/components';
import { Container, Content, _TextInput as TextInput } from './styles';

type ConnectProps = {
  logIn: Function;
};

type Props = ConnectProps;

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email Required'),
  password: Yup.string().required('Password Required'),
});

const SignIn: React.FC<Props> = ({ logIn }) => {
  return (
    <Container testID="signin_screen">
      <BackButton
        size={26}
        onPress={() => Alert.alert('back')}
        text="Volver"
        style={{ alignSelf: 'flex-start' }}
      />
      <Content>
        <Typography color="black" size={18}>
          Enter your account data
        </Typography>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            logIn(values.email);
            Alert.alert('Welcome ' + values.email + '!');
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
            <>
              <TextInput
                testID="email_field"
                placeholder="Email Address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />

              <TextInput
                testID="password_field"
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={true}
              />

              <Button onPress={handleSubmit as any} text="Sign In" disabled={!isValid} size="big" />
            </>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logIn: (name: string) => dispatch(logIn({ name })),
});

export default connect(null, mapDispatchToProps)(SignIn);
