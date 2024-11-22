import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const cadastrarUsuario = async (usuarioData: {
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
  idade: number;
  genero: string;
  cep: string;
  cidade: string;
  estado: string;
}): Promise<any> => {
  try {
    const response = await api.post('/usuarios', usuarioData);

    if (response.data) {
      return response.data;
    } else {
      throw new Error('Erro no cadastro.');
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message || 'Erro desconhecido.');
    } else {
      throw new Error('Erro ao tentar realizar o cadastro.');
    }
  }
};
