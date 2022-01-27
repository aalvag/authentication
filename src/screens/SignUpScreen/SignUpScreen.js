import React from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const {control, handleSubmit, watch} = useForm();

  const onRegister = async data => {
    try {
      const response = await Auth.signUp({
        username: data.username,
        password: data.password,
        attributes: {
          email: data.email,
          name: data.name,
          preferred_username: data.username,
        },
      });
      navigation.navigate('ConfirmEmail', {
        username: data.username,
      });
    } catch (error) {
      console.log(error);
      Alert.alert('Error', error.message);
    }
  };

  const onSignIn = () => {
    navigation.navigate('SignIn');
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
          placeholder="Name"
          name="name"
          control={control}
          rules={{
            required: 'Name is required',
          }}
        />
        <CustomInput
          placeholder="Usename"
          name="username"
          control={control}
          rules={{
            required: 'Username is required',
          }}
        />
        <CustomInput
          placeholder="Email"
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Email is not valid',
            },
          }}
        />
        <CustomInput
          placeholder="Password"
          secureTextEntry
          name="password"
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          }}
        />
        <CustomInput
          placeholder="Confirm Password"
          secureTextEntry
          name="confirmPassword"
          control={control}
          rules={{
            required: 'Confirm Password is required',
            minLength: {
              value: 6,
              message: 'Confirm Password must be at least 6 characters',
            },
            validate: value =>
              value === watch('password') || 'Passwords do not match',
          }}
        />
        <CustomButton text="Register" onPress={handleSubmit(onRegister)} />
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
