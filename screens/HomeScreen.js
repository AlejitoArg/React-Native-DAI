import { StyleSheet, View,Text } from "react-native";
import React from "react";
import Plato from "../components/Plato"
const axios = require('axios');
import {useContextState } from "../contextState";

const HomeScreen = ({ navigation }) => {
    const [platosApp, onChangePlatos] = React.useState([]);
    const [tokenApp, onChangeToken] = React.useState("");
    React.useEffect(() => {
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
        });
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=a4a2c21672f84a8dbd45a0c5ac307c13`)
        .then(function (response) {
            console.log(response.data.results);
            onChangePlatos(response.data.results)
        })
        .catch(function (error) {
            console.log('NO SE HAN TRAIDO LOS PLATOS');
            console.log(error);
        });
    },[])

    return (
        <>
            {
                platosApp.map(
                    (plato)=>(
                        <Plato nombre={plato.title} imagen={plato.image}/>
                    )
                )
            }
        </>
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