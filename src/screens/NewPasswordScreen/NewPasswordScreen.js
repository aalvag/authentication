import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const NewPasswordScreen = () => {
  const navigation = useNavigation();
  const {control, handleSubmit} = useForm();

  const onSubmit = data => {
    console.log(data);
    navigation.navigate('Home');
  };

  const onSignIn = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          placeholder="Code"
          name="code"
          control={control}
          rules={{
            required: 'Code is required',
          }}
        />
        <CustomInput
          placeholder="Enter new password"
          name="newPassword"
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          }}
        />
        <CustomButton text="Submit" onPress={handleSubmit(onSubmit)} />
        <CustomButton
          text="Back to Sign in"
          onPress={onSignIn}
          type="terciary"
        />
      </View>
    </ScrollView>
  );
};

export default NewPasswordScreen;

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
