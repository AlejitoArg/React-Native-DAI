import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, Text } from 'react-native';
import { Button } from "react-native-web";
const axios = require('axios');

const Plato = (props) => {
    const styles = StyleSheet.create({
        platoImagen: {
            width: 100,
            height: 100,
            flex: 1,
        },
        card:{
            margin:10,
            padding:10,
            backgroundColor:"#9B9B9B",
            borderRadius: 10
        },
        title: {
            marginBottom:10
        }
      });

    return (
        <View style={[styles.card, {
            flexDirection: "row"
          }]}>
            <View style={{flex:1}}>
                <Image
                    style={styles.platoImagen}
                    source={{
                        uri: props?.imagen,
                    }}
                />
            </View>
            <View style={{flex:2}}>
                <Text style={styles.title}>{props?.nombre}</Text>
                <Text>{props?.desc}</Text>
                <Button
                    onPress={() => console.log(props)}
                    title="Ver Más"
                    color="#655ea3"
                    style={styles.boton}
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        </View>
    );
}
export default Plato;