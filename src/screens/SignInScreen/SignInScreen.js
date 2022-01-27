import React from 'react';
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import Logo from '../../components/Logo';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import {Auth} from 'aws-amplify';

const SignInScreen = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const onSignIn = async data => {
    if (isLoading) return;
    setIsLoading(true);
    try {
      const response = await Auth.signIn(data.username, data.password);
      console.log(response);
    } catch (error) {
      console.log(error);
      Alert.alert('Error', error.message);
    }
    setIsLoading(false);

    // console.log(data);
    // navigation.navigate('Home');
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
          name="username"
          control={control}
          placeholder="Usename"
          rules={{
            required: 'Username is required',
          }}
        />
        <CustomInput
          name="password"
          control={control}
          placeholder="Password"
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          }}
        />
        <CustomButton
          text={isLoading ? 'Loading...' : 'Sign In'}
          onPress={handleSubmit(onSignIn)}
        />
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
