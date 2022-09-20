import { StyleSheet, View, Text, ScrollView, TextInput, Button } from "react-native";
import React from "react";
import Plato from "../components/Plato"
const axios = require('axios');
import {useContextState } from "../contextState";

const HomeScreen = ({ navigation }) => {
    const [platosApp, onChangePlatos] = React.useState([]);
    const [tokenApp, onChangeToken] = React.useState("");
    const [buscarV, onChangeBuscarV] = React.useState("");
    const { contextState, setContextState } = useContextState();

    const buscar = () =>{
        if(buscarV.length>3){
            const obj = {
                    "email": "challenge@alkemy.org",
                    "password": "react"
                }
            axios.post('http://challenge-react.alkemy.org', obj)
            .then(function (response) {
                onChangeToken(response.data.token)
            })
            .catch(function (error) {
            })
            .then(
                axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=5fbfaca6af9949e48de98190593f70f9&query=${buscarV}`)
                .then(function (response) {    
                    onChangePlatos(response.data.results)
                })
                .catch(function (error) {
                })
            )
        }else{
            onChangePlatos([])
        }
    }
    return (
        <ScrollView>
            <TextInput
                onChangeText={onChangeBuscarV}
                value={buscarV}
                placeholder="Ingrese el nombre de la prenda: "
            />
            <Button
                onPress={buscar}
                title="Buscar"
                color="#655ea3"
                accessibilityLabel="Learn more about this purple button"
            />
            {
                platosApp.map(
                    (plato)=>(
                        <View>
                            <Plato id={plato.id} nombre={plato?.title} imagen={plato?.image} desc={plato?.desc} textoBoton={"Agregar al menu"}/>
                        </View>
                    )
                )
            }
            <Text>Menu</Text>
            {
                contextState.menu.map(
                    (plato)=>(
                        <View>
                            <Plato id={plato.id} nombre={plato?.nombre} imagen={plato?.imagen} desc={plato?.desc} onMenu={true} textoBoton={"Eliminar del menu"}/>
                        </View>
                    )
                )
            }
        </ScrollView>
    );
};

    const styles = StyleSheet.create({
        body: {
            paddingTop: 20,
            flex: 1
        },
        roundButton2: {
            marginTop: 20,
            width: 200,
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            border: "5px solid yellow ",
            borderRadius: 100,
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: 20,
            fontFamily: "Lucida Console",
            color: "black",
            fontWeight: "bold"
        },
        roundButton3: {
            marginTop: 15,
            width: 170,
            height: 170,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            border: "5px solid cyan ",
            borderRadius: 100,
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: 20,
            fontFamily: "Lucida Console",
            color: "black",
            fontWeight: "bold"
        },
        roundButton4: {
            marginTop: 15,
            width: 170,
            height: 170,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            border: "5px solid pink ",
            borderRadius: 100,
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: 20,
            fontFamily: "Lucida Console",
            color: "black",
            fontWeight: "bold"
        },
        roundButton5: {
            marginBottom: 100,
            width: 200,
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            border: "5px solid blue ",
            borderRadius: 100,
            textAlign: "center",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: 20,
            fontFamily: "Lucida Console",
            color: "black",
            fontWeight: "bold"
        },

    });

export default HomeScreen;