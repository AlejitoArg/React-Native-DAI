import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Button, Alert, Picker, Text, View } from "react-native";
const axios = require('axios');

{/* Declarar variables */ }

const AgregarPlato = () => {
  const [nombreApp, onChangeNombre] = React.useState("");

  return (
    <SafeAreaView>
      {/* Ingresar nombre prenda */}
      <TextInput
        onChangeText={onChangeNombre}
        value={nombreApp}
        placeholder="Ingrese el nombre de la prenda: "
      />


      {/* Enviar datos */}

      <Button
        title="Enviar"
        color="#b348fa"
        accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
  );
};

export default AgregarPlato;