import React from 'react';
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Image,
} from 'react-native';
import Logo from '../../components/Logo';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignIn = () => {
    navigation.navigate('Home');
  };

  const onForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUp = () => {
    navigation.navigate('SignUp');
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
        <SocialSignInButtons />
        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUp}
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
