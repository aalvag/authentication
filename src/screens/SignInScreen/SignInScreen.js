import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Image,
} from 'react-native';
import Logo from '../../components/Logo';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignInScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {height} = useWindowDimensions();

  const onSignIn = () => {
    console.warn('Sign in');
  };

  const onForgotPassword = () => {
    console.warn('Forgot password');
  };

  const onSignInFacebook = () => {
    console.warn('Sign in with Facebook');
  };

  const onSignInGoogle = () => {
    console.warn('Sign in with Google');
  };

  const onSignInApple = () => {
    console.warn('Sign in with Apple');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <View style={[styles.logo, {height: height * 0.3}]}>
          <Logo />
        </View>
        {/* <Image
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          style={[styles.logo, {height: height * 0.3}]}
        /> */}
        <CustomInput
          placeholder="Usename"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomButton text="Sign In" onPress={onSignIn} />
        <CustomButton
          text="Forgot password?"
          onPress={onForgotPassword}
          type="terciary"
        />
        <CustomButton
          text="Sign In with Facebook"
          onPress={onSignInFacebook}
          bgColor="#e7eaf4"
          fgColor="#4765a9"
        />
        <CustomButton
          text="Sign In with Google"
          onPress={onSignInGoogle}
          bgColor="#fae9ea"
          fgColor="#dd4d44"
        />
        <CustomButton
          text="Sign In with Apple"
          onPress={onSignInApple}
          bgColor="#e3e3e3"
          fgColor="#363636"
        />
        <CustomButton
          text="Don't have an account? Create one"
          onPress={onForgotPassword}
          type="terciary"
        />
      </View>
    </ScrollView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: '60%',
    maxWidth: 300,
    maxHeight: 170,
    // backgroundColor: 'black',
    borderRadius: 15,
  },
});
