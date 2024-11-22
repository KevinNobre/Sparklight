import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/type';

const NavBar: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.navItem}>
        <Text style={styles.navText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Consumo")} style={styles.navItem}>
        <Text style={styles.navText}>Consumo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Dicas")} style={styles.navItem}>
        <Text style={styles.navText}>Dicas</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Sair")} style={styles.navItem}>
        <Text style={styles.navText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
  },
  navItem: {
    alignItems: "center",
  },
  navText: {
    fontSize: 12,
    color: "#265853",
  },
});

export default NavBar;
