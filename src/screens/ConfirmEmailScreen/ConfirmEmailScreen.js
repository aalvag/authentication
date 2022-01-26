import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const ConfirmEmailScreen = () => {
  const {control, handleSubmit} = useForm();

  const onConfirmCode = data => {
    console.warn(data);
    navigation.navigate('Home');
  };

  const onSignIn = () => {
    navigation.navigate('SignIn');
  };

  const onResendCode = () => {
    console.warn('Resend code');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your Email </Text>
        <CustomInput
          placeholder="Enter your confirmation code"
          name="code"
          control={control}
          rules={{
            required: 'Code is required',
          }}
        />
        <CustomButton text="Confirm" onPress={handleSubmit(onConfirmCode)} />
        <CustomButton
          text="Resend code"
          onPress={onResendCode}
          type="secondary"
        />
        <CustomButton
          text="Back to Sign in"
          onPress={onSignIn}
          type="terciary"
        />
      </View>
    </ScrollView>
  );
};

export default ConfirmEmailScreen;

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
