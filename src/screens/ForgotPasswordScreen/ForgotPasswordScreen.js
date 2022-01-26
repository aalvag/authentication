import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ForgotPasswordScreen = () => {
  const navigation = useNavigation();
  const {control, handleSubmit} = useForm();

  const onSend = data => {
    console.warn(data);
    navigation.navigate('NewPassword');
  };

  const onSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          placeholder="Username"
          name="username"
          control={control}
          rules={{
            required: 'Username is required',
          }}
        />
        <CustomButton text="Send" onPress={onSend} />
        <CustomButton
          text="Back to Sign in"
          onPress={handleSubmit(onSignIn)}
          type="terciary"
        />
      </View>
    </ScrollView>
  );
};

export default ForgotPasswordScreen;

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
