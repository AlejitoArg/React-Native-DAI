import React from "react";
import { SafeAreaView, StyleSheet, TextInput,Button,Alert, Picker, Text, View} from "react-native";
import Valores from "../components/Valores";
import Imagen from "../components/Imagen";
const axios = require('axios');

{/* Declarar variables */}

const IngresoPrenda = () => {
  const [nombreApp, onChangeNombre] = React.useState("");
  const [parteCuerpoApp, onChangeParteCuerpo] = React.useState("");
  const [tipoApp, onChangeTipo] = React.useState("");
  const [ocasionApp, onChangeOcasion] = React.useState("");
  const [climaApp, onChangeClima] = React.useState("");
  const [colorApp, onChangeColor] = React.useState("");
  const [tagsApp, onChangeTags] = React.useState("");

{/* Guardar datos en la BD*/}
  const validar = () =>{
    if(!nombreApp) return "Nombre de la prenda"
    if(!tipoApp) return "Tipo de la prenda"
    if(!colorApp) return "Color de la prenda"
    if(!ocasionApp) return "Ocasion de la prenda"
    if(!climaApp) return "Clima de la prenda"
    return undefined
  }
  const guardar = () => {
    console.log("llegue aca")
    let campo=validar()
    if(!campo){
      let obj = {
        "IdArmario": 1,
        "nombrePrenda": nombreApp,
        "tipo": tipoApp,
        "color": colorApp,
        "ocasion": ocasionApp,
        "factorClima": climaApp,
        "tags": tagsApp,
        "fotoPrenda": 'sisis'
      };
      console.log(obj)
      axios.post('http://localhost:5000/Prenda', obj )
      .then(function (response) {
        console.log(response);
        Alert.alert("Se ha guardado correctamente@")
      })
      .catch(function (error) {
        console.log('guardar');
        console.log(error);
      }); 
    }else{
      console.log("Complete el campo: " + campo)
      Alert.alert(  'Complete el campo:' + campo,'My Alert Msg',[{text: 'Cancel',onPress: () => console.log('Cancel Pressed'),style: 'cancel',},{text: 'OK', onPress: () => console.log('OK Pressed')},]);  
    }
  }

  {/* Devolver lo que se muestra (frontend) */}
  
  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.Titulo}>Agregar prenda</Text>

      {/* Ingresar nombre prenda */}
      <TextInput
        style={styles.dropdown}
        onChangeText={onChangeNombre}
        value={nombreApp}
        placeholder="Ingrese el nombre de la prenda: "
      />

      {/* Ingresar parte cuerpo */}
      <View style={[styles.container, {
        // Try setting `flexDirection` to `"row"`.
        flexDirection: "row"
      }]}>
        <View style={{ flex: 3}}>
        <Picker
          selectedValue={parteCuerpoApp}
          style={styles.dropdown}
          onValueChange={(itemValue) => onChangeParteCuerpo(itemValue)}
        >
          <Picker.Item label="Elija la parte del cuerpo de la prenda" value={0}></Picker.Item>
          <Valores name="ParteCuerpo"></Valores>
          </Picker>
        </View>
        <View style={{ flex: 1}}>
          <Imagen id={parteCuerpoApp}></Imagen>
        </View>
      </View>
      

      {/* Ingresar tipo prenda*/}

      <Picker
        selectedValue={tipoApp}
        style={styles.dropdown}
        onValueChange={(itemValue) => onChangeTipo(itemValue)}
      >
        <Picker.Item label="Elija el tipo de prenda" value="" />
        <Valores id={parteCuerpoApp} name="TipoPrenda"></Valores>
      </Picker>
      
      {/* Ingresar ocasion prenda */}

      <Picker
        selectedValue={ocasionApp}
        style={styles.dropdown}
        onValueChange={(itemValue) => onChangeOcasion(itemValue)}
      >
        <Picker.Item label="Elija la ocasion de la prenda" value="" />
        <Valores name="OcasionPrenda"></Valores>
      </Picker>

      {/* Ingresar color prenda*/}

      <Picker
        selectedValue={colorApp}
        style={styles.dropdown}
        onValueChange={(itemValue) => onChangeColor(itemValue)}
      >
        <Picker.Item label="Elija el color de la prenda" value="" />
        <Valores name="ColorPrenda"></Valores>
      </Picker>

      {/* Ingresar clima prenda*/}
      
      <Picker
        selectedValue={climaApp}
        style={styles.dropdown}
        onValueChange={(itemValue) => onChangeClima(itemValue)}
      >
        <Picker.Item label="Elija el clima de la prenda" value="" />
        <Valores name="ClimaPrenda"></Valores>
      </Picker>

      {/* Ingresar tags prenda */}

      <TextInput
        style={styles.dropdown}
        onChangeText={onChangeTags}
        value={tagsApp}
        placeholder='Ingrese los tags de la prenda separados por ",": '
      />

      {/* Enviar datos */}

      <Button
        onPress={guardar}
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
    backgroundColor: "#EA899A"
  },
  Titulo:{
    fontSize: 40,
    textAlign: "center",
    color: "#ffffff"
  },
  boton: {
    height: 70,
    padding: 100,
    borderColor: "#ffffff",
    borderRadius: 6,
    borderWidth: 4,
  },
  dropdown: {
    margin:13,
    height: 70,
    backgroundColor: "#dfdfdf",
    borderWidth: 4,
    borderColor: "#655ea3",
    borderRadius: 6,
    padding: 10,
  },
  container: {
    flex: 1
  }
});
export default IngresoPrenda;