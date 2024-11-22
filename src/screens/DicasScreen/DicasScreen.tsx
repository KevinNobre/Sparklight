import React, { useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/type';
import NavBar from '../../components/NavBar';

const DicasScreen: React.FC = () => {
  const [totalSaved, setTotalSaved] = useState(72.59);

  // Dados das dicas
  const tipsData = [
    { id: '1', description: 'Conheça o melhor horário para economizar energia', reward: 50 },
    { id: '2', description: 'Reduza o uso de eletrodomésticos no horário de pico', reward: 30 },
  ];

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={require('../../assets/giselle.png')} style={styles.profileImage} />
        <Text style={styles.title}>Sparklight</Text>
        <Image source={require('../../assets/spark.png')} style={styles.logoImage} />
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

      {/* Seção de Dicas */}
      <View style={styles.tipsSection}>
        <Text style={styles.tipsTitle}>Dicas</Text>
        <FlatList
          data={tipsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.tipCard}>
              <Text style={styles.tipDescription}>{item.description}</Text>
              <View style={styles.tipFooter}>
                <Text style={styles.tipReward}>
                  Rewards: <Text style={styles.rewardHighlight}>{item.reward} ⚡</Text>
                </Text>
                <TouchableOpacity style={styles.checkButton}>
                  <Text style={styles.checkText}>✔</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>

      {/* Barra de Navegação */}
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
  tipsSection: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  tipsTitle: {
    fontSize: 20,
    top: 15,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 10,
    textAlign: "center",
  },
  tipCard: {
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    top: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 2,
  },
  tipDescription: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 12,
    fontWeight: "bold",
  },
  tipFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tipReward: {
    fontSize: 14,
    color: "#000000",
  },
  rewardHighlight: {
    fontWeight: "bold",
    color: "#FBC02D",
  },
  checkButton: {
    backgroundColor: "#E8F5E9",
    borderRadius: 20,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  checkText: {
    color: "#4CAF50",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default DicasScreen;
