import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const SignUpScreen = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const onRegister = () => {
    console.warn('Register');
  };

  const onSignIn = () => {
    console.warn('Sign in');
  };

  const onTermsOfUse = () => {
    console.warn('Terms and conditions');
  };
  const onPrivacyPolicy = () => {
    console.warn('Privacy policy');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder="Usename"
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry
        />
        <CustomInput
          placeholder="Confirm Password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          secureTextEntry
        />
        <CustomButton text="Register" onPress={onRegister} />
        <Text style={styles.text}>
          By registering, you confirm that you accept out{' '}
          <Text style={styles.link} onPress={onTermsOfUse}>
            Terms of Use{' '}
          </Text>
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPolicy}>
            Privacy Policy
          </Text>
        </Text>
        <SocialSignInButtons />
        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignIn}
          type="terciary"
        />
      </View>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#61DAFB',
    margin: 10,
  },
  text: {
    fontSize: 14,
    marginVertical: 10,
    color: '#828282',
  },
  link: {
    color: '#61DAFB',
  },
});
