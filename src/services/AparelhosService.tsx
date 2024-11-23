import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

export const getAparelhos = async () => {
  const response = await api.get("/aparelhos");
  return response.data.content;
};

export const addAparelho = async (aparelho: {
  usuarioId: number;
  nome: string;
  potencia: number;
  tempo: number;
  periodo: string;
}) => {
  const response = await api.post("/aparelhos", aparelho);
  return response.data;
};

export const updateAparelho = async (aparelhoId: number, aparelho: {
  usuarioId: number;
  nome: string;
  potencia: number;
  tempo: number;
  periodo: string;
}) => {
  const response = await api.put(`/aparelhos/${aparelhoId}`, aparelho);
  return response.data;
};

export const deleteAparelho = async (aparelhoId: number) => {
  await api.delete(`/aparelhos/${aparelhoId}`);
};
