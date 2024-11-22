import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loginUser = async (email: string, senha: string): Promise<any> => {
  try {
    const response = await api.get('/usuarios');

    if (response.data && response.data.content) {
      const usuarios = response.data.content;


      const usuario = usuarios.find(
        (u: any) => u.email === email && u.senha === senha
      );

      if (usuario) {
   
        return usuario;
      } else {

        throw new Error('Email ou senha inválidos.');
      }
    } else {
      throw new Error('Resposta da API inválida.');
    }
  } catch (error: unknown) {

    if (error instanceof Error) {
      throw new Error(error.message || 'Erro ao tentar fazer login.');
    } else {
      throw new Error('Erro desconhecido.');
    }
  }
};
