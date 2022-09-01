import { StyleSheet, View, Text, ScrollView } from "react-native";
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
        })
        .then(
            axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=a4a2c21672f84a8dbd45a0c5ac307c13`)
            .then(function (response) {
                console.log(response.data.results);
                response.data.results[0]={...response.data.results[0], desc:"Arroz con salteado de vegetales"}
                response.data.results[1]={...response.data.results[1], desc:"Papas especiales condimentadas"}
                response.data.results[2]={...response.data.results[2], desc:"Smoothie de frutilla de nuestra huerta"}
                response.data.results[3]={...response.data.results[3], desc:"Verduras condimentadas"}
                response.data.results[4]={...response.data.results[4], desc:"Estofado de pollo de receta africana"}
                response.data.results[5]={...response.data.results[5], desc:"Estofado de caracol de receta africana"}
                response.data.results[6]={...response.data.results[6], desc:"Salteado de porotos con morron"}
                response.data.results[7]={...response.data.results[7], desc:"Arroz con brocoli"}
                response.data.results[8]={...response.data.results[8], desc:"Estofado de bife cocido lentamente"}
                response.data.results[9]={...response.data.results[9], desc:"Sopa de pollo"}
                onChangePlatos(response.data.results)
            })
            .catch(function (error) {
                console.log('NO SE HAN TRAIDO LOS PLATOS');
                console.log(error);
            })
        )
    },[])
    
    return (
        <ScrollView>
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