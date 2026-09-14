    import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";

import InputField from "../../components/ui/InputField";
import Button from "../../components/ui/Button";
import { signupUser } from "../../api/authApi";

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleSignup = async () => {
  try {
    const result = await signupUser(name, email, password);

    console.log("Signup Status:", result.status);
    console.log("Signup Response:", result.data);

    if (result.status === 201) {
      Alert.alert(
        "Success",
        "Account created successfully!",
        [
          {
            text: "OK",
            onPress: () => navigation.navigate("Login"),
          },
        ]
      );
    } else {
      Alert.alert(
        "Signup Failed",
        result.data.message || "Something went wrong"
      );
    }
  } catch (error) {
    console.log("Signup Error:", error);

    Alert.alert(
      "Error",
      "Unable to connect to server"
    );
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <Text style={styles.subtitle}>
        Sign up and start exploring stories
      </Text>

      <InputField
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

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

      <Button
        title="Sign Up"
        onPress={handleSignup}
      />

      <View style={styles.loginContainer}>
        <Text>Already have an account? </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.loginText}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    marginBottom: 30,
  },

  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  loginText: {
    fontWeight: "bold",
  },
});