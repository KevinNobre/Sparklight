import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/type';

const RegistroScreen: React.FC = () => {

  return (
    <View style={styles.container}>
      {/* Título e Ícone */}
      <View style={styles.header}>
        <Text style={styles.title}>Sparklight</Text>
        <Image source={require('../../assets/spark.png')} height={'110px'} width={'120px'} marginBottom={'0.6rem'} />
        <Text style={styles.subtitle}>Registro</Text>
        <Text style={styles.description}>Preencha com suas informações</Text>
      </View>

      {/* Formulário */}
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#ccc" />
        <TextInput style={styles.input} placeholder="Sobrenome" placeholderTextColor="#ccc" />
        <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#ccc" />
        <TextInput style={styles.input} placeholder="CEP" placeholderTextColor="#ccc" />
        <TextInput style={styles.input} placeholder="Gênero" placeholderTextColor="#ccc" />
        <TextInput style={styles.input} placeholder="Idade" placeholderTextColor="#ccc" />
        <TextInput style={styles.input} placeholder="Contato" placeholderTextColor="#ccc" />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#ccc"
          secureTextEntry
        />
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerButtonText}>Registrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F4C4A',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FBC02D',
  },
  logo: {
    width: 60,
    height: 60,
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
  },
  description: {
    fontSize: 14,
    color: '#FFF',
    marginTop: 5,
  },
  form: {
    flex: 1,
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
  },
  registerButton: {
    backgroundColor: '#FBC02D',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  registerButtonText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RegistroScreen;
