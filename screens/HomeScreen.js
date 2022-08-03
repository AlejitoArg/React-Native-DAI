import { Button,StyleSheet, View,TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={[styles.body, {
            flexDirection: "collumn"
        }]}>
            <View style={{ flex: 1}}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('IngresoPrenda')}
                    style={styles.roundButton2}>Ingresar prenda
                </TouchableOpacity>
            </View>
            <View style={{ flex: 1}}>
                <View style={[styles.body, {
                    flexDirection: "row"
                }]}>
                    <View style={{ flex: 2 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('IngresoPrenda')}
                            style={styles.roundButton3}>Crear outfit
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 2 }}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('IngresoPrenda')}
                            style={styles.roundButton4}>Armario
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1}}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('IngresoPrenda')}
                    style={styles.roundButton5}>Calendario
                </TouchableOpacity>
            </View>
        </View>
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