import React, {FC} from 'react';

import {CommonActions, useNavigation} from '../../modules';

import SignIn from './SignIn';

const SignInMain: FC = () => {
  const navigation = useNavigation();

  function handleFruitsList() {
    navigation.dispatch(
      CommonActions.navigate({
        name: 'FruitsList',
      }),
    );
  }

  return <SignIn handleFruitsList={handleFruitsList} />;
};

export default SignInMain;
