import {useEffect, useState} from "react";
import { SafeAreaView, StyleSheet, TextInput,Button,Alert, Picker, Text, View} from "react-native";
import { ActionTypes, useContextState } from "../contextState";
const axios = require('axios');

{/* Declarar variables */}

const LogIn = ({navigation}) => {
  const [gmailApp, onChangeGmail] = useState("");
  const [passwordApp, onChangePassword] = useState("");
  const { contextState, setContextState } = useContextState();

{/* Guardar datos en la BD*/}
  const validar = () =>{
      if(gmailApp!="challenge@alkemy.org"){
          console.log("El mail es incorrecto")
          return 0
      } 
      if(passwordApp!="react"){
          console.log("La contraseña es incorrecta")
          return 0
      }
      let obj = {
        email:gmailApp,
        password:passwordApp
      }
      axios.post('http://challenge-react.alkemy.org', obj)
      .then(function (response) {
        console.log("nashe")
        setContextState({
          type: ActionTypes.SetGmail,
          value: gmailApp
        })
        setContextState({
          type: ActionTypes.SetPassword,
          value: passwordApp
        })
        setContextState({
          type: ActionTypes.SetToken,
          value: response
        })
      })
      .catch(function (error) {
        console.log('NO SE HAN TRAIDO LOS PLATOS');
        console.log(error);
      });
      navigation.navigate('Home')
  }

  {/* Devolver lo que se muestra (frontend) */}
  
  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.Titulo}>Log In</Text>

      {/* Ingresar nombre prenda */}
      <TextInput
        style={styles.input}
        onChangeText={onChangeGmail}
        value={gmailApp}
        placeholder="Ingrese su Gmail: "
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={passwordApp}
        placeholder="Ingrese su contraseña: "
      />

      <Button
        onPress={validar}
        title="Enviar"
        color="#655ea3"
        style={styles.boton}
        accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
  );
};

{/* Estilos */}

const styles = StyleSheet.create({
  body: {
    paddingTop: 30,
    margin:10
  },
  Titulo:{
    fontSize: 40,
    textAlign: "center",
    paddingBottom: 15
  },
  boton: {
    marginTop:15,
    height: 70,
    padding: 100,
    borderColor: "#ffffff",
    borderRadius: 6,
    borderWidth: 4,
  },
  container: {
    flex: 1
  },
  input:{
    margin:13,
    height: 70,
    borderWidth: 1,
    borderRadius: 6,
    padding: 10,
    backgroundColor: "#b6ffff",
  }
});
export default LogIn;