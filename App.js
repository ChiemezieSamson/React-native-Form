import { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TextInput, Switch, Button, Image, KeyboardAvoidingView, Platform } from 'react-native';

export default function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let errors = {}

    if (!username) errors.username = "Username is reduired"
    if (!password) errors.password = "Password is reduired"

    setErrors(() => errors)

    return Object.keys(errors).length === 0
  }

  const onSubmit = () => {
    if(validateForm()) {
      console.log("Submitted", username, password);
      setUsername(() => "")
      setPassword(() => "")
      setErrors(() => {})
    }
  }
  
  return (
    <KeyboardAvoidingView 
      behavior='padding' 
      keyboardVerticalOffset={100}  
      style={styles.container}
    >
      <View style={styles.form}>
        <Image source={require("./assets/adaptive-icon.png")} style={styles.image}/>
        <Text style={styles.lable}>Username</Text>
        <TextInput 
          style={styles.input} 
          placeholder='Enter your username' 
          value={username}
          onChangeText={setUsername}
        />
        {errors?.username && <Text style={styles.errorText}>{errors?.username}</Text>}
        <Text style={styles.lable}>Password</Text>
        <TextInput 
          style={styles.input} 
          placeholder='Enter your password' 
          value={password} 
          secureTextEntry
          onChangeText={setPassword}
        />
        {errors?.password && <Text style={styles.errorText}>{errors?.password}</Text>}
        <Button title='Login' onPress={() => {onSubmit()}} />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5"
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  lable: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold"
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5
  },
  image: {
    width: 200,
    height: 400,
    alignSelf: "center",
    marginBottom: 50,
  },
  errorText: {
    color: "red",
    marginBottom: 10
  }
});
