import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Sparklight</Text>
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.registerText}>Registrar-se</Text>
        </TouchableOpacity>
      </View>

      {/* Texto central */}
      <Text style={styles.subtitle}>
        Trazendo <Text style={styles.boldText}>consciência</Text> para o seu espaço
      </Text>

      {/* Formulário */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ccc"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#ccc"
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      </View>

//
      //{/* Imagem inferior */}
     // <View style={styles.footer}>
      //<Image source={require('../../assets/woman.png')} height={'110px'} width={'120px'} marginBottom={'0.6rem'} />
      //</View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F4C4A',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FBC02D',
  },
  registerButton: {
    backgroundColor: '#FBC02D',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  registerText: {
    color: '#000000',
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 20,
    color: '#FBC02D',
    marginTop: 50,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
  form: {
    marginTop: 30,
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#FBC02D',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  footerImage: {
    width: 200,
    height: 150,
  },
});

export default LoginScreen;
