import React, { useEffect, useState } from "react";
import {Picker} from "react-native";
const axios = require('axios');

const Valores = (props) => {
    const [datos, setDatos] = useState([]);
    console.log(props.id)

    let ghostList = [];
    useEffect(() => {
        axios.get(`http://localhost:5000/${props.name}?partesCuerpo=${props.id}`)
        .then(function (response) {
            console.log("Se han traido los datos de " + props.name)
            console.log(response.data[0].Nombre);
            ghostList=(response.data)
        })
        .catch(function (error) {
            console.log("No se han traido los datos de :( " + props.name)
            console.log(error);
        })
        .then(function () {
            console.log("Finally:")
            console.log(ghostList)
            setDatos(ghostList);
        })
    }, [props.id])
    return (
        <>
            {
                datos.map(
                    (i) => (
                        <>
                            <Picker.Item label={i.Nombre} value={i.Id}></Picker.Item>
                        </>
                    )
                )
            }
        </>
    );
}

export default Valores;