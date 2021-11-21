import React, {FC} from 'react';
import {Alert} from 'react-native';
import {Formik} from 'formik';

import SignIn from './SignIn';
import {CommonActions, useNavigation} from '../../modules';
import {FormSchema, initialValues, auth, SingInForm} from './form';

const SignInMain: FC = () => {
  const navigation = useNavigation();

  function submit(data: SingInForm) {
    if (checkData(data)) {
      return handleFruitsList();
    } else {
      Alert.alert('Usuário ou senha inválidos');
    }
  }

  function checkData(data: SingInForm): boolean {
    return JSON.stringify(data) === JSON.stringify(auth);
  }

  function handleFruitsList() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'FruitsList',
      }),
    );
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submit}
      validationSchema={FormSchema}>
      <SignIn />
    </Formik>
  );
};

export default SignInMain;
