import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/type';
import NavBar from '../../components/NavBar';

const HomeScreen: React.FC = () => {
  const [totalKwh, setTotalKwh] = useState(1115);
  const [totalSaved, setTotalSaved] = useState(72.59);
  const [todayKwh, setTodayKwh] = useState(1826);
  const [devices, setDevices] = useState(4);

  return (
    
    <View style={styles.container}>
      <View style={styles.header}>
      <Image source={require('../../assets/giselle.png')} style={styles.profileImage}/>
        <Text style={styles.title}>Sparklight </Text>
        <Image source={require('../../assets/spark.png')} style={styles.logoImage}/>
        <Text style={styles.subtitle}>Iluminando o caminho para um consumo consciente</Text>
        <View style={styles.billContainer}>
        <Text style={styles.billText}>Valor atual da sua fatura</Text>
        <Text style={styles.billValue}>R$ 90,00</Text>
        <Text style={styles.billSaved}>
          Você já economizou <Text style={styles.savedHighlight}>R$ {totalSaved.toFixed(2)}</Text>
        </Text>
        <Text style={styles.dueDate}>Venc. 10 dez</Text>
      </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Total kWh Consumidos</Text>
        <Text style={styles.cardValue}>{totalKwh}</Text>
        <Text style={styles.cardSubtitle2}>
          4 aparelhos registrados
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>kWh Consumidos Hoje</Text>
        <Text style={styles.cardValue}>{todayKwh}</Text>
        <Text style={styles.cardSubtitle}>
          187Wh (24,87%)
        </Text>
      </View>


     <NavBar />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
    },
    header: {
      backgroundColor: "#265853",
      padding: 20,
      alignItems: "center",
      position: "relative",
    },
    logoImage: {
    top: 22,
    left: 210,
    height: 34,
    width: 34,
    position: "absolute",
    },
    profileImage: {
    width: 30,
    height: 30,
    borderRadius: 20,
    position: "absolute",
    left: 20, 
    top: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      color: "#FBC02D",
      marginBottom: 5,
    },
    subtitle: {
      fontSize: 10,
      color: "#FFFFFF",
      textAlign: "center",
    },
    billContainer: {
      backgroundColor: "#5DCCBF",
      marginTop: -30,
      borderRadius: 12,
      padding: 15,
      alignItems: "center",
      elevation: 5,
      height: 133,
      width: 250,
      top: 45,

    },
    billText: {
      fontSize: 16,
      color: "#FFFFFF",
    },
    billValue: {
      fontSize: 28,
      fontWeight: "bold",
      color: "#000000",
      marginVertical: 5,
    },
    billSaved: {
      fontSize: 14,
      color: "#FFFFFF",
    },
    savedHighlight: {
      fontWeight: "bold",
      color: "#FBC02D",
    },
    dueDate: {
      fontSize: 12,
      color: "#FFFFFF",
      marginTop: 5,
    },
    card: {
      backgroundColor: "#EDFFFD",
      marginHorizontal: 20,
      height: 150,
      marginBottom: 30,
      marginTop: 30,
      padding: 20,
      borderRadius: 10,
      elevation: 2,
    },
    cardTitle: {
      fontSize: 16,
      color: "#FBC02D",
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 10,
    },
    cardValue: {
      textAlign: "center",
      fontSize: 24,
      fontWeight: "bold",
      color: "#333",
    },
    cardSubtitle: {
      textAlign: "center",
      fontSize: 12,
      color: "#E33762",
      marginTop: 5,
    },
    cardSubtitle2: {
      textAlign: "center",
      fontSize: 12,
      color: "#000000",
      marginTop: 5,
    },
  });
  
  export default HomeScreen;
  
