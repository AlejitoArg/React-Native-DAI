import { StyleSheet, View, Text, ScrollView, TextInput } from "react-native";
import React from "react";
import Plato from "../components/Plato"
import { Button } from "react-native-web";
const axios = require('axios');
import {useContextState } from "../contextState";

const HomeScreen = ({ navigation }) => {
    const [platosApp, onChangePlatos] = React.useState([]);
    const [tokenApp, onChangeToken] = React.useState("");
    const [buscarV, onChangeBuscarV] = React.useState("");
    const { contextState, setContextState } = useContextState();

    const buscar = () =>{
        if(buscarV.length>3){
            console.log(buscarV)
            const obj = {
                    "email": "challenge@alkemy.org",
                    "password": "react"
                }
            axios.post('http://challenge-react.alkemy.org', obj)
            .then(function (response) {
                console.log(response.data.token);
                onChangeToken(response.data.token)
            })
            .catch(function (error) {
                console.log('NO SE HAN TRAIDO LOS PLATOS');
                console.log(error);
            })
            .then(
                axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=5fbfaca6af9949e48de98190593f70f9&query=${buscarV}`)
                .then(function (response) {
                    console.log(response.data.results);
    
                    onChangePlatos(response.data.results)
                })
                .catch(function (error) {
                    console.log('NO SE HAN TRAIDO LOS PLATOS');
                    console.log(error);
                })
            )
        }
    }
    console.log(contextState)
    return (
        <ScrollView>
            {
                contextState.menu.map(
                    (plato)=>(
                        <View>
                            <Plato nombre={plato?.title} imagen={plato?.image} desc={plato?.desc}/>
                        </View>
                    )
                )
            }
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
                            <Plato nombre={plato?.title} imagen={plato?.image} desc={plato?.desc}/>
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