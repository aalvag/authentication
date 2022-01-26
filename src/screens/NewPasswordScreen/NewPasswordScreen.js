import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const NewPasswordScreen = () => {
  const [code, setCode] = React.useState('');
  const [newPassword, setNewPassword] = React.useState('');

  const onSubmit = () => {
    console.warn('Submit');
  };

  const onSignIn = () => {
    console.warn('Sign in');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput placeholder="Code" value={code} setValue={setCode} />
        <CustomInput
          placeholder="Enter new password"
          value={newPassword}
          setValue={setNewPassword}
        />
        <CustomButton text="Submit" onPress={onSubmit} />
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
