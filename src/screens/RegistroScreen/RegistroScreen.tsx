import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, ScrollView, KeyboardAvoidingView } from 'react-native';
import { cadastrarUsuario } from '../../services/CadastrarUsuarioService';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/type';

const RegistroScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [genero, setGenero] = useState('');
  const [idade, setIdade] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false); 

  const handleCadastro = async () => {
    if (!nome || !sobrenome || !email || !cep || !cidade || !estado || !genero || !idade || !senha) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }

    setLoading(true);

    const usuarioData = {
      nome,
      sobrenome,
      email,
      senha,
      idade: parseInt(idade),
      genero,
      cep,
      cidade,
      estado,
    };

    try {
      const usuario = await cadastrarUsuario(usuarioData);
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
      navigation.navigate('Login'); 
    } catch (error: any) {
      Alert.alert('Erro', error.message || 'Erro ao tentar cadastrar.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
    style={{ flex: 1 }}
  >
    <ScrollView  contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled">
      {/* Título e Ícone */}
      <View style={styles.header}>
        <Text style={styles.title}>Sparklight</Text>
        <Image
          source={require('../../assets/spark.png')}
          style={{
            height: 110, 
            width: 120, 
            marginBottom: 6, 
          }}
        />
        <Text style={styles.subtitle}>Registro</Text>
        <Text style={styles.description}>Preencha com suas informações</Text>
      </View>

      {/* Formulário */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#ccc"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Sobrenome"
          placeholderTextColor="#ccc"
          value={sobrenome}
          onChangeText={setSobrenome}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="CEP"
          placeholderTextColor="#ccc"
          value={cep}
          onChangeText={setCep}
        />
        <TextInput
          style={styles.input}
          placeholder="Cidade"
          placeholderTextColor="#ccc"
          value={cidade}
          onChangeText={setCidade}
        />
        <TextInput
          style={styles.input}
          placeholder="Estado"
          placeholderTextColor="#ccc"
          value={estado}
          onChangeText={setEstado}
        />
        <TextInput
          style={styles.input}
          placeholder="Gênero"
          placeholderTextColor="#ccc"
          value={genero}
          onChangeText={setGenero}
        />
        <TextInput
          style={styles.input}
          placeholder="Idade"
          placeholderTextColor="#ccc"
          value={idade}
          onChangeText={setIdade}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        {/* Botão de Registro */}
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleCadastro}
          disabled={loading}
        >
          <Text style={styles.registerButtonText}>{loading ? 'Cadastrando...' : 'Registrar'}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#0F4C4A',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 50,
    flexGrow: 1,  
    justifyContent: 'flex-start', 
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
