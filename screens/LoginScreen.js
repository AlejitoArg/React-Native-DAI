import React from "react";
import { SafeAreaView, StyleSheet, TextInput,Button,Alert, Picker, Text, View} from "react-native";
const axios = require('axios');

{/* Declarar variables */}

const LogIn = () => {
  const [gmailApp, onChangeGmail] = React.useState("");
  const [passwordApp, onChangePassword] = React.useState("");

{/* Guardar datos en la BD*/}
  const validar = () =>{
    if(!gmailApp){
        console.log("Inrese un Mail")
        return 0
    } 
    if(!passwordApp){
        console.log("Ingrese una contraseña")
        return 0
    } 
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