import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

import { useAuth } from '../../context/AuthContext';
import InputField from '../../components/ui/InputField';
import Button from '../../components/ui/Button';
import { loginUser } from '../../api/authApi';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const result = await loginUser(email, password);

      console.log('Login Status:', result.status);
      console.log('Login Response:', result.data);

      if (result.status === 200) {
        await login(result.data.token, result.data.user);

        Alert.alert('Success', 'Login successful!');
      } else {
        Alert.alert(
          'Login Failed',
          result.data.message || 'Something went wrong',
        );
      }
    } catch (error) {
      console.log('Login Error:', error);

      Alert.alert('Error', 'Unable to connect to server');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>

      <Text style={styles.subtitle}>Login to continue reading stories</Text>

      <InputField
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <InputField
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />

      <Button title="Login" onPress={handleLogin} />

      <View style={styles.signupContainer}>
        <Text>Don't have an account? </Text>

        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    marginBottom: 30,
  },

  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },

  signupText: {
    fontWeight: 'bold',
  },
});
