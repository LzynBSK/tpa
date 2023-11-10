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


export const SignUpScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

  const doCadastrar = async () => {
    try {
      // Validações
      if (username.length < 3) {
        Alert.alert(
            "Erro ⚠️",
            `"${createdUser.get("username")}", Nome de usuário deve ter mais de 3 letras.`
          );//Exibe erro de nnome de usuário com menos de 3 letras.
        return;
      }
      if (!/^[a-zA-Z0-9]+$/.test(username)) {
        Alert.alert(
            "Erro ⚠️",
            `"${createdUser.get("username")}", Nome de usuário não deve ter caracteres especiais.`
          ); // Exibe erro de nome de usuário com caracteres especiais.
        return;
      }
      if (
        !/^(?:[a-zA-Z0-9._-]+@(?:gmail|yahoo|outlook|hotmail|icloud|aol|protonmail|zoho|yandex|gmx|mail|tutanota|fastmail)\.com)$/.test(email)
      ) {
        Alert.alert(
            "Erro ⚠️",
            `"${createdUser.get("email")}", email deve conter um formato válido.`
          ); // Exibe erro de email inválido.
        return;
      }
      const user = new Parse.User();
      user.set('username', username);
      user.set('password', password);
      user.set('email', email);

      let userResult = await user.signUp();
      console.log('User signed up', userResult);
      Alert.alert(
        "Sucesso ✅",
        `Seja bem-vindo(a) "${username}", usuário criado com sucesso.`
      );
      navigation.navigate("Login");
    } catch (error) {
      console.error('Erro ao cadastrar:', error);

      // Mostrar a mensagem de erro no modal
      Alert.alert(
        "Erro ❌",
        `Erro ao fazer cadastro.`
      );
    }
  };

  return (
      <SafeAreaView style={styles.container__safe}>
        <View style={styles.container}>
        <Text style={styles.tittleStyle}>TechPet</Text>
      <TextInput
        style={styles.input}
        value={username}
        placeholder={"Seu apelido/nome"}
        onChangeText={(text) => setUsername(text)}
        autoCapitalize={"none"}
      />
      <TextInput
        style={styles.input2}    
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

      <Pressable style={styles.btnCadastrar} onPress={() => doCadastrar()}>
    <Text style={styles.txtcadastro}>
        Cadastrar
    </Text>
      </Pressable>
      <Pressable style={styles.btnSignIn} onPress={() => navigation.navigate("Login")}>
    <Text style={styles.txtSignIn}>
        Já tem uma conta?
    </Text>
      </Pressable>
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
    fontSize: 16,
  },

  input2: {
    height: 40,
    width: "80%",
    marginBottom: 10,
    backgroundColor: "#e8e8e8",
    padding: 5,
    fontSize: 16,
  },

  tittleStyle: {
    fontSize: 35,
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
    color: "#FFF",
    fontSize: 16,
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