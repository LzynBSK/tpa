import React, { FC, ReactElement, useState, TouchableOpacity } from "react";
import { 
  StyleSheet, 
  View, 
  Text, 
  SafeAreaView, 
  TextInput, 
  Pressable, 
  Alert 
} from 'react-native';
import Parse from "parse/react-native";
import 'react-native-get-random-values';
import { router } from "expo-router";


const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const doLogin = async () => {
    try {
      await Parse.User.logIn(email, password); 
      const CurrentUser = Parse.User.current();
      const username = CurrentUser.get("Username");
      Alert.alert(
        "Sucesso ✅",
        `Seja bem-vindo(a) "${username}", logado com sucesso.`
      );    
      router.replace('/feeders/comedouros')
      console.log('User logged in successfully');
    } catch (error) {
      console.error("Error: " + error.code + " " + error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container__safe}>
    <View style={styles.container}>
    <Text style={styles.tittleStyle}>TechPet</Text>
  <TextInput
    style={styles.input}    
    value={email}
    placeholder={"Email"}
    onChangeText={(text) => setEmail(text)}
  />
  <TextInput
    style={styles.input2}    
    value={password}
    placeholder={"Senha"}
    secureTextEntry={true}
    onChangeText={(text) => setPassword(text)}
  />

  <Pressable style={styles.btnCadastrar} onPress={() => doLogin()}>
<Text style={styles.txtcadastro}>
    Entrar
</Text>
  </Pressable>
  <View className="flex-row justify-center mt-2">
    <Text> Já tem uma conta? </Text>
    <TouchableOpacity onPress={() => (router.push("/user/signIn"))}>
      <Text className="text-sky-600">Entrar</Text>  
    </TouchableOpacity>
   </View>
  </View>
</SafeAreaView>
  );
};
const styles = StyleSheet.create({
    input: {
      height: 40,
      width: "80%",
      marginBottom: 10,
      backgroundColor: "#e8e8e8",
      padding: 5,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
 
    },
  
    input2: {
      height: 40,
      width: "80%",
      marginBottom: 10,
      backgroundColor: "#e8e8e8",
      padding: 5,
  
    },
  
    tittleStyle: {
      fontSize: 30,
      fontWeight: 'bold', // Adiciona negrito ao texto
      textAlign: 'center', // Centraliza o texto
      marginBottom: 50, // Ajusta a margem superior para movê-lo para cima
      color: "#266F5F",
    },
  
    btnCadastrar:{
      backgroundColor: "#266F5F",
      height: 40,
      width: "80%",
      alignItems: "center",
      justifyContent: "center",
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
  
  txtSignIn:{
      marginTop: 10,
      fontSize: 15,
      color: "#266f5f",
      marginBottom:30
  },
  
    txtcadastro: {
      color: "#FFF"
    },
      container__safe:{
          flex: 1
        },
        container: {
          flex: 1,
          backgroundColor: '#FFF',
          alignItems: 'center',
          justifyContent: 'center',
        }, 
  });
export default LoginScreen;